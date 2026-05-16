const prisma = require("../config/db");

function mapById(items) {
  return new Map(items.map((item) => [item.id, item]));
}

async function getUsers(req, res) {
  try {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        approvalStatus: true,
        organizationName: true,
        phoneNumber: true,
        documentUrl: true,
        documentPublicId: true,
        createdAt: true
      },
      orderBy: { createdAt: "desc" }
    });

    return res.json({ users });
  } catch (error) {
    return res.status(500).json({ message: "Unable to fetch users.", error: error.message });
  }
}

async function updateUserApproval(req, res) {
  try {
    const userId = parseInt(req.params.id, 10);
    const { approvalStatus } = req.body;

    if (!["APPROVED", "REJECTED", "PENDING"].includes(approvalStatus)) {
      return res.status(400).json({ message: "Invalid approval status." });
    }

    const user = await prisma.user.findUnique({ where: { id: userId } });
    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: { approvalStatus },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        approvalStatus: true
      }
    });

    return res.json({ message: "User approval updated successfully.", user: updatedUser });
  } catch (error) {
    return res.status(500).json({ message: "Unable to update user approval.", error: error.message });
  }
}

async function getListings(req, res) {
  try {
    const listings = await prisma.foodListing.findMany({
      orderBy: { createdAt: "desc" }
    });

    const userIds = [
      ...new Set(
        listings.flatMap((listing) => [listing.createdById, listing.claimedById].filter(Boolean))
      )
    ];

    const users = userIds.length
      ? await prisma.user.findMany({
          where: { id: { in: userIds } },
          select: {
            id: true,
            name: true,
            organizationName: true
          }
        })
      : [];

    const userMap = mapById(users);

    const hydratedListings = listings.map((listing) => ({
      ...listing,
      createdBy: userMap.get(listing.createdById) || null,
      claimedBy: listing.claimedById ? userMap.get(listing.claimedById) || null : null
    }));

    return res.json({ listings: hydratedListings });
  } catch (error) {
    return res.status(500).json({ message: "Unable to fetch admin listings.", error: error.message });
  }
}

async function getTransactions(req, res) {
  try {
    const transactions = await prisma.transaction.findMany({
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
    return res.status(500).json({ message: "Unable to fetch admin transactions.", error: error.message });
  }
}

module.exports = {
  getUsers,
  updateUserApproval,
  getListings,
  getTransactions
};
