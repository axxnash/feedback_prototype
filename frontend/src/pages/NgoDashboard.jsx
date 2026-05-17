import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  claimListing,
  getAiRecommendation,
  getListings,
  getNearbyListings
} from "../api/listingApi";
import ListingCard from "../components/ListingCard";
import { FOOD_CATEGORIES } from "../constants/catalog";
import { clearStoredNgoClaim, setStoredNgoClaim } from "../utils/ngoClaim";
<<<<<<< HEAD
=======
import RecommendationChart from "../components/Chart";
>>>>>>> 9a07e37 (Initial local commit)

function NgoDashboard({ auth }) {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [foodType, setFoodType] = useState("");
  const [category, setCategory] = useState("");
  const [latitude, setLatitude] = useState("3.1390");
  const [longitude, setLongitude] = useState("101.6869");
  const [listings, setListings] = useState([]);
  const [nearby, setNearby] = useState([]);
  const [recommendation, setRecommendation] = useState(null);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const loadListings = async () => {
    try {
      const [listingData, nearbyData] = await Promise.all([
        getListings({ search, foodType, category, listingType: "DONATION" }),
        getNearbyListings({ latitude, longitude, radius: 25, foodType, category })
      ]);

      setListings(listingData.listings);
      setNearby(nearbyData.listings);

      const recommendationData = await getAiRecommendation({
        latitude,
        longitude,
<<<<<<< HEAD
        foodPreference: foodType,
=======
        preference: {
          foodPreference: foodType,
          preferredCategories: category ? [category] : []
        },
>>>>>>> 9a07e37 (Initial local commit)
        availableListings: nearbyData.listings
      });
      setRecommendation(recommendationData.recommendation);
    } catch (requestError) {
      setError(requestError.response?.data?.message || "Unable to load NGO dashboard.");
    }
  };

  useEffect(() => {
    clearStoredNgoClaim();
    if (auth.user.approvalStatus === "APPROVED") {
      loadListings();
    }
  }, []);

  const handleSearch = async (event) => {
    event.preventDefault();
    setError("");
    await loadListings();
  };

  const handleClaim = async (listing) => {
    try {
      const response = await claimListing(listing.id);
      const claim = {
        foodName: listing.foodName,
        description: listing.description,
        quantity: listing.quantity,
        category: listing.category,
        pickupLocation: listing.pickupLocation,
        vendorName: listing.createdBy?.organizationName || listing.createdBy?.name || "",
        transactionId: response.transaction?.id || null
      };
      setStoredNgoClaim(claim);
      await loadListings();
      navigate("/ngo/claim-ready", { state: { claim } });
    } catch (requestError) {
      setError(requestError.response?.data?.message || "Unable to claim listing.");
    }
  };

  return (
    <main className="app-page">
      <div className="container-shell">
        <div className="page-header">
          <div className="space-y-3">
            <span className="page-kicker">Discovery</span>
            <div>
              <h1 className="page-title">NGO Discovery Dashboard</h1>
              <p className="page-subtitle">
                Browse approved donations, filter by food type, and claim the most relevant listings.
              </p>
            </div>
          </div>
        </div>

        {auth.user.approvalStatus !== "APPROVED" && (
          <div className="feedback-warning">
            Your NGO account is still pending approval. Discovery and claiming will be available after admin approval.
          </div>
        )}

        {auth.user.approvalStatus !== "APPROVED" ? null : (
          <>
            <form className="card mb-8 grid gap-4 lg:grid-cols-6" onSubmit={handleSearch}>
            <input className="input lg:col-span-2" placeholder="Search food name" value={search} onChange={(e) => setSearch(e.target.value)} />
<<<<<<< HEAD
            <input className="input" placeholder="Food type" value={foodType} onChange={(e) => setFoodType(e.target.value)} />
=======
>>>>>>> 9a07e37 (Initial local commit)
            <select className="select" value={category} onChange={(e) => setCategory(e.target.value)}>
              <option value="">All categories</option>
              {FOOD_CATEGORIES.map((item) => (
                <option key={item.value} value={item.value}>{item.label}</option>
              ))}
            </select>
            <input className="input" placeholder="Latitude" value={latitude} onChange={(e) => setLatitude(e.target.value)} />
            <input className="input" placeholder="Longitude" value={longitude} onChange={(e) => setLongitude(e.target.value)} />
            <div className="lg:col-span-6">
              <button type="submit" className="btn-primary">
                Refresh listings
              </button>
            </div>
            </form>

            {message && <p className="mb-4 feedback-success">{message}</p>}
            {error && <p className="mb-4 feedback-error">{error}</p>}

            <section className="mb-8 card">
              <h2 className="text-xl font-semibold text-ink-900" style={{ fontFamily: "'Lora', Georgia, serif" }}>
                AI recommendation
              </h2>
              {recommendation ? (
                <div className="panel-soft mt-4 text-sm text-ink-700">
<<<<<<< HEAD
                  Recommended listing: <span className="font-semibold">{recommendation.foodName}</span> in{" "}
                  <span className="font-semibold">{recommendation.pickupLocation}</span>
                  {recommendation.distanceKm !== undefined && ` (${recommendation.distanceKm.toFixed(2)} km away)`}
=======
                  Recommended listing: <span className="font-semibold">{recommendation.foodName}</span>
                  <p className="mt-2">AI Confidence: <span className="font-semibold">{recommendation.confidence}%</span></p>
                 <p className="mt-2"> Why this was recommended:{" "}
                   {Array.isArray(recommendation.recommendationReasons) ? recommendation.recommendationReasons.join(", ")
                     : Array.isArray(recommendation.recommendationReason)
                     ? recommendation.recommendationReason.join(", ")
                     : recommendation.recommendationReasons || "No specific reasons"}
                 </p>
                 <div className="mt-6" border-t pt-6>
                    <RecommendationChart listings={nearby} topRecommendation={recommendation}/>
                 </div>
>>>>>>> 9a07e37 (Initial local commit)
                </div>
              ) : (
                <p className="mt-4 text-sm text-ink-700">No recommendation available yet.</p>
              )}
            </section>

            <section className="mb-10">
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-2xl font-semibold text-ink-900" style={{ fontFamily: "'Lora', Georgia, serif" }}>Nearby listings</h2>
                <span className="text-sm text-ink-700">{nearby.length} within radius</span>
              </div>
              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {nearby.map((listing) => (
                  <ListingCard key={listing.id} listing={listing} actionLabel="Claim listing" onAction={handleClaim} />
                ))}
              </div>
            </section>

            <section>
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-2xl font-semibold text-ink-900" style={{ fontFamily: "'Lora', Georgia, serif" }}>All available listings</h2>
                <span className="text-sm text-ink-700">{listings.length} results</span>
              </div>
              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {listings.map((listing) => (
                  <ListingCard key={listing.id} listing={listing} actionLabel="Claim listing" onAction={handleClaim} />
                ))}
              </div>
            </section>
          </>
        )}
      </div>
    </main>
  );
}

export default NgoDashboard;
