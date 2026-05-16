import { useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { checkoutDiscountedListings } from "../api/listingApi";
import { clearStoredCheckout, getStoredCheckout } from "../utils/checkout";

const PAYMENT_METHODS = [
  { id: "tng", name: "Touch 'n Go eWallet", note: "Instant confirmation for pickup" },
  { id: "debit", name: "Debit Card", note: "Visa and Mastercard accepted" },
  { id: "grabpay", name: "GrabPay", note: "Fast e-wallet checkout" },
  { id: "boost", name: "Boost", note: "Alternative wallet for quick payment" }
];

function uniquePickupLocations(items) {
  return [...new Set(items.map((item) => item.pickupLocation).filter(Boolean))];
}

function IndividualCheckout() {
  const navigate = useNavigate();
  const location = useLocation();
  const [items, setItems] = useState(() => location.state?.items || getStoredCheckout());
  const [selectedMethod, setSelectedMethod] = useState(PAYMENT_METHODS[0].id);
  const [placingOrder, setPlacingOrder] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!orderComplete && !items.length) {
      navigate("/individual", { replace: true });
    }
  }, [items, navigate, orderComplete]);

  const total = useMemo(
    () => items.reduce((sum, item) => sum + (item.price || 0), 0),
    [items]
  );

  const pickupLocations = useMemo(() => uniquePickupLocations(items), [items]);

  const handlePlaceOrder = async () => {
    try {
      setPlacingOrder(true);
      setError("");
      const response = await checkoutDiscountedListings(items.map((item) => item.id));

      await new Promise((resolve) => setTimeout(resolve, 1800));

      setResult(response);
      setOrderComplete(true);
      clearStoredCheckout();
    } catch (requestError) {
      setError(requestError.response?.data?.message || "Unable to place the order.");
    } finally {
      setPlacingOrder(false);
    }
  };

  if (orderComplete) {
    return (
      <main className="app-page">
        <div className="container-shell">
          <div className="mx-auto max-w-4xl card">
            <div className="mb-8 space-y-3">
              <span className="page-kicker">Order Ready</span>
              <h1 className="page-title">Your items are ready to be picked up</h1>
              <p className="page-subtitle">
                {result?.message} Please follow the collection steps below when you arrive.
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
              <section className="space-y-4">
                <div className="panel-soft">
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-sm font-semibold text-ink-900">Total charged</span>
                    <span className="text-lg font-semibold text-citrus-600">RM {Number(result?.total || 0).toFixed(2)}</span>
                  </div>
                  <p className="text-sm text-ink-700">Payment method confirmed: {PAYMENT_METHODS.find((method) => method.id === selectedMethod)?.name}</p>
                </div>

                <div className="card bg-sand-50">
                  <h2 className="mb-4 text-xl font-semibold text-ink-900" style={{ fontFamily: "'Lora', Georgia, serif" }}>Pickup procedure</h2>
                  <ol className="space-y-3 text-sm text-ink-700">
                    <li>1. Head to the pickup location shown in your transaction history.</li>
                    <li>2. Tell the vendor you are collecting a discounted FeedBack order.</li>
                    <li>3. Show the pickup code from your transaction record.</li>
                    <li>4. Wait for the vendor to verify the code and hand over the items.</li>
                    <li>5. Check the items before leaving and mark the collection complete if needed.</li>
                  </ol>
                </div>
              </section>

              <aside className="space-y-4">
                <div className="card bg-sand-50">
                  <h2 className="mb-4 text-xl font-semibold text-ink-900" style={{ fontFamily: "'Lora', Georgia, serif" }}>Pickup locations</h2>
                  <div className="space-y-3 text-sm text-ink-700">
                    {pickupLocations.map((pickupLocation) => (
                      <div key={pickupLocation} className="rounded-2xl border border-sand-200 bg-white p-4">
                        {pickupLocation}
                      </div>
                    ))}
                  </div>
                </div>

                <button type="button" className="btn-primary w-full" onClick={() => navigate("/transactions")}>
                  View transactions
                </button>
                <button type="button" className="btn-outline w-full" onClick={() => navigate("/individual")}>
                  Back to marketplace
                </button>
              </aside>
            </div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="app-page">
      <div className="container-shell">
        <div className="mx-auto max-w-5xl">
          <div className="page-header">
            <div className="space-y-3">
              <span className="page-kicker">Checkout</span>
              <div>
                <h1 className="page-title">Review your order</h1>
                <p className="page-subtitle">
                  Confirm your discounted items, review pickup details, and choose a payment method before placing the order.
                </p>
              </div>
            </div>
          </div>

          {error && <p className="mb-4 feedback-error">{error}</p>}

          <section className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-6">
              <div className="card">
                <h2 className="mb-4 text-xl font-semibold text-ink-900" style={{ fontFamily: "'Lora', Georgia, serif" }}>Items</h2>
                <div className="space-y-4">
                  {items.map((item) => (
                    <div key={item.id} className="rounded-2xl border border-sand-200 bg-sand-50 p-4">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h3 className="font-semibold text-ink-900">{item.foodName}</h3>
                          <p className="text-sm text-ink-700">{item.quantity}</p>
                          <p className="text-sm text-ink-700">{item.pickupLocation}</p>
                        </div>
                        <div className="text-right text-sm">
                          <p className="text-ink-700">Original: RM {Number(item.originalPrice || item.price || 0).toFixed(2)}</p>
                          <p className="text-ink-700">Discount: {Number(item.discountPercentage || 0).toFixed(0)}%</p>
                          <p className="font-semibold text-citrus-600">Now: RM {Number(item.price || 0).toFixed(2)}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="card">
                <h2 className="mb-4 text-xl font-semibold text-ink-900" style={{ fontFamily: "'Lora', Georgia, serif" }}>Pickup details</h2>
                <div className="space-y-3 text-sm text-ink-700">
                  {pickupLocations.map((pickupLocation) => (
                    <div key={pickupLocation} className="rounded-2xl border border-sand-200 bg-sand-50 p-4">
                      {pickupLocation}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <aside className="space-y-6">
              <div className="card">
                <h2 className="mb-4 text-xl font-semibold text-ink-900" style={{ fontFamily: "'Lora', Georgia, serif" }}>Payment method</h2>
                <div className="space-y-3">
                  {PAYMENT_METHODS.map((method) => (
                    <button
                      key={method.id}
                      type="button"
                      className={`w-full rounded-2xl border p-4 text-left transition ${selectedMethod === method.id ? "border-citrus-500 bg-citrus-50" : "border-sand-200 bg-white hover:bg-sand-50"}`}
                      onClick={() => setSelectedMethod(method.id)}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <div className="font-semibold text-ink-900">{method.name}</div>
                          <div className="mt-1 text-sm text-ink-700">{method.note}</div>
                        </div>
                        <div className={`mt-1 h-4 w-4 rounded-full border ${selectedMethod === method.id ? "border-citrus-500 bg-citrus-500" : "border-sand-200 bg-white"}`} />
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="card">
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-sm text-ink-700">Total</span>
                  <span className="text-xl font-semibold text-ink-900">RM {total.toFixed(2)}</span>
                </div>

                {placingOrder ? (
                  <div className="rounded-2xl border border-sand-200 bg-sand-50 p-6 text-center">
                    <div className="mx-auto mb-4 h-10 w-10 animate-spin rounded-full border-4 border-sand-200 border-t-citrus-500" />
                    <p className="font-semibold text-ink-900">Placing your order...</p>
                    <p className="mt-2 text-sm text-ink-700">Preparing payment confirmation and pickup instructions.</p>
                  </div>
                ) : (
                  <>
                    <button type="button" className="btn-primary w-full" onClick={handlePlaceOrder}>
                      Place order
                    </button>
                    <button type="button" className="btn-outline mt-3 w-full" onClick={() => navigate("/individual")}>
                      Back to cart
                    </button>
                  </>
                )}
              </div>
            </aside>
          </section>
        </div>
      </div>
    </main>
  );
}

export default IndividualCheckout;
