import React from 'react'
import { Avatar } from '@mui/material';
import "./sidebar.css";
import BookmarkIcon from '@mui/icons-material/Bookmark';
import Recent from "../sidebarrecent/Recent";



function Sidebar() {
 
  return (
    <div className="sidebar_container">
       
        <div className='sidebar_top'>
  <img src="https://img.freepik.com/free-vector/watercolor-stains-abstract-background_23-2149107181.jpg?size=626&ext=jpg&ga=GA1.2.1084578324.1671878366&semt=sph" alt="background"/>
    <Avatar className="sidebar_avatar" src='https://media.licdn.com/dms/image/C5603AQFNdvG7yaThfA/profile-displayphoto-shrink_400_400/0/1618297126920?e=1685577600&v=beta&t=Gc6e1IYK6dkCzkhS60BG1wvCqn2kGb64WIuSutyhre8'/>
    <h2>Jaideep Singh Thakur</h2>
    <h4>Full stack Web Development</h4>
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