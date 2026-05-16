import { Link } from "react-router-dom";

function Landing() {
  return (
    <main className="app-page">
      <section className="container-shell grid gap-8 lg:grid-cols-[1.3fr_0.9fr] lg:items-center">
        <div className="space-y-6">
          <span className="page-kicker">
            Food rescue and redistribution platform
          </span>
          <h1
            className="max-w-3xl text-4xl font-bold text-ink-900 sm:text-5xl"
            style={{ fontFamily: "'Lora', Georgia, serif", lineHeight: 1.1 }}
          >
            FeedBack helps surplus food reach NGOs and individuals before it becomes waste.
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-ink-700">
            Vendors can share free donations with NGOs or offer discounted food to individuals,
            while admins keep onboarding safe through approval and verification.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/register" className="btn-primary">
              Create account
            </Link>
            <Link to="/login" className="btn-secondary">
              Login
            </Link>
          </div>
        </div>

        <div className="card space-y-4 bg-sand-100">
          <h2 className="text-xl font-semibold text-ink-900" style={{ fontFamily: "'Lora', Georgia, serif" }}>
            Platform workflow
          </h2>
          <div className="grid gap-3 text-sm text-ink-700">
            <div className="rounded-2xl border border-sand-200 bg-white p-4">1. Vendors and NGOs register for approval, while individuals can create an account and browse discounted food.</div>
            <div className="rounded-2xl border border-sand-200 bg-white p-4">2. Vendors create listings as either NGO donations or discounted food for individuals.</div>
            <div className="rounded-2xl border border-sand-200 bg-white p-4">3. NGOs discover donation listings and claim food that matches their needs.</div>
            <div className="rounded-2xl border border-sand-200 bg-white p-4">4. Individuals add discounted food to cart, review checkout, and place an order.</div>
            <div className="rounded-2xl border border-sand-200 bg-white p-4">5. Vendors verify pickup codes and complete the handover for every collection.</div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Landing;
