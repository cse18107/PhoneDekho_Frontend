import React,{useState, useEffect} from 'react';
import { randomFace } from '../../../utils/randomFace';
import ImageTooltip from '../../../Components/Service/Tooltip/ImageTooltip/ImageTooltip'

const clientIndicator = 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(255,242,122,1) 0%, rgba(228,122,73,1) 100%)';
const adminIndicator = 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(0,255,16,1) 0%, rgba(28,122,17,1) 100%)';

const User = ({user}) => {
    const [image,setImage] = useState('');
    useEffect(()=>{
        randomFace().then((data)=>{
          console.log(data);
          setImage(data);
        });
      },[]);

  return (
    <div className='user-item'>
                <div className='user-pic'><ImageTooltip src={image} alt={user.username} name={user.username}><img src={image} className="users-image" alt={user.username}/></ImageTooltip></div>
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
  )
}

export default User