import React from 'react'
import './sidebar-button.css'

const SidebarButton = ({text}) => {
  return (
    <a className='kuizu__sidebar-button' href="#">{text}</a>
  )
}

export default SidebarButton