import React from 'react'
import { Profile_nav } from "../Profile/Profile_nav";
import { Profile_photo } from "./Profile_photo";
import './Profile.css'

export const Profile = () => {
  return (
    <div className='profile'>
        <div className='section_profile_left'>
            <Profile_photo />
            <Profile_nav />
        </div>
        <div className='section_profile_right'>
          <h1>Mis Mascotas</h1>
        </div>
    </div>
  )
}
