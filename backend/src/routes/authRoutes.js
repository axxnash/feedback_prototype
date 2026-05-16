const express = require("express");
const { register, login, getProfile } = require("../controllers/authController");
const authMiddleware = require("../middleware/authMiddleware");
const upload = require("../middleware/uploadMiddleware");

const router = express.Router();

router.post("/register", upload.single("document"), register);
router.post("/login", login);
router.get("/me", authMiddleware, getProfile);

module.exports = router;
