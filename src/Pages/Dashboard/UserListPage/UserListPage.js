import React, { useEffect, useState } from 'react';
import './UserListPage.css';
import Wrapper from '../../../Components/Wrapper/Wrapper'
import { users } from '../../../Demofiles/Demo';
import search from '../../../assets/icons/search.png'
import ImageTooltip from '../../../Components/Service/Tooltip/ImageTooltip/ImageTooltip';
import SearchItem from '../../../Components/Service/SearchItem/SearchItem';
import SelectItem from '../../../Components/Service/SelectItem/SelectItem';
import { randomFace } from '../../../utils/randomFace';
import User from './User';




const UserListPage = () => {
 
  const options = ["Search by role","Client","Admin"];
  


  return (
    <Wrapper>
      <div className='user-list-body'>
        <div className='user-list-container'>
          {/* <div className='user-list-header'>Users list</div> */}
          <div className='user-list-query-section'>
            <SearchItem placeholder={"Search by name"}/>
            <SearchItem placeholder={"Search by email"}/>
            <SelectItem options={options} width={"150px"}/>
          </div>
          <div className='user-list'>
            {users.map(user=>{
              return <User user={user}/>
            })}
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

export default UserListPage
