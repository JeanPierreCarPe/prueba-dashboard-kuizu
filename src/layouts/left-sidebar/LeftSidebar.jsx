import React from 'react'
import logo from '../../assets/images/kuizu-logo.png'
import LogoutButton from '../../components/logout-button/LogoutButton'
import SidebarButton from '../../components/sidebar-button/SidebarButton'
import UserSidebar from '../../components/user-sidebar/UserSidebar'
import './left-sidebar.css'

const LeftSideBar = () => {
  return (
    <div id='kuizu__left-sidebar'>
      <img className='kuizu__left-sidebar-logo' src={logo} alt="kuizu-logo.png" />
      <UserSidebar nombre='Valentina Rossmery Cherry Lovecraft' />
      <div className='kuizu__left-sidebar-buttons'>
        <SidebarButton text='Perfil' />
        <SidebarButton text='Cursos' />
        <SidebarButton text='Notas' />
      </div>
      <LogoutButton />
    </div>
  )
}

export default LeftSideBar