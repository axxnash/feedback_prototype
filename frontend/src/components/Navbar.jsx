import { Link, NavLink, useNavigate } from "react-router-dom";
import { clearStoredAuth } from "../utils/auth";

function Navbar({ auth, onLogout }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    clearStoredAuth();
    onLogout();
    navigate("/login");
  };

  const dashboardPath =
    auth?.user?.role === "VENDOR"
      ? "/vendor"
      : auth?.user?.role === "NGO"
        ? "/ngo"
        : auth?.user?.role === "INDIVIDUAL"
          ? "/individual"
        : auth?.user?.role === "ADMIN"
          ? "/admin"
          : "/";

  return (
    <header className="border-b border-sand-200 bg-sand-100/90 backdrop-blur">
      <div className="container-shell flex flex-col gap-4 py-4 sm:flex-row sm:items-center sm:justify-between">
        <Link to="/" className="text-2xl font-bold leading-none text-ink-900">
          <span style={{ fontFamily: "'Lora', Georgia, serif" }}>Feed </span>
          <span className="text-citrus-500" style={{ fontFamily: "'Lora', Georgia, serif" }}>Back</span>
        </Link>

        <nav className="flex flex-wrap items-center gap-3 text-sm font-medium">
          <NavLink to="/" className="rounded-full px-3 py-2 text-ink-700 transition hover:bg-white hover:text-leaf-600">
            Home
          </NavLink>
          {auth ? (
            <>
              <NavLink to={dashboardPath} className="rounded-full px-3 py-2 text-ink-700 transition hover:bg-white hover:text-leaf-600">
                Dashboard
              </NavLink>
              <NavLink to="/transactions" className="rounded-full px-3 py-2 text-ink-700 transition hover:bg-white hover:text-leaf-600">
                Transactions
              </NavLink>
              <button type="button" className="btn-outline py-2" onClick={handleLogout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <NavLink to="/login" className="rounded-full px-3 py-2 text-ink-700 transition hover:bg-white hover:text-leaf-600">
                Login
              </NavLink>
              <NavLink to="/register" className="btn-primary py-2">
                Register
              </NavLink>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
