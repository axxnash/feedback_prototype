import { useState } from "react";
import { registerUser } from "../api/authApi";

function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "VENDOR",
    organizationName: "",
    phoneNumber: "",
    document: null
  });
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const needsApproval = form.role === "VENDOR" || form.role === "NGO";
  const showOrganizationFields = form.role === "VENDOR" || form.role === "NGO";

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
      const payload = new FormData();
      Object.entries(form).forEach(([key, value]) => {
        if (value) {
          payload.append(key, value);
        }
      });

      const response = await registerUser(payload);
      setMessage(response.message);
      setForm({
        name: "",
        email: "",
        password: "",
        role: "VENDOR",
        organizationName: "",
        phoneNumber: "",
        document: null
      });
    } catch (requestError) {
      setError(
        requestError.response?.data?.message ||
          requestError.response?.data?.error ||
          "Registration failed."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="app-page">
      <div className="container-shell">
        <div className="mx-auto max-w-3xl card">
          <div className="mb-8 space-y-3">
            <span className="page-kicker">Join FeedBack</span>
            <h1 className="page-title">Create your account</h1>
            <p className="page-subtitle">
              Vendors and NGOs require admin approval. Individual accounts can start browsing discounted food right away.
            </p>
          </div>

          <form className="grid gap-4 md:grid-cols-2" onSubmit={handleSubmit}>
            <input className="input" name="name" placeholder="Full name" value={form.name} onChange={handleChange} />
            <input className="input" name="email" placeholder="Email" value={form.email} onChange={handleChange} />
            <input
              className="input"
              name="password"
              type="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
            />
            <select className="select" name="role" value={form.role} onChange={handleChange}>
              <option value="VENDOR">Vendor</option>
              <option value="NGO">NGO</option>
              <option value="INDIVIDUAL">Individual</option>
              <option value="ADMIN">Admin</option>
            </select>
            {showOrganizationFields && (
              <input
                className="input"
                name="organizationName"
                placeholder="Organization name"
                value={form.organizationName}
                onChange={handleChange}
              />
            )}
            <input
              className="input"
              name="phoneNumber"
              placeholder="Phone number"
              value={form.phoneNumber}
              onChange={handleChange}
            />
            {needsApproval && (
              <div className="md:col-span-2">
                <label className="mb-2 block text-sm font-semibold text-ink-700">Verification document</label>
                <input className="input" name="document" type="file" accept="image/*,.pdf" onChange={handleChange} />
              </div>
            )}
            {message && <p className="feedback-success md:col-span-2">{message}</p>}
            {error && <p className="feedback-error md:col-span-2">{error}</p>}
            <div className="md:col-span-2">
              <button type="submit" className="btn-primary w-full" disabled={loading}>
                {loading ? "Submitting..." : "Create account"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}

export default Register;
