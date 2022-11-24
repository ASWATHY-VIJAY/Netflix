import React from 'react'
import './Banner.css'
function Banner() {
  return (
    <div className='banner'>
      <div className='content '>
        <h1 className='title'>Movie Name</h1>
        <div className='banner-buttons' >
        <button className='button'>Play</button>
            <button className='button'>My list</button>
        </div>
        <h1 className='description'> Iam trying to fetch profile for current login user in SharePoint 2019. </h1>
      <div className="fade_bottom"></div>
      </div>
    </div>
  )
}

export default Banner
