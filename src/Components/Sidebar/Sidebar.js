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
            <Link to="/your-profile" className="dashboard-left__sidebar-btn">
              Your profile
            </Link>
          </div>
          <div className="dashboard-left__sidebar-button">
            <Link to="/" className="dashboard-left__sidebar-btn">
              Dashboard
            </Link>
          </div>
          <div className="dashboard-left__sidebar-button">
            <Link to="/users-list" className="dashboard-left__sidebar-btn">
              Users list
            </Link>
          </div>
          <div className="dashboard-left__sidebar-button">
            <Link to="/item-list" className="dashboard-left__sidebar-btn">
              Items list
            </Link>
          </div>
          <div className="dashboard-left__sidebar-button">
            <Link to="/add-item" className="dashboard-left__sidebar-btn">
              Add item
            </Link>
          </div>
          <div className="dashboard-left__sidebar-button">
            <Link to="/add-admin" className="dashboard-left__sidebar-btn">
              Add admin
            </Link>
          </div>
          <div className="dashboard-left__sidebar-button">
            <Link to="order-list" className="dashboard-left__sidebar-btn">
              Orders Details
            </Link>
          </div>
        </div>
  )
}

export default Sidebar