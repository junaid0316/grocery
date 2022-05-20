import React from 'react'
import './Subcate.css'
import subimg from '../../images/pulse.jpg'

const Subitem = () => {
  return (
            <div className='flex-7-wid'>
                <img src={subimg} className='sub_img'/>
                <div className='cate-wr-sub'>
                    Wheat Flour
                </div>
            </div>
  )
}

export default Subitem