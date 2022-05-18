import React from 'react'
import './Home.css'
import banner_bg from '../../images/banner.jpg'

const Banner = () => {
  return (
    <div>
        <img src={banner_bg} className='banner_bg'/>
    </div>
  )
}

export default Banner