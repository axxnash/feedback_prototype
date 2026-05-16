import { Navigate, Outlet } from "react-router-dom";

function RoleRoute({ auth, allowedRoles }) {
  if (!auth?.token) {
    return <Navigate to="/login" replace />;
  }

  if (!allowedRoles.includes(auth.user.role)) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
}

export default RoleRoute;
