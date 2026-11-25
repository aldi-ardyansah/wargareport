import { Navigate, Outlet, useLocation } from "react-router";
import { useAuth } from "../context/useAuth";

function ProtectedRoute({ allowedRole }) {
  const { currentUser, justLoggedOut } = useAuth();
  const location = useLocation();

  if (!currentUser) {
    return (
      <Navigate
        to="/"
        state={justLoggedOut ? null : { from: location }}
        replace
      />
    );
  }

  if (currentUser.role !== allowedRole) {
    return (
      <Navigate
        to={currentUser.role === "admin" ? "/admin/escalation-desk" : "/user/topic"}
        replace
      />
    );
  }

  return <Outlet />;
}

export default ProtectedRoute;