function toRadians(value) {
  return (value * Math.PI) / 180;
}

function haversineDistance(lat1, lon1, lat2, lon2) {
  const earthRadiusKm = 6371;
<<<<<<< HEAD
  const latDiff = toRadians(lat2 - lat1);
  const lonDiff = toRadians(lon2 - lon1);
=======

  const latDiff = toRadians(lat2 - lat1);
  const lonDiff = toRadians(lon2 - lon1);

>>>>>>> 9a07e37 (Initial local commit)
  const a =
    Math.sin(latDiff / 2) * Math.sin(latDiff / 2) +
    Math.cos(toRadians(lat1)) *
      Math.cos(toRadians(lat2)) *
      Math.sin(lonDiff / 2) *
      Math.sin(lonDiff / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
<<<<<<< HEAD
  return earthRadiusKm * c;
}

function scoreListing(listing, preference) {
  let score = 0;

  if (preference && listing.foodType.toLowerCase() === preference.toLowerCase()) {
    score += 30;
  }

  const expiryMs = new Date(listing.expiryDateTime).getTime() - Date.now();
  const hoursUntilExpiry = Math.max(expiryMs / (1000 * 60 * 60), 0);
  score += Math.max(24 - hoursUntilExpiry, 0);
  score += Math.max(20 - (listing.distanceKm || 0), 0);

  return score;
}

function recommendListing(listings, preference) {
=======

  return earthRadiusKm * c;
}

function scoreListing(listing, preference = {}) {
  let score = 0;
  const reasons = [];

  // Food preference scoring
  if (
    preference && typeof preference === 'string' &&
    listing.foodType?.toLowerCase() ===
      preference.toLowerCase()
  ) {
    score += 35;
    reasons.push("Matches your food preference");
  }

  // Category preference scoring
  if (
    preference.preferredCategories?.includes(
      listing.category
    )
  ) {
    score += 20;
    reasons.push("Preferred food category");
  }

  // Expiry urgency scoring
  const expiryMs =
    new Date(listing.expiryDateTime).getTime() -
    Date.now();

  const hoursUntilExpiry = Math.max(
    expiryMs / (1000 * 60 * 60),
    0
  );

  if (hoursUntilExpiry <= 2) {
    score += 40;
    reasons.push(
      "Urgent claim needed due to expiry time"
    );
  } else if (hoursUntilExpiry <= 6) {
    score += 25;
  } else if (hoursUntilExpiry <= 12) {
    score += 15;
  }

  // Distance scoring
  if (listing.distanceKm <= 5) {
    score += 30;
    reasons.push("Very close location");
  } else if (listing.distanceKm <= 15) {
    score += 20;
  } else if (listing.distanceKm <= 25) {
    score += 10;
  }

  // Quantity scoring
  if (listing.quantity >= 50) {
    score += 15;
    reasons.push("Large food quantity");
  }

  return {
    score,
    reasons
  };
}

function recommendListing(listings, preference = {}) {
>>>>>>> 9a07e37 (Initial local commit)
  if (!listings.length) {
    return null;
  }

  return [...listings]
<<<<<<< HEAD
    .map((listing) => ({ ...listing, recommendationScore: scoreListing(listing, preference) }))
    .sort((a, b) => b.recommendationScore - a.recommendationScore)[0];
=======
    .map((listing) => {
      const result = scoreListing(
        listing,
        preference
      );

      return {
        ...listing,
        recommendationScore: result.score,
        recommendationReasons: result.reasons,
        confidence: Math.min(result.score, 100)
      };
    })
    .sort(
      (a, b) =>
        b.recommendationScore -
        a.recommendationScore
    )[0];
>>>>>>> 9a07e37 (Initial local commit)
}

module.exports = {
  haversineDistance,
  recommendListing
<<<<<<< HEAD
};
=======
};
>>>>>>> 9a07e37 (Initial local commit)
