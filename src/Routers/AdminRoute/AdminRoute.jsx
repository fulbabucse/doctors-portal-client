import React from "react";
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import useAdmin from "../../hooks/useAdmin";

const AdminRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [isAdmin, adminLoading] = useAdmin(user?.email);
  const location = useLocation();
  if (loading || adminLoading) {
    return (
      <div className="flex justify-center items-center h-96">
        <div
          className="spinner-grow w-12 h-12 bg-current rounded-full opacity-0 text-purple-500 "
          role="status"
        >
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (user && isAdmin) {
    return children;
  }
  return <Navigate to="/sign-in" state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;
