import React from 'react'
import '../../pages/Profile/Profile.css'

export const CardsPets = ({text,arr}) => {
  return (
    <div>
        <div className='header'>
          <h1 className='title'>{text}</h1>
        </div>
        <div className='table'>
          {
            arr.map((item ) =>(
              <div>
                {/* <h4>{item}</h4> */}
              </div>
            ))
          }
        </div>
    </div>
  )
}
