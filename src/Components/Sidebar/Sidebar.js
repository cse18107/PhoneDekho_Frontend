import React from 'react';
import Logo from "../../assets/images/logo.png";
import {  Link } from "react-router-dom";
import yourprofile from '../../assets/icons/yourprofile.png';
import chart from '../../assets/icons/dashboard.png';
import itemlist from '../../assets/icons/itemlist.png';
import userlist from '../../assets/icons/userslist.png';
import additem from '../../assets/icons/additem.png';
import adduser from '../../assets/icons/adduser.png';
import orderlist from '../../assets/icons/orderlist.png';

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
              <img src={yourprofile} alt="your profile" />Your profile
            </Link>
          </div>
          <div className="dashboard-left__sidebar-button">
            <Link to="/dashboard" className="dashboard-left__sidebar-btn">
            <img src={chart} alt="your profile" />Dashboard
            </Link>
          </div>
          <div className="dashboard-left__sidebar-button">
            <Link to="/dashboard/users-list" className="dashboard-left__sidebar-btn">
            <img src={userlist} alt="your profile" />Users list
            </Link>
          </div>
          <div className="dashboard-left__sidebar-button">
            <Link to="/dashboard/item-list" className="dashboard-left__sidebar-btn">
            <img src={itemlist} alt="your profile" />Items list
            </Link>
          </div>
          <div className="dashboard-left__sidebar-button">
            <Link to="/dashboard/add-item" className="dashboard-left__sidebar-btn">
            <img src={additem} alt="your profile" />Add item
            </Link>
          </div>
          <div className="dashboard-left__sidebar-button">
            <Link to="/dashboard/add-user" className="dashboard-left__sidebar-btn">
            <img src={adduser} alt="your profile" />Add user
            </Link>
          </div>
          <div className="dashboard-left__sidebar-button">
            <Link to="/dashboard/order-list" className="dashboard-left__sidebar-btn">
            <img src={orderlist} alt="your profile" />Orders Details
            </Link>
          </div>
        </div>
  )
}

export default Sidebar