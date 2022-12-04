import React from 'react'
import LogoutIcon from "../../assets/images/logout-icon.png"
import './logout-button.css'

const LogoutButton = () => {
  return (
    <a className='kuizu__logout-button' href="#"><img className='kuizu__logout-button-img' src={LogoutIcon} alt="logout-icon.png" /></a>
  )
}

export default LogoutButton