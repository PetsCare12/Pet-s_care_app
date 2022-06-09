import React from 'react'
import { Link } from 'react-router-dom'
import './Profile.css'

export const Profile_nav = () => {
  return (
    <div className='profile_nav'>
      <nav className='navi_menu_profile'>
        <li><Link className='a' to={""}>Mascotas</Link></li>
        <li><Link className='a' to={""}>Mascotas</Link></li>
        <li><Link className='a' to={""}>Mascotas</Link></li>
        <li><Link className='a' to={""}>Mascotas</Link></li>
        <li><Link className='a' to={""}>Mascotas</Link></li>
        <li><Link className='a' to={""}>Mascotas</Link></li>
        <li><Link className='a' to={""}>Mascotas</Link></li>
        <li><Link className='a' to={""}>Mascotas</Link></li>
      </nav>
    </div>
  )
}
