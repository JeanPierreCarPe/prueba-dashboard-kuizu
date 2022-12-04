import React from 'react'
import './user-sidebar.css'
import userImage from "../../assets/images/profile-image.jpg"

const UserSidebar = ({nombre}) => {
  return (
    <div id='kuizu__user-sidebar'>
        <div className='kuizu__user-sidebar-image-container'><img className='kuizu__user-sidebar-image-container-img' src={userImage} alt="" /></div>
        <h1 className='kuizu__user-sidebar-name'>{nombre}</h1>
    </div>
  )
}

export default UserSidebar