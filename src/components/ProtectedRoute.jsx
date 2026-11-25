import { Navigate, Outlet } from "react-router";
import { useAuth } from "../context/useAuth";

function ProtectedRoute({ allowedRole }) {
  const { currentUser } = useAuth();

  if (!currentUser) {
    return <Navigate to="/" replace />;
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