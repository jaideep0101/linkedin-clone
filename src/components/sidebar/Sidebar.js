import React from 'react'
import { Avatar } from '@mui/material';
import "./sidebar.css";
import BookmarkIcon from '@mui/icons-material/Bookmark';
import Recent from "../sidebarrecent/Recent";


function Sidebar({userName,email,photo}) {
 
  return (
    <div className="sidebar_container">
       
        <div className='sidebar_top'>
  <img src="https://img.freepik.com/free-vector/watercolor-stains-abstract-background_23-2149107181.jpg?size=626&ext=jpg&ga=GA1.2.1084578324.1671878366&semt=sph" alt="background"/>
    <Avatar className="sidebar_avatar" src={photo}/>
    <h2>{userName}</h2>
    <h4>{email}</h4>
    </div>
        <div className='sidebar_stats'>
            <div className='sidebar_stat'>
               <p>Who's viewed your profile</p>
               <p className='sidebar_statNumber'>22</p> 
            </div>
            <div className='sidebar_stat'>
               <p>Impressions of your post</p>
               <p className='sidebar_statNumber'>60</p> 
            </div>
        </div>
        <div className="sidebar_extras">
        <BookmarkIcon className='sidebar_extra_icon'/>
              <span>My items</span>   
            </div>
        <div className='sidebar_bottom'>
        <Recent/>
        </div>
    </div>

  )
}

export default Sidebar;