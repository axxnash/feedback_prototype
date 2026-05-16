const express = require("express");
const {
  getTransactionHistory,
  updateTransactionStatus,
  verifyPickupCode
} = require("../controllers/transactionController");
const authMiddleware = require("../middleware/authMiddleware");
const { requireApprovedAccount } = require("../middleware/roleMiddleware");

const router = express.Router();

router.use(authMiddleware, requireApprovedAccount);
router.get("/history", getTransactionHistory);
router.post("/:transactionId/verify-code", verifyPickupCode);
router.put("/:transactionId/status", updateTransactionStatus);

module.exports = router;
