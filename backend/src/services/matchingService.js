function toRadians(value) {
  return (value * Math.PI) / 180;
}

function haversineDistance(lat1, lon1, lat2, lon2) {
  const earthRadiusKm = 6371;
  const latDiff = toRadians(lat2 - lat1);
  const lonDiff = toRadians(lon2 - lon1);
  const a =
    Math.sin(latDiff / 2) * Math.sin(latDiff / 2) +
    Math.cos(toRadians(lat1)) *
      Math.cos(toRadians(lat2)) *
      Math.sin(lonDiff / 2) *
      Math.sin(lonDiff / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
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
  if (!listings.length) {
    return null;
  }

  return [...listings]
    .map((listing) => ({ ...listing, recommendationScore: scoreListing(listing, preference) }))
    .sort((a, b) => b.recommendationScore - a.recommendationScore)[0];
}

module.exports = {
  haversineDistance,
  recommendListing
};
