import React from 'react'
import { Link } from 'react-router-dom'
import saleimg from '../../images/item_img.jpg'
import './Home.css'

const Saleitem = () => {
  return (
    <div className='flex-2-wid'>
        <Link to='/' className='link-sale'>
            <div className='sale_wr'>
                <img src={saleimg} className='sale_img'/>
                <div className='sale-bg-box'>
                    <div className='item-name'>
                        Wireless Handsfree MW200..
                    </div>
                    <div className='pri-box'><span className='actual-pri'>Rs. 550/-</span> <del>Rs. 750</del></div>
                    <div className='flash-wr'>Flash Sale Available 25% Off</div>
                </div>
                <div className='percent-off'>25%</div>
            </div>
        </Link>
    </div>
  )
}

export default Saleitem