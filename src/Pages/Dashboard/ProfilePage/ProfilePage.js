import React from "react";
import Wrapper from "../../../Components/Wrapper/Wrapper";
import "./ProfilePage.css";
import profile from "../../../assets/images/download.jpg";
import { items, users } from "../../../Demofiles/Demo";
import search from '../../../assets/icons/search.png';
import { Link } from "react-router-dom";
import person1 from '../../../assets/images/person1.jpg'

const clientIndicator = 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(255,242,122,1) 0%, rgba(228,122,73,1) 100%)';
const adminIndicator = 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(0,255,16,1) 0%, rgba(28,122,17,1) 100%)';

const ProfilePage = () => {
  return (
    <Wrapper>
      <div className="profile_page_container">
        <div className="profile_page_content">
          <div className="profile_page_content_left">
            <div className="profile_details">
              <div className="profile_details_content">
                <div className="profile-picture">
                  <img
                    className="profile-image"
                    src={profile}
                    alt={"Your pic"}
                  />
                </div>
                <div className="profile-des">
                  <div className="profile-des-content">
                    <div className="profile-headings">
                      <div className="heading">My Profile</div>
                      <div className="description">
                        Hello I am Soumodeep working as a full stack Engineer
                      </div>
                    </div>
                    <div className="profile-name-number">
                      <div className="name">Soumodeep Maity</div>
                      <div className="number">8420900289</div>
                    </div>
                    <div className="profile-email">soumodeep988@gmail.com</div>
                    <div className="profile-address">Dakshineswer</div>
                    <button className="profile-edit-button">Edit</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="profile_page_content_right">
            <div className="profile_add_list">
              <div className="profile_add_list_content">
                <div className="profile_add_list_btns">
                  <div className="profile_add_list_search">
                    <div className="search_img"><img src={search} alt="search item"/></div>
                    <input className="search_input" placeholder="Search"/>
                  </div>
                  <Link to='/dashboard/add-item' className="profile_add_list_add-btn">Add</Link>
                </div>
                <div className="profile_add_list_list scroll-style">
                  {items.map((item)=>{
                    return (
                      <div className="add-list_item">
                        <div className="add-list_item_name">{item.name}</div>
                        <div className="add-list_item_buttons">
                          <button className="add-list_edit">Edit</button>
                          <button className="add-list_delete">Delete</button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="profile_added_users">
            <div className="profile_add_list_content">
                <div className="profile_add_list_btns">
                  <div className="profile_add_list_search">
                    <div className="search_img"><img src={search} alt="search item"/></div>
                    <input className="search_input" placeholder="Search"/>
                  </div>
                  <Link to='/dashboard/add-user' className="profile_add_list_add-btn">Add</Link>
                </div>
                <div className="profile_add_list_list scroll-style">
                  {users.map((user)=>{
                    return (
                      <div className="add-list_item user">
                        <div className="add-list_item_name"><img src={user.image} alt={user.username}/>{user.username} <div className="role-indicator" style={{'background':`${user.role==='client'?clientIndicator:adminIndicator}`}}>{user.role}</div></div>
                        <div className="add-list_item_buttons">
                          <button className="add-list_edit">Edit</button>
                          <button className="add-list_delete">Delete</button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default ProfilePage;
