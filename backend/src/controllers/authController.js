const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const prisma = require("../config/db");
const { uploadBuffer } = require("../services/cloudinaryService");

function generateToken(user) {
  return jwt.sign(
    {
      id: user.id,
      role: user.role,
      approvalStatus: user.approvalStatus
    },
    process.env.JWT_SECRET,
    { expiresIn: "7d" }
  );
}

async function register(req, res) {
  try {
    const {
      name,
      email,
      password,
      role,
      organizationName,
      phoneNumber
    } = req.body;

    if (!name || !email || !password || !role) {
      return res.status(400).json({ message: "Name, email, password, and role are required." });
    }

    const allowedRoles = ["VENDOR", "NGO", "ADMIN", "INDIVIDUAL"];
    if (!allowedRoles.includes(role)) {
      return res.status(400).json({ message: "Invalid role selected." });
    }

    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return res.status(409).json({ message: "An account with this email already exists." });
    }

    let documentUpload = null;
    if (req.file) {
      documentUpload = await uploadBuffer(req.file.buffer, "feedback/documents", {
        resource_type: "auto",
        use_filename: true,
        unique_filename: true,
        filename_override: req.file.originalname
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const approvalStatus = role === "ADMIN" || role === "INDIVIDUAL" ? "APPROVED" : "PENDING";

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        role,
        organizationName,
        phoneNumber,
        approvalStatus,
        documentUrl: documentUpload?.secure_url,
        documentPublicId: documentUpload?.public_id
      },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        approvalStatus: true,
        organizationName: true,
        phoneNumber: true,
        documentUrl: true,
        createdAt: true
      }
    });

    return res.status(201).json({
      message:
        role === "ADMIN"
          ? "Admin account created successfully."
          : role === "INDIVIDUAL"
            ? "Individual account created successfully."
          : "Registration submitted. An admin must approve your account before you can use protected features.",
      user
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message || "Unable to register user.",
      error: error.message
    });
  }
}

async function login(req, res) {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required." });
    }

    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      return res.status(401).json({ message: "Invalid email or password." });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid email or password." });
    }

    const token = generateToken(user);

    return res.json({
      message: "Login successful.",
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
        approvalStatus: user.approvalStatus,
        organizationName: user.organizationName
      }
    });
  } catch (error) {
    return res.status(500).json({ message: "Unable to login.", error: error.message });
  }
}

async function getProfile(req, res) {
  return res.json({ user: req.user });
}

module.exports = {
  register,
  login,
  getProfile
};
