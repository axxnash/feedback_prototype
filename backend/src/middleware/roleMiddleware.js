function authorizeRoles(...roles) {
  return (req, res, next) => {
    if (!req.user || !roles.includes(req.user.role)) {
      return res.status(403).json({ message: "You are not allowed to access this resource." });
    }

    next();
  };
}

function requireApprovedAccount(req, res, next) {
  if (!req.user) {
    return res.status(401).json({ message: "Authentication required." });
  }

  if (req.user.role === "ADMIN") {
    return next();
  }

  if (req.user.approvalStatus !== "APPROVED") {
    return res.status(403).json({
      message: `Account is ${req.user.approvalStatus.toLowerCase()}. Approval is required to access this feature.`
    });
  }

  next();
}

module.exports = {
  authorizeRoles,
  requireApprovedAccount
};
