import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";

const PrivatesRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  const location = useLocation();
  if (loading) {
    return (
      <>
        <progress
          className="progress progress-warning w-56"
          value="10"
          max="100"
        ></progress>
      </>
    );
  }
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
  }
  return children;
};

export default PrivatesRoutes;
