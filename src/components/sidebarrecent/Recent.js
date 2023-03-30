import React from 'react'
import "./recent.css";
import GroupsIcon from '@mui/icons-material/Groups';
import DevicesIcon from '@mui/icons-material/Devices';
function Recent() {
  return (
    <div className="recent_container"> 
    <div className="recent_stats">
    <p className="recent">Recent</p>
    <div className="recent_groups">
<GroupsIcon className="recent_icons"/>
    <p>The sparks Foundation</p>
  </div>
  <div className="recent_groups">
    <DevicesIcon className="recent_icons"/>
    <p>Building a watsup serverless</p>
    </div>
    <p className="recent_extras">Events</p>
    <p className="recent_extras">Followed Hashtags</p>
    </div>
    <div className='discovermore'>
        <p>Discover more</p>
    </div>
    </div>
  )
}

export default Recent