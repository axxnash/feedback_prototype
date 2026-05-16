import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { clearStoredNgoClaim, getStoredNgoClaim } from "../utils/ngoClaim";

function NgoClaimSuccess() {
  const navigate = useNavigate();
  const location = useLocation();
  const [claim] = useState(() => location.state?.claim || getStoredNgoClaim());

  useEffect(() => {
    if (!claim) {
      navigate("/ngo", { replace: true });
    }
  }, [claim, navigate]);

  if (!claim) {
    return null;
  }

  return (
    <main className="app-page">
      <div className="container-shell">
        <div className="mx-auto max-w-4xl card">
          <div className="mb-8 space-y-3">
            <span className="page-kicker">Collection Ready</span>
            <h1 className="page-title">Your claimed donation is ready for collection</h1>
            <p className="page-subtitle">
              {claim.foodName} has been reserved for your NGO. Follow the collection steps below when you head to the pickup point.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <section className="space-y-4">
              <div className="panel-soft">
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-sm font-semibold text-ink-900">Claimed item</span>
                  <span className="text-sm font-semibold text-citrus-600">{claim.quantity}</span>
                </div>
                <p className="text-lg font-semibold text-ink-900">{claim.foodName}</p>
                <p className="mt-2 text-sm text-ink-700">{claim.description}</p>
                <p className="mt-2 text-sm text-ink-700">Category: {claim.category}</p>
              </div>

              <div className="card bg-sand-50">
                <h2 className="mb-4 text-xl font-semibold text-ink-900" style={{ fontFamily: "'Lora', Georgia, serif" }}>Pickup procedure</h2>
                <ol className="space-y-3 text-sm text-ink-700">
                  <li>1. Travel to the pickup location during the arranged collection window.</li>
                  <li>2. Tell the vendor you are collecting a FeedBack donation on behalf of your NGO.</li>
                  <li>3. Open your transaction history and show the pickup code to the vendor.</li>
                  <li>4. Wait while the vendor verifies the code and confirms the handover.</li>
                  <li>5. Collect the food, check the items, and complete the transaction after pickup.</li>
                </ol>
              </div>
            </section>

            <aside className="space-y-4">
              <div className="card bg-sand-50">
                <h2 className="mb-4 text-xl font-semibold text-ink-900" style={{ fontFamily: "'Lora', Georgia, serif" }}>Pickup details</h2>
                <div className="space-y-3 text-sm text-ink-700">
                  <div className="rounded-2xl border border-sand-200 bg-white p-4">
                    <div className="font-semibold text-ink-900">Location</div>
                    <div className="mt-1">{claim.pickupLocation}</div>
                  </div>
                  {claim.vendorName && (
                    <div className="rounded-2xl border border-sand-200 bg-white p-4">
                      <div className="font-semibold text-ink-900">Vendor</div>
                      <div className="mt-1">{claim.vendorName}</div>
                    </div>
                  )}
                  <div className="rounded-2xl border border-sand-200 bg-white p-4">
                    <div className="font-semibold text-ink-900">Next step</div>
                    <div className="mt-1">Use transaction history to access your pickup code before collection.</div>
                  </div>
                </div>
              </div>

              <button
                type="button"
                className="btn-primary w-full"
                onClick={() => {
                  clearStoredNgoClaim();
                  navigate("/transactions");
                }}
              >
                View transaction history
              </button>
              <button
                type="button"
                className="btn-outline w-full"
                onClick={() => {
                  clearStoredNgoClaim();
                  navigate("/ngo");
                }}
              >
                Back to dashboard
              </button>
            </aside>
          </div>
        </div>
      </div>
    </main>
  );
}

export default NgoClaimSuccess;
