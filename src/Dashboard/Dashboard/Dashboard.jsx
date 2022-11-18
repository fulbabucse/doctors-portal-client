import React from "react";
import { useContext } from "react";
import { Helmet } from "react-helmet";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <Helmet>
        <title>{user?.displayName} Dashboard - Doctors Portal</title>
      </Helmet>
      <marquee
        className="text-3xl font-semibold text-gray-700 mt-5"
        behavior=""
        direction=""
      >
        Doctors Portal {user?.displayName} Dashboard
      </marquee>
    </div>
  );
};

export default Dashboard;
