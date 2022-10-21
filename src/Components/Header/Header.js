import React from 'react';
import './Header.css'
import { Link, useLocation } from 'react-router-dom';
import map from '../../utils/HeadersMap';
import bell from '../../assets/icons/bell-ring.png';
import profile from '../../assets/icons/user.png';

const Header = () => {

    const location = useLocation();

    console.log(location);

  return (
    <div className="dashboard-right__header">
        <div className='header-content'>
            <div className='page-content'>{map.get(location.pathname)}</div>
            <div className='header-buttons'>
                <div className='header-notification-button'>
                    <div className='notification-content'>
                    <img src={bell} alt={"notification"}/>
                    <div className='indicator'></div>
                    </div>
                </div>
                <div className='header-profile-button'>
                   <Link to='/your-profile'><img style={{"width":"50px","height":"50px"}} src={profile} alt="user"/></Link> 
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header