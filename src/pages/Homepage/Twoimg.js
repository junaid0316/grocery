import React from 'react'
import './Home.css'
import adimg from '../../images/watches.jpg'

const Twoimg = () => {
  return (
    <div className='flexcontainer-wid'>
        <div className='flex-3-wid'>
            <img src={adimg} className='ad_img'/>
        </div>
        <div className='flex-3-wid'>
            <img src={adimg} className='ad_img'/>
        </div>
    </div>
  )
}

export default Twoimg