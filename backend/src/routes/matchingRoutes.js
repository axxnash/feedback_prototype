const express = require("express");
const {
  getNearbyListings,
  getAiRecommendation
} = require("../controllers/matchingController");
const authMiddleware = require("../middleware/authMiddleware");
const { authorizeRoles, requireApprovedAccount } = require("../middleware/roleMiddleware");

const router = express.Router();

router.use(authMiddleware, requireApprovedAccount, authorizeRoles("NGO", "ADMIN"));
router.get("/nearby", getNearbyListings);
router.post("/ai", getAiRecommendation);

module.exports = router;
