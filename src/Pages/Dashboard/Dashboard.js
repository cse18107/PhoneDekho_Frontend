import React from "react";
import "./Dashboard.css";
import { Outlet} from "react-router-dom";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Header from "../../Components/Header/Header";

const Dashboard = () => {
  return (
    <div className="dashboard-body">
      <div className="dashboard-container">
        <Sidebar/>
        <div className="dashboard-right__content">
          <Header/>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
