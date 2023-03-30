import React from 'react'
import "./headeroption.css"
import { Avatar } from '@mui/material';
function HeaderOptions({avatar,Icon,title}) {
  return (
   <div className='headerOption'>
   {Icon && <Icon className="headerOption_icon"/>}
   {avatar && <Avatar className="headerOption_icon" src="https://media.licdn.com/dms/image/C5603AQFNdvG7yaThfA/profile-displayphoto-shrink_400_400/0/1618297126920?e=1685577600&v=beta&t=Gc6e1IYK6dkCzkhS60BG1wvCqn2kGb64WIuSutyhre8" />}
<h3 className='headerOption_title'>{title}</h3>
   </div>
  )
}

export default HeaderOptions
