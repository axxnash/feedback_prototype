const prisma = require("../config/db");

async function claimListing(req, res) {
  try {
    const listingId = parseInt(req.params.listingId, 10);

    const transaction = await prisma.$transaction(async (tx) => {
      const listing = await tx.foodListing.findUnique({
        where: { id: listingId }
      });

      if (!listing) {
        throw new Error("LISTING_NOT_FOUND");
      }

      if (listing.listingType !== "DONATION") {
        throw new Error("INVALID_LISTING_TYPE");
      }

      if (listing.createdById === req.user.id) {
        throw new Error("OWN_LISTING");
      }

      const claimResult = await tx.foodListing.updateMany({
        where: {
          id: listingId,
          status: "AVAILABLE",
          listingType: "DONATION"
        },
        data: {
          status: "CLAIMED",
          claimedById: req.user.id
        }
      });

      if (claimResult.count === 0) {
        throw new Error("ALREADY_CLAIMED");
      }

      return tx.transaction.create({
        data: {
          listingId,
          vendorId: listing.createdById,
          recipientId: req.user.id,
          status: "CLAIMED",
          paymentStatus: "NOT_REQUIRED",
          amountPaid: null
        }
      });
    });

    return res.status(201).json({
      message: "Donation claimed successfully.",
      transaction
    });
  } catch (error) {
    if (error.message === "LISTING_NOT_FOUND") {
      return res.status(404).json({ message: "Listing not found." });
    }

    if (error.message === "INVALID_LISTING_TYPE") {
      return res.status(400).json({ message: "Only donation listings can be claimed by NGOs." });
    }

    if (error.message === "OWN_LISTING") {
      return res.status(400).json({ message: "You cannot claim your own listing." });
    }

    if (error.message === "ALREADY_CLAIMED") {
      return res.status(400).json({ message: "This listing has already been claimed or is unavailable." });
    }

    return res.status(500).json({ message: "Unable to claim listing.", error: error.message });
  }
}

async function checkoutDiscountedListings(req, res) {
  try {
    const listingIds = Array.isArray(req.body.listingIds)
      ? req.body.listingIds.map((id) => parseInt(id, 10)).filter(Boolean)
      : [];

    if (listingIds.length === 0) {
      return res.status(400).json({ message: "Select at least one discounted listing to continue." });
    }

    const checkout = await prisma.$transaction(async (tx) => {
      const listings = await tx.foodListing.findMany({
        where: { id: { in: listingIds } }
      });

      if (listings.length !== listingIds.length) {
        throw new Error("LISTING_NOT_FOUND");
      }

      const unavailable = listings.find((listing) => listing.status !== "AVAILABLE");
      if (unavailable) {
        throw new Error("UNAVAILABLE");
      }

      const invalidType = listings.find((listing) => listing.listingType !== "DISCOUNTED");
      if (invalidType) {
        throw new Error("INVALID_LISTING_TYPE");
      }

      const ownListing = listings.find((listing) => listing.createdById === req.user.id);
      if (ownListing) {
        throw new Error("OWN_LISTING");
      }

      const createdTransactions = [];

      for (const listing of listings) {
        await tx.foodListing.update({
          where: { id: listing.id },
          data: {
            status: "CLAIMED",
            claimedById: req.user.id
          }
        });

        const transaction = await tx.transaction.create({
          data: {
            listingId: listing.id,
            vendorId: listing.createdById,
            recipientId: req.user.id,
            status: "CLAIMED",
            paymentStatus: "PAID_MOCK",
            amountPaid: listing.price || 0
          }
        });

        createdTransactions.push(transaction);
      }

      return {
        transactions: createdTransactions,
        total: listings.reduce((sum, listing) => sum + (listing.price || 0), 0)
      };
    });

    return res.status(201).json({
      message: "Payment completed. Your discounted food is ready for collection.",
      ...checkout
    });
  } catch (error) {
    if (error.message === "LISTING_NOT_FOUND") {
      return res.status(404).json({ message: "One or more listings could not be found." });
    }

    if (error.message === "UNAVAILABLE") {
      return res.status(400).json({ message: "One or more selected listings are no longer available." });
    }

    if (error.message === "INVALID_LISTING_TYPE") {
      return res.status(400).json({ message: "Only discounted listings can be purchased in the individual flow." });
    }

    if (error.message === "OWN_LISTING") {
      return res.status(400).json({ message: "You cannot purchase your own listing." });
    }

    return res.status(500).json({ message: "Unable to complete payment.", error: error.message });
  }
}

module.exports = {
  claimListing,
  checkoutDiscountedListings
};
