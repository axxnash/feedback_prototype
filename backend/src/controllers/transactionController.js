const prisma = require("../config/db");

function mapById(items) {
  return new Map(items.map((item) => [item.id, item]));
}

async function getTransactionHistory(req, res) {
  try {
    const where =
      req.user.role === "ADMIN"
        ? {}
        : {
            OR: [{ vendorId: req.user.id }, { recipientId: req.user.id }]
          };

    const transactions = await prisma.transaction.findMany({
      where,
      orderBy: { createdAt: "desc" }
    });

    const listingIds = [...new Set(transactions.map((transaction) => transaction.listingId))];
    const userIds = [
      ...new Set(
        transactions.flatMap((transaction) => [transaction.vendorId, transaction.recipientId])
      )
    ];

    const [listings, users] = await Promise.all([
      listingIds.length
        ? prisma.foodListing.findMany({
            where: { id: { in: listingIds } }
          })
        : [],
      userIds.length
        ? prisma.user.findMany({
            where: { id: { in: userIds } },
            select: {
              id: true,
              name: true,
              organizationName: true
            }
          })
        : []
    ]);

    const listingMap = mapById(listings);
    const userMap = mapById(users);

    const hydratedTransactions = transactions.map((transaction) => ({
      ...transaction,
      listing: listingMap.get(transaction.listingId) || null,
      vendor: userMap.get(transaction.vendorId) || null,
      recipient: userMap.get(transaction.recipientId) || null
    }));

    return res.json({ transactions: hydratedTransactions });
  } catch (error) {
    return res.status(500).json({ message: "Unable to fetch transactions.", error: error.message });
  }
}

async function updateTransactionStatus(req, res) {
  try {
    const transactionId = parseInt(req.params.transactionId, 10);
    const { status } = req.body;
    const allowedStatuses = ["PICKED_UP", "COMPLETED", "CANCELLED"];

    if (!allowedStatuses.includes(status)) {
      return res.status(400).json({ message: "Invalid transaction status." });
    }

    const transaction = await prisma.transaction.findUnique({
      where: { id: transactionId },
      include: { listing: true }
    });

    if (!transaction) {
      return res.status(404).json({ message: "Transaction not found." });
    }

    const isVendor = transaction.vendorId === req.user.id;
    const isRecipient = transaction.recipientId === req.user.id;
    const isAdmin = req.user.role === "ADMIN";

    if (!isVendor && !isRecipient && !isAdmin) {
      return res.status(403).json({ message: "You cannot update this transaction." });
    }

    if ((status === "PICKED_UP" || status === "COMPLETED") && !isVendor && !isAdmin) {
      return res.status(403).json({ message: "Only the vendor or admin can set this status." });
    }

    if ((status === "PICKED_UP" || status === "COMPLETED") && !transaction.isPickupCodeVerified) {
      return res.status(400).json({ message: "Pickup code must be verified before updating this transaction." });
    }

    const updatedTransaction = await prisma.$transaction(async (tx) => {
      const savedTransaction = await tx.transaction.update({
        where: { id: transactionId },
        data: { status }
      });

      const listingStatusMap = {
        PICKED_UP: "PICKED_UP",
        COMPLETED: "COMPLETED",
        CANCELLED: "AVAILABLE"
      };

      const listingUpdateData =
        status === "CANCELLED"
          ? { status: listingStatusMap[status], claimedById: null }
          : { status: listingStatusMap[status] };

      await tx.foodListing.update({
        where: { id: transaction.listingId },
        data: listingUpdateData
      });

      return savedTransaction;
    });

    return res.json({
      message: "Transaction status updated successfully.",
      transaction: updatedTransaction
    });
  } catch (error) {
    return res.status(500).json({ message: "Unable to update transaction.", error: error.message });
  }
}

async function verifyPickupCode(req, res) {
  try {
    const transactionId = parseInt(req.params.transactionId, 10);
    const { pickupCode } = req.body;

    if (!pickupCode) {
      return res.status(400).json({ message: "Pickup code is required." });
    }

    const transaction = await prisma.transaction.findUnique({
      where: { id: transactionId },
      include: { listing: true }
    });

    if (!transaction) {
      return res.status(404).json({ message: "Transaction not found." });
    }

    const isVendor = transaction.vendorId === req.user.id;
    const isAdmin = req.user.role === "ADMIN";

    if (!isVendor && !isAdmin) {
      return res.status(403).json({ message: "Only the vendor or admin can verify pickup codes." });
    }

    if (transaction.isPickupCodeVerified) {
      return res.status(400).json({ message: "Pickup code has already been verified." });
    }

    if (transaction.listing.pickupCode !== pickupCode.trim()) {
      return res.status(400).json({ message: "The pickup code does not match." });
    }

    const updatedTransaction = await prisma.$transaction(async (tx) => {
      const savedTransaction = await tx.transaction.update({
        where: { id: transactionId },
        data: {
          isPickupCodeVerified: true,
          pickupCodeVerifiedAt: new Date(),
          status: "PICKED_UP"
        },
        include: {
          listing: true,
          vendor: {
            select: {
              id: true,
              name: true,
              organizationName: true
            }
          },
          recipient: {
            select: {
              id: true,
              name: true,
              organizationName: true
            }
          }
        }
      });

      await tx.foodListing.update({
        where: { id: transaction.listingId },
        data: { status: "PICKED_UP" }
      });

      return savedTransaction;
    });

    return res.json({
      message: "Pickup code verified. Transaction marked as picked up.",
      transaction: updatedTransaction
    });
  } catch (error) {
    return res.status(500).json({ message: "Unable to verify pickup code.", error: error.message });
  }
}

module.exports = {
  getTransactionHistory,
  updateTransactionStatus,
  verifyPickupCode
};
