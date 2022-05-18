import React from 'react'
import { Link } from 'react-router-dom'
import prdimg from '../../images/watches.jpg'

const Oneprd = () => {
  return (
    <div className='flex-5-wid'>
        <Link to='/' className='prd-link'>
            <div className='prd-one-main'>
                <img src={prdimg} className='prd-img'/>
                <div className='prd-wr-box'>
                <div className='prd-name'>Onions</div>
                <div className='pri-box'>
                    <span className='pri-prd'>Rs. 700/-</span> <del>Rs. 800/-</del>
                </div>
                </div>
            </div>
        </Link>
    </div>
  )
}

export default Oneprd