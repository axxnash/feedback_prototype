import { Navigate, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";
import RoleRoute from "./components/RoleRoute";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";
import VendorDashboard from "./pages/VendorDashboard";
import NgoDashboard from "./pages/NgoDashboard";
import NgoClaimSuccess from "./pages/NgoClaimSuccess";
import IndividualDashboard from "./pages/IndividualDashboard";
import IndividualCheckout from "./pages/IndividualCheckout";
import AdminDashboard from "./pages/AdminDashboard";
import TransactionHistory from "./pages/TransactionHistory";
import { getStoredAuth } from "./utils/auth";

function App() {
  const [auth, setAuth] = useState(getStoredAuth());

  useEffect(() => {
    setAuth(getStoredAuth());
  }, []);

  return (
    <div className="min-h-screen bg-sand-50">
      <Navbar auth={auth} onLogout={() => setAuth(null)} />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login onLogin={setAuth} />} />
        <Route path="/register" element={<Register />} />

        <Route element={<ProtectedRoute auth={auth} />}>
          <Route path="/transactions" element={<TransactionHistory auth={auth} />} />
        </Route>

        <Route element={<RoleRoute auth={auth} allowedRoles={["VENDOR"]} />}>
          <Route path="/vendor" element={<VendorDashboard auth={auth} view="create" />} />
          <Route path="/vendor/listings" element={<VendorDashboard auth={auth} view="list" />} />
        </Route>

        <Route element={<RoleRoute auth={auth} allowedRoles={["NGO"]} />}>
          <Route path="/ngo" element={<NgoDashboard auth={auth} />} />
          <Route path="/ngo/claim-ready" element={<NgoClaimSuccess />} />
        </Route>

        <Route element={<RoleRoute auth={auth} allowedRoles={["INDIVIDUAL"]} />}>
          <Route path="/individual" element={<IndividualDashboard auth={auth} />} />
          <Route path="/individual/checkout" element={<IndividualCheckout />} />
        </Route>

        <Route element={<RoleRoute auth={auth} allowedRoles={["ADMIN"]} />}>
          <Route path="/admin" element={<AdminDashboard auth={auth} />} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export default App;
