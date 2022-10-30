import React from 'react';
import Logo from "../../assets/images/logo.png";
import {  Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="dashboard-left__sidebar">
          <div className="dashboard-logo">
            <div>
              <img className="dashboard-logo" src={Logo} alt="phonedekho.com" />
            </div>
          </div>
          <div className="dashboard-left__sidebar-button">
            <Link to="/dashboard/your-profile" className="dashboard-left__sidebar-btn">
              Your profile
            </Link>
          </div>
          <div className="dashboard-left__sidebar-button">
            <Link to="/dashboard" className="dashboard-left__sidebar-btn">
              Dashboard
            </Link>
          </div>
          <div className="dashboard-left__sidebar-button">
            <Link to="/dashboard/users-list" className="dashboard-left__sidebar-btn">
              Users list
            </Link>
          </div>
          <div className="dashboard-left__sidebar-button">
            <Link to="/dashboard/item-list" className="dashboard-left__sidebar-btn">
              Items list
            </Link>
          </div>
          <div className="dashboard-left__sidebar-button">
            <Link to="/dashboard/add-item" className="dashboard-left__sidebar-btn">
              Add item
            </Link>
          </div>
          <div className="dashboard-left__sidebar-button">
            <Link to="/dashboard/add-user" className="dashboard-left__sidebar-btn">
              Add user
            </Link>
          </div>
          <div className="dashboard-left__sidebar-button">
            <Link to="/dashboard/order-list" className="dashboard-left__sidebar-btn">
              Orders Details
            </Link>
          </div>
        </div>
  )
}

export default Sidebar