import React from 'react';
import './UserListPage.css';
import Wrapper from '../../../Components/Wrapper/Wrapper'
import { users } from '../../../Demofiles/Demo';
import search from '../../../assets/icons/search.png'
import ImageTooltip from '../../../Components/Service/Tooltip/ImageTooltip/ImageTooltip';

const clientIndicator = 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(255,242,122,1) 0%, rgba(228,122,73,1) 100%)';
const adminIndicator = 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(0,255,16,1) 0%, rgba(28,122,17,1) 100%)';


const UserListPage = () => {
  return (
    <Wrapper>
      <div className='user-list-body'>
        <div className='user-list-container'>
          {/* <div className='user-list-header'>Users list</div> */}
          <div className='user-list-query-section'>
            <div className='search-by'><img src={search} alt='search by name'/><input className='name-input' placeholder='Search by name' /></div>
            <div className='search-by'><img src={search} alt='search by email'/><input className='name-input' placeholder='Search by email' /></div>
            <div className='select-by'>
              <select name="role">
                <option>Search by role</option>
                <option>Client</option>
                <option>Admin</option>
              </select>
            </div>
          </div>
          <div className='user-list'>
            {users.map(user=>{
              return <div className='user-item'>
                <div className='user-pic'><ImageTooltip src={user.image} alt={user.username} name={user.username}><img src={user.image} className="users-image" alt={user.username}/></ImageTooltip></div>
                <div className='user-name'>{user.username}</div>
                <div className='user-role' style={{"background":`${user.role==='client'?clientIndicator:adminIndicator}`}}>{user.role}</div>
                <div className='user-email'>{user.email}</div>
                <select name="role">
                  <option value={"client"}>client</option>
                  <option value={"admin"}>admin</option>
                </select>
                <button className='user-list-update'>update</button>
                <button className='user-list-delete'>delete</button>
                </div>
            })}
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

export default UserListPage
