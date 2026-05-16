import { NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { createListing, deleteListing, getMyListings, updateListing } from "../api/listingApi";
import StatusBadge from "../components/StatusBadge";
import { FOOD_CATEGORIES, LISTING_TYPES } from "../constants/catalog";

function categoryToFoodType(category) {
  const match = FOOD_CATEGORIES.find((item) => item.value === category);
  return match?.label || "Other";
}

function calculateDiscountedPrice(originalPrice, discountPercentage) {
  const price = parseFloat(originalPrice);
  const discount = parseFloat(discountPercentage);

  if (!(price > 0) || Number.isNaN(discount)) {
    return null;
  }

  return Math.max(0, Number((price * (1 - discount / 100)).toFixed(2)));
}

async function reverseGeocode(latitude, longitude) {
  const response = await fetch(
    `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`,
    {
      headers: {
        Accept: "application/json"
      }
    }
  );

  if (!response.ok) {
    throw new Error("Unable to look up address.");
  }

  const data = await response.json();
  return data.display_name || "";
}

const initialForm = {
  foodName: "",
  description: "",
  quantity: "",
  category: "MEAL",
  listingType: "DONATION",
  originalPrice: "",
  discountPercentage: "",
  pickupCode: "",
  expiryDateTime: "",
  pickupLocation: "",
  latitude: "",
  longitude: "",
  image: null
};

function VendorDashboard({ auth, view = "create" }) {
  const navigate = useNavigate();
  const [form, setForm] = useState(initialForm);
  const [listings, setListings] = useState([]);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [locating, setLocating] = useState(false);
  const [locationNameLoading, setLocationNameLoading] = useState(false);

  const loadListings = async () => {
    try {
      const data = await getMyListings();
      setListings(data.listings);
    } catch (requestError) {
      setError(requestError.response?.data?.message || "Unable to load listings.");
    }
  };

  useEffect(() => {
    if (auth.user.approvalStatus === "APPROVED") {
      loadListings();
    }
  }, []);

  const handleChange = (event) => {
    const { name, value, files } = event.target;
    setForm((prev) => ({
      ...prev,
      [name]: files ? files[0] : value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setMessage("");
    setError("");

    try {
      const formData = new FormData();
      const payload = {
        ...form,
        foodType: categoryToFoodType(form.category)
      };

      Object.entries(payload).forEach(([key, value]) => {
        if (value) {
          formData.append(key, value);
        }
      });

      if (editingId) {
        await updateListing(editingId, formData);
        setMessage("Food listing updated successfully.");
      } else {
        await createListing(formData);
        setMessage("Food listing created successfully.");
      }
      setForm(initialForm);
      setEditingId(null);
      await loadListings();
    } catch (requestError) {
      setError(requestError.response?.data?.message || "Unable to save listing.");
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (listing) => {
    setEditingId(listing.id);
    setForm({
      foodName: listing.foodName || "",
      description: listing.description || "",
      quantity: listing.quantity || "",
      category: listing.category || "MEAL",
      listingType: listing.listingType || "DONATION",
      originalPrice: listing.originalPrice?.toString() || listing.price?.toString() || "",
      discountPercentage: listing.discountPercentage?.toString() || "0",
      pickupCode: listing.pickupCode || "",
      expiryDateTime: listing.expiryDateTime ? new Date(listing.expiryDateTime).toISOString().slice(0, 16) : "",
      pickupLocation: listing.pickupLocation || "",
      latitude: listing.latitude?.toString() || "",
      longitude: listing.longitude?.toString() || "",
      image: null
    });
  };

  const handleDelete = async (id) => {
    try {
      await deleteListing(id);
      await loadListings();
    } catch (requestError) {
      setError(requestError.response?.data?.message || "Unable to delete listing.");
    }
  };

  const handleUseCurrentLocation = () => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported in this browser.");
      return;
    }

    setLocating(true);
    setError("");

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const latitude = position.coords.latitude.toFixed(6);
        const longitude = position.coords.longitude.toFixed(6);

        setForm((prev) => ({
          ...prev,
          latitude,
          longitude
        }));

        try {
          setLocationNameLoading(true);
          const pickupLocation = await reverseGeocode(latitude, longitude);
          if (pickupLocation) {
            setForm((prev) => ({
              ...prev,
              pickupLocation
            }));
          }
        } catch {
          setError("Coordinates were filled, but the place name could not be fetched. You can still type the pickup address manually.");
        } finally {
          setLocationNameLoading(false);
          setLocating(false);
        }
      },
      () => {
        setError("Unable to fetch your current location. You can still type the address and coordinates manually.");
        setLocating(false);
        setLocationNameLoading(false);
      }
    );
  };

  const discountedPrice = calculateDiscountedPrice(form.originalPrice, form.discountPercentage);

  return (
    <main className="app-page">
      <div className="container-shell">
        <div className="page-header">
          <div className="space-y-3">
            <span className="page-kicker">Vendor Workspace</span>
            <div>
              <h1 className="page-title">Vendor Dashboard</h1>
              <p className="page-subtitle">
                Welcome, {auth.user.name}. Approval status: <span className="font-semibold">{auth.user.approvalStatus}</span>
              </p>
            </div>
          </div>
        </div>

        {auth.user.approvalStatus !== "APPROVED" && (
          <div className="mb-8 feedback-warning">
            Your account is waiting for admin approval. Listing management will unlock once you are approved.
          </div>
        )}

        <div className="mb-8 flex flex-wrap gap-3">
          <NavLink
            to="/vendor"
            end
            className={({ isActive }) =>
              `rounded-xl px-4 py-3 text-sm font-semibold transition ${
                isActive ? "bg-citrus-500 text-white" : "border border-sand-200 bg-white text-ink-900 hover:bg-sand-100"
              }`
            }
          >
            Add listing
          </NavLink>
          <NavLink
            to="/vendor/listings"
            className={({ isActive }) =>
              `rounded-xl px-4 py-3 text-sm font-semibold transition ${
                isActive ? "bg-citrus-500 text-white" : "border border-sand-200 bg-white text-ink-900 hover:bg-sand-100"
              }`
            }
          >
            My listings
          </NavLink>
        </div>

        {view === "create" ? (
        <form className="card grid gap-4 lg:max-w-3xl" onSubmit={handleSubmit}>
          <h2 className="text-xl font-semibold text-ink-900" style={{ fontFamily: "'Lora', Georgia, serif" }}>
            {editingId ? "Edit food listing" : "Add food listing"}
          </h2>
          <input className="input" name="foodName" placeholder="Food name" value={form.foodName} onChange={handleChange} />
          <textarea className="input" name="description" placeholder="Description" value={form.description} onChange={handleChange} />
          <input className="input" name="quantity" placeholder="Quantity" value={form.quantity} onChange={handleChange} />
          <select className="select" name="category" value={form.category} onChange={handleChange}>
            {FOOD_CATEGORIES.map((item) => (
              <option key={item.value} value={item.value}>{item.label}</option>
            ))}
          </select>
          <select className="select" name="listingType" value={form.listingType} onChange={handleChange}>
            {LISTING_TYPES.map((item) => (
              <option key={item.value} value={item.value}>{item.label}</option>
            ))}
          </select>
          {form.listingType === "DISCOUNTED" && (
            <>
              <input
                className="input"
                name="originalPrice"
                type="number"
                min="0"
                step="0.01"
                placeholder="Price (RM)"
                value={form.originalPrice}
                onChange={handleChange}
              />
              <input
                className="input"
                name="discountPercentage"
                type="number"
                min="0"
                max="100"
                step="1"
                placeholder="Discount percentage"
                value={form.discountPercentage}
                onChange={handleChange}
              />
              <div className="panel-soft text-sm text-ink-700">
                Discounted price: <span className="font-semibold text-citrus-600">
                  {discountedPrice === null ? "Enter price and discount" : `RM ${discountedPrice.toFixed(2)}`}
                </span>
              </div>
            </>
          )}
          <input
            className="input"
            name="pickupCode"
            placeholder={form.listingType === "DISCOUNTED" ? "Pickup code for buyer collection" : "Pickup code for NGO handover"}
            value={form.pickupCode}
            onChange={handleChange}
          />
          <input className="input" name="expiryDateTime" type="datetime-local" value={form.expiryDateTime} onChange={handleChange} />
          <input
            className="input"
            name="pickupLocation"
            placeholder="Pickup address"
            value={form.pickupLocation}
            onChange={handleChange}
          />
          {locationNameLoading && (
            <p className="text-sm text-ink-700">Looking up location name from your current coordinates...</p>
          )}
          <div className="panel-soft text-sm text-ink-700">
            Donation listings are reserved for NGOs. Discounted listings will appear only to individual users and can be checked out through the payment flow.
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <input className="input" name="latitude" placeholder="Latitude" value={form.latitude} onChange={handleChange} />
            <input className="input" name="longitude" placeholder="Longitude" value={form.longitude} onChange={handleChange} />
          </div>
          <button type="button" className="btn-outline" onClick={handleUseCurrentLocation} disabled={locating}>
            {locating ? "Getting location..." : locationNameLoading ? "Looking up place name..." : "Use current location"}
          </button>
          <input className="input" name="image" type="file" accept="image/*" onChange={handleChange} />
          {message && <p className="feedback-success">{message}</p>}
          {error && <p className="feedback-error">{error}</p>}
          <div className="flex flex-wrap gap-3">
            <button type="submit" className="btn-primary" disabled={loading || auth.user.approvalStatus !== "APPROVED"}>
              {loading ? "Saving..." : editingId ? "Update listing" : "Create listing"}
            </button>
            {editingId && (
              <button
                type="button"
                className="btn-outline"
                onClick={() => {
                  setEditingId(null);
                  setForm(initialForm);
                }}
              >
                Cancel edit
              </button>
            )}
          </div>
        </form>
        ) : (
        <div className="card">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-xl font-semibold text-ink-900" style={{ fontFamily: "'Lora', Georgia, serif" }}>My listings</h2>
            <span className="text-sm text-ink-700">{listings.length} total</span>
          </div>
          <div className="space-y-4">
            {listings.length === 0 ? (
              <p className="text-sm text-ink-700">No listings yet.</p>
            ) : (
              listings.map((listing) => (
                <div key={listing.id} className="rounded-3xl border border-sand-200 bg-sand-50 p-4">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div className="space-y-1">
                      <h3 className="text-lg font-semibold text-ink-900" style={{ fontFamily: "'Lora', Georgia, serif" }}>{listing.foodName}</h3>
                      <p className="text-sm text-ink-700">{listing.description}</p>
                      <p className="text-sm text-ink-700">
                        {listing.quantity} - {listing.pickupLocation}
                      </p>
                      <p className="text-sm text-ink-700">Category: {listing.category}</p>
                      <p className="text-sm font-semibold text-citrus-600">
                        {listing.listingType === "DISCOUNTED"
                          ? `RM ${Number(listing.originalPrice || listing.price || 0).toFixed(2)} less ${Number(listing.discountPercentage || 0).toFixed(0)}% = RM ${Number(listing.price || 0).toFixed(2)}`
                          : "Donation listing"}
                      </p>
                      <p className="text-sm font-semibold text-citrus-600">Pickup code: {listing.pickupCode}</p>
                    </div>
                    <StatusBadge status={listing.status} />
                  </div>
                  <div className="mt-4 flex items-center justify-between gap-3">
                    <span className="text-xs text-ink-700">
                      Expires {new Date(listing.expiryDateTime).toLocaleString()}
                    </span>
                    <div className="flex flex-wrap gap-2">
                      <button
                        type="button"
                        className="btn-outline py-2"
                        onClick={() => {
                          handleEdit(listing);
                          navigate("/vendor");
                        }}
                      >
                        Edit
                      </button>
                      <button
                        type="button"
                        className="btn-danger py-2"
                        onClick={() => handleDelete(listing.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
        )}
      </div>
    </main>
  );
}

export default VendorDashboard;
