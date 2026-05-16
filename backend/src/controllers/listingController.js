const prisma = require("../config/db");
const { uploadBuffer } = require("../services/cloudinaryService");

const FOOD_CATEGORIES = ["FRUIT", "VEGETABLE", "DRINK", "BAKERY", "MEAL", "SNACK", "DAIRY", "OTHER"];
const LISTING_TYPES = ["DONATION", "DISCOUNTED"];

function removePickupCode(listing) {
  const { pickupCode, ...rest } = listing;
  return rest;
}

function canSeePickupCode(req, listing) {
  return (
    req.user.role === "ADMIN" ||
    listing.createdById === req.user.id ||
    listing.claimedById === req.user.id
  );
}

function getRoleListingScope(req) {
  if (req.user.role === "NGO") {
    return { status: "AVAILABLE", listingType: "DONATION" };
  }

  if (req.user.role === "INDIVIDUAL") {
    return { status: "AVAILABLE", listingType: "DISCOUNTED" };
  }

  return {};
}

function parseListingPayload(payload) {
  const parsed = { ...payload };

  if (parsed.listingType && !LISTING_TYPES.includes(parsed.listingType)) {
    throw new Error("INVALID_LISTING_TYPE");
  }

  if (parsed.category && !FOOD_CATEGORIES.includes(parsed.category)) {
    throw new Error("INVALID_CATEGORY");
  }

  if (parsed.pickupCode !== undefined) {
    parsed.pickupCode = parsed.pickupCode.trim();
  }

  if (parsed.latitude !== undefined) {
    parsed.latitude = parseFloat(parsed.latitude);
  }

  if (parsed.longitude !== undefined) {
    parsed.longitude = parseFloat(parsed.longitude);
  }

  if (parsed.expiryDateTime) {
    parsed.expiryDateTime = new Date(parsed.expiryDateTime);
  }

  if (parsed.listingType === "DISCOUNTED") {
    parsed.originalPrice =
      parsed.originalPrice === undefined || parsed.originalPrice === "" ? NaN : parseFloat(parsed.originalPrice);
    parsed.discountPercentage =
      parsed.discountPercentage === undefined || parsed.discountPercentage === ""
        ? NaN
        : parseFloat(parsed.discountPercentage);

    if (!(parsed.originalPrice > 0) || Number.isNaN(parsed.discountPercentage)) {
      throw new Error("INVALID_PRICE");
    }

    if (parsed.discountPercentage < 0 || parsed.discountPercentage > 100) {
      throw new Error("INVALID_DISCOUNT");
    }

    parsed.price = Number((parsed.originalPrice * (1 - parsed.discountPercentage / 100)).toFixed(2));
  } else if (parsed.listingType === "DONATION") {
    parsed.price = null;
    parsed.originalPrice = null;
    parsed.discountPercentage = null;
  }

  return parsed;
}

function validateCreateFields(fields) {
  const required = [
    "foodName",
    "description",
    "quantity",
    "foodType",
    "category",
    "listingType",
    "pickupCode",
    "expiryDateTime",
    "pickupLocation"
  ];

  for (const field of required) {
    if (!fields[field]) {
      throw new Error("MISSING_FIELDS");
    }
  }

  if (fields.latitude === undefined || Number.isNaN(fields.latitude) || fields.longitude === undefined || Number.isNaN(fields.longitude)) {
    throw new Error("MISSING_FIELDS");
  }
}

async function createListing(req, res) {
  try {
    const parsed = parseListingPayload(req.body);
    validateCreateFields(parsed);

    let imageUpload = null;
    if (req.file) {
      imageUpload = await uploadBuffer(req.file.buffer, "feedback/listings", {
        resource_type: "image",
        use_filename: true,
        unique_filename: true,
        filename_override: req.file.originalname
      });
    }

    const listing = await prisma.foodListing.create({
      data: {
        foodName: parsed.foodName,
        description: parsed.description,
        quantity: parsed.quantity,
        foodType: parsed.foodType,
        category: parsed.category,
        listingType: parsed.listingType,
        price: parsed.price,
        originalPrice: parsed.originalPrice,
        discountPercentage: parsed.discountPercentage,
        pickupCode: parsed.pickupCode,
        expiryDateTime: parsed.expiryDateTime,
        pickupLocation: parsed.pickupLocation,
        latitude: parsed.latitude,
        longitude: parsed.longitude,
        imageUrl: imageUpload?.secure_url,
        imagePublicId: imageUpload?.public_id,
        createdById: req.user.id
      },
      include: {
        createdBy: {
          select: {
            id: true,
            name: true,
            organizationName: true
          }
        }
      }
    });

    return res.status(201).json({ message: "Listing created successfully.", listing });
  } catch (error) {
    if (error.message === "MISSING_FIELDS") {
      return res.status(400).json({ message: "All listing fields are required." });
    }

    if (error.message === "INVALID_CATEGORY") {
      return res.status(400).json({ message: "Invalid food category selected." });
    }

    if (error.message === "INVALID_LISTING_TYPE") {
      return res.status(400).json({ message: "Invalid listing type selected." });
    }

    if (error.message === "INVALID_PRICE") {
      return res.status(400).json({ message: "Discounted listings must include a valid base price and discount percentage." });
    }

    if (error.message === "INVALID_DISCOUNT") {
      return res.status(400).json({ message: "Discount percentage must be between 0 and 100." });
    }

    return res.status(500).json({ message: "Unable to create listing.", error: error.message });
  }
}

async function getListings(req, res) {
  try {
    const { search = "", foodType, category, listingType, status } = req.query;
    const roleScope = getRoleListingScope(req);

    const listings = await prisma.foodListing.findMany({
      where: {
        foodName: {
          contains: search,
          mode: "insensitive"
        },
        ...(foodType ? { foodType: { equals: foodType, mode: "insensitive" } } : {}),
        ...(category ? { category } : {}),
        ...(listingType ? { listingType } : roleScope.listingType ? { listingType: roleScope.listingType } : {}),
        ...(status ? { status } : roleScope.status ? { status: roleScope.status } : {})
      },
      include: {
        createdBy: {
          select: {
            id: true,
            name: true,
            organizationName: true,
            phoneNumber: true
          }
        },
        claimedBy: {
          select: {
            id: true,
            name: true,
            organizationName: true
          }
        }
      },
      orderBy: { createdAt: "desc" }
    });

    const sanitizedListings = listings.map((listing) => (
      canSeePickupCode(req, listing) ? listing : removePickupCode(listing)
    ));

    return res.json({ listings: sanitizedListings });
  } catch (error) {
    return res.status(500).json({ message: "Unable to fetch listings.", error: error.message });
  }
}

async function getListingById(req, res) {
  try {
    const listing = await prisma.foodListing.findUnique({
      where: { id: parseInt(req.params.id, 10) },
      include: {
        createdBy: {
          select: {
            id: true,
            name: true,
            organizationName: true,
            phoneNumber: true
          }
        },
        claimedBy: {
          select: {
            id: true,
            name: true,
            organizationName: true
          }
        },
        transaction: true
      }
    });

    if (!listing) {
      return res.status(404).json({ message: "Listing not found." });
    }

    return res.json({
      listing: canSeePickupCode(req, listing) ? listing : removePickupCode(listing)
    });
  } catch (error) {
    return res.status(500).json({ message: "Unable to fetch listing.", error: error.message });
  }
}

async function getMyListings(req, res) {
  try {
    const listings = await prisma.foodListing.findMany({
      where: { createdById: req.user.id },
      orderBy: { createdAt: "desc" },
      include: {
        claimedBy: {
          select: {
            id: true,
            name: true,
            organizationName: true
          }
        },
        transaction: true
      }
    });

    return res.json({ listings });
  } catch (error) {
    return res.status(500).json({ message: "Unable to fetch your listings.", error: error.message });
  }
}

async function updateListing(req, res) {
  try {
    const listingId = parseInt(req.params.id, 10);
    const listing = await prisma.foodListing.findUnique({ where: { id: listingId } });

    if (!listing) {
      return res.status(404).json({ message: "Listing not found." });
    }

    if (listing.createdById !== req.user.id) {
      return res.status(403).json({ message: "You can only update your own listings." });
    }

    const parsed = parseListingPayload({
      ...listing,
      ...req.body,
      listingType: req.body.listingType || listing.listingType
    });

    const updateData = {
      foodName: parsed.foodName,
      description: parsed.description,
      quantity: parsed.quantity,
      foodType: parsed.foodType,
      category: parsed.category,
      listingType: parsed.listingType,
      price: parsed.price,
      originalPrice: parsed.originalPrice,
      discountPercentage: parsed.discountPercentage,
      pickupCode: parsed.pickupCode,
      expiryDateTime: parsed.expiryDateTime,
      pickupLocation: parsed.pickupLocation,
      latitude: parsed.latitude,
      longitude: parsed.longitude
    };

    if (req.file) {
      const imageUpload = await uploadBuffer(req.file.buffer, "feedback/listings", {
        resource_type: "image",
        use_filename: true,
        unique_filename: true,
        filename_override: req.file.originalname
      });
      updateData.imageUrl = imageUpload.secure_url;
      updateData.imagePublicId = imageUpload.public_id;
    }

    const updatedListing = await prisma.foodListing.update({
      where: { id: listingId },
      data: updateData
    });

    return res.json({ message: "Listing updated successfully.", listing: updatedListing });
  } catch (error) {
    if (error.message === "INVALID_CATEGORY") {
      return res.status(400).json({ message: "Invalid food category selected." });
    }

    if (error.message === "INVALID_LISTING_TYPE") {
      return res.status(400).json({ message: "Invalid listing type selected." });
    }

    if (error.message === "INVALID_PRICE") {
      return res.status(400).json({ message: "Discounted listings must include a valid base price and discount percentage." });
    }

    if (error.message === "INVALID_DISCOUNT") {
      return res.status(400).json({ message: "Discount percentage must be between 0 and 100." });
    }

    return res.status(500).json({ message: "Unable to update listing.", error: error.message });
  }
}

async function deleteListing(req, res) {
  try {
    const listingId = parseInt(req.params.id, 10);
    const listing = await prisma.foodListing.findUnique({
      where: { id: listingId },
      include: { transaction: true }
    });

    if (!listing) {
      return res.status(404).json({ message: "Listing not found." });
    }

    if (listing.createdById !== req.user.id) {
      return res.status(403).json({ message: "You can only delete your own listings." });
    }

    if (listing.transaction) {
      return res.status(400).json({ message: "Claimed or purchased listings cannot be deleted." });
    }

    await prisma.foodListing.delete({ where: { id: listingId } });

    return res.json({ message: "Listing deleted successfully." });
  } catch (error) {
    return res.status(500).json({ message: "Unable to delete listing.", error: error.message });
  }
}

module.exports = {
  createListing,
  getListings,
  getListingById,
  getMyListings,
  updateListing,
  deleteListing,
  FOOD_CATEGORIES,
  LISTING_TYPES
};
