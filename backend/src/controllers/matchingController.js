const prisma = require("../config/db");
const { haversineDistance, recommendListing } = require("../services/matchingService");

function removePickupCode(listing) {
  const { pickupCode, ...rest } = listing;
  return rest;
}

async function getNearbyListings(req, res) {
  try {
    const { latitude, longitude, radius = 20, foodType, category } = req.query;

    if (!latitude || !longitude) {
      return res.status(400).json({ message: "Latitude and longitude are required." });
    }

    const listingType = req.user.role === "INDIVIDUAL" ? "DISCOUNTED" : "DONATION";

    const listings = await prisma.foodListing.findMany({
      where: {
        status: "AVAILABLE",
        listingType,
        ...(foodType ? { foodType: { equals: foodType, mode: "insensitive" } } : {}),
        ...(category ? { category } : {})
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

    const results = listings
      .map((listing) => ({
        ...listing,
        distanceKm: haversineDistance(
          parseFloat(latitude),
          parseFloat(longitude),
          listing.latitude,
          listing.longitude
        )
      }))
      .filter((listing) => listing.distanceKm <= parseFloat(radius))
      .sort((a, b) => a.distanceKm - b.distanceKm);

    return res.json({ listings: results.map(removePickupCode) });
  } catch (error) {
    return res.status(500).json({ message: "Unable to fetch nearby listings.", error: error.message });
  }
}

async function getAiRecommendation(req, res) {
  try {
    const { latitude, longitude, foodPreference, availableListings = [] } = req.body;

    const hydratedListings = availableListings.map((listing) => ({
      ...listing,
      distanceKm:
        latitude && longitude
          ? haversineDistance(
              parseFloat(latitude),
              parseFloat(longitude),
              parseFloat(listing.latitude),
              parseFloat(listing.longitude)
            )
          : 9999
    }));

    const recommendation = recommendListing(hydratedListings, foodPreference);

    if (!recommendation) {
      return res.json({
        message: "No recommendation could be generated.",
        recommendation: null
      });
    }

    return res.json({
      message: "Recommendation generated using rule-based matching.",
      recommendation
    });
  } catch (error) {
    return res.status(500).json({ message: "Unable to generate recommendation.", error: error.message });
  }
}

module.exports = {
  getNearbyListings,
  getAiRecommendation
};
