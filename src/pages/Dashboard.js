import React from "react";
import MasterLayout from "../layouts/MasterLayout";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Dashboard = () => {
  return (
      <MasterLayout>
        <div>Dashboard</div>
        <FontAwesomeIcon icon={faBell} />
      </MasterLayout>
  );
};

export default Dashboard;
