const express = require("express");
const { claimListing, checkoutDiscountedListings } = require("../controllers/claimController");
const authMiddleware = require("../middleware/authMiddleware");
const { authorizeRoles, requireApprovedAccount } = require("../middleware/roleMiddleware");

const router = express.Router();

router.post("/checkout", authMiddleware, requireApprovedAccount, authorizeRoles("INDIVIDUAL"), checkoutDiscountedListings);
router.post("/:listingId", authMiddleware, requireApprovedAccount, authorizeRoles("NGO"), claimListing);

module.exports = router;
