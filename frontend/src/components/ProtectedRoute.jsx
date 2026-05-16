import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoute({ auth }) {
  if (!auth?.token) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}

export default ProtectedRoute;
