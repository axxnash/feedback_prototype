import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getListings } from "../api/listingApi";
import ListingCard from "../components/ListingCard";
import { FOOD_CATEGORIES } from "../constants/catalog";
import { clearStoredCheckout, setStoredCheckout } from "../utils/checkout";

function IndividualDashboard({ auth }) {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [foodType, setFoodType] = useState("");
  const [category, setCategory] = useState("");
  const [listings, setListings] = useState([]);
  const [cart, setCart] = useState([]);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const loadListings = async () => {
    try {
      const data = await getListings({
        search,
        foodType,
        category,
        listingType: "DISCOUNTED"
      });
      setListings(data.listings);
    } catch (requestError) {
      setError(requestError.response?.data?.message || "Unable to load discounted food.");
    }
  };

  useEffect(() => {
    clearStoredCheckout();
    loadListings();
  }, []);

  const handleSearch = async (event) => {
    event.preventDefault();
    setError("");
    await loadListings();
  };

  const handleAddToCart = (listing) => {
    setCart((prev) => (prev.some((item) => item.id === listing.id) ? prev : [...prev, listing]));
    setMessage(`${listing.foodName} added to your cart.`);
  };

  const handleRemoveFromCart = (listingId) => {
    setCart((prev) => prev.filter((item) => item.id !== listingId));
  };

  const handleCheckout = () => {
    setStoredCheckout(cart);
    navigate("/individual/checkout", { state: { items: cart } });
  };

  const total = useMemo(
    () => cart.reduce((sum, item) => sum + (item.price || 0), 0),
    [cart]
  );

  return (
    <main className="app-page">
      <div className="container-shell">
        <div className="page-header">
          <div className="space-y-3">
            <span className="page-kicker">Discounted Picks</span>
            <div>
              <h1 className="page-title">Individual Marketplace</h1>
              <p className="page-subtitle">
                Browse discounted food from vendors, add items to your cart, complete payment, and collect your order with the pickup code in transaction history.
              </p>
            </div>
          </div>
        </div>

        <form className="card mb-8 grid gap-4 lg:grid-cols-4" onSubmit={handleSearch}>
          <input className="input lg:col-span-2" placeholder="Search food name" value={search} onChange={(e) => setSearch(e.target.value)} />
          <input className="input" placeholder="Food type" value={foodType} onChange={(e) => setFoodType(e.target.value)} />
          <select className="select" value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="">All categories</option>
            {FOOD_CATEGORIES.map((item) => (
              <option key={item.value} value={item.value}>{item.label}</option>
            ))}
          </select>
          <div className="lg:col-span-4">
            <button type="submit" className="btn-primary">Refresh discounted food</button>
          </div>
        </form>

        {message && <p className="mb-4 feedback-success">{message}</p>}
        {error && <p className="mb-4 feedback-error">{error}</p>}

        <section className="grid gap-8 xl:grid-cols-[1.5fr_0.8fr]">
          <div>
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-2xl font-semibold text-ink-900" style={{ fontFamily: "'Lora', Georgia, serif" }}>Discounted listings</h2>
              <span className="text-sm text-ink-700">{listings.length} results</span>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {listings.map((listing) => (
                <ListingCard
                  key={listing.id}
                  listing={listing}
                  actionLabel={cart.some((item) => item.id === listing.id) ? "In cart" : "Add to cart"}
                  onAction={handleAddToCart}
                  disabled={cart.some((item) => item.id === listing.id)}
                />
              ))}
            </div>
          </div>

          <aside className="card h-fit">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-xl font-semibold text-ink-900" style={{ fontFamily: "'Lora', Georgia, serif" }}>Cart</h2>
              <span className="text-sm text-ink-700">{cart.length} items</span>
            </div>
            <div className="space-y-3">
              {cart.length === 0 ? (
                <p className="text-sm text-ink-700">Add discounted food here before checkout.</p>
              ) : (
                cart.map((item) => (
                  <div key={item.id} className="rounded-2xl border border-sand-200 bg-sand-50 p-4">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 className="font-semibold text-ink-900">{item.foodName}</h3>
                        <p className="text-sm text-ink-700">{item.quantity}</p>
                        <p className="text-sm font-semibold text-citrus-600">RM {(item.price || 0).toFixed(2)}</p>
                      </div>
                      <button type="button" className="btn-outline py-2" onClick={() => handleRemoveFromCart(item.id)}>
                        Remove
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>

            <div className="mt-6 rounded-2xl border border-sand-200 bg-white p-4">
              <div className="mb-3 flex items-center justify-between text-sm text-ink-700">
                <span>Total</span>
                <span className="font-semibold text-ink-900">RM {total.toFixed(2)}</span>
              </div>
              <button type="button" className="btn-primary w-full" disabled={cart.length === 0} onClick={handleCheckout}>
                Proceed to payment
              </button>
            </div>
          </aside>
        </section>
      </div>
    </main>
  );
}

export default IndividualDashboard;
