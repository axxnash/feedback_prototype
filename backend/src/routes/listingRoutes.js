const express = require("express");
const {
  createListing,
  getListings,
  getListingById,
  getMyListings,
  updateListing,
  deleteListing
} = require("../controllers/listingController");
const authMiddleware = require("../middleware/authMiddleware");
const { authorizeRoles, requireApprovedAccount } = require("../middleware/roleMiddleware");
const upload = require("../middleware/uploadMiddleware");

const router = express.Router();

router.use(authMiddleware, requireApprovedAccount);
router.get("/", getListings);
router.get("/vendor/my-listings", authorizeRoles("VENDOR"), getMyListings);
router.get("/:id", getListingById);
router.post("/", authorizeRoles("VENDOR"), upload.single("image"), createListing);
router.put("/:id", authorizeRoles("VENDOR"), upload.single("image"), updateListing);
router.delete("/:id", authorizeRoles("VENDOR"), deleteListing);

module.exports = router;
