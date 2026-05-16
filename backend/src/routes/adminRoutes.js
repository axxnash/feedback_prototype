const express = require("express");
const {
  getUsers,
  updateUserApproval,
  getListings,
  getTransactions
} = require("../controllers/adminController");
const authMiddleware = require("../middleware/authMiddleware");
const { authorizeRoles } = require("../middleware/roleMiddleware");

const router = express.Router();

router.use(authMiddleware, authorizeRoles("ADMIN"));
router.get("/users", getUsers);
router.put("/users/:id/approval", updateUserApproval);
router.get("/listings", getListings);
router.get("/transactions", getTransactions);

module.exports = router;
