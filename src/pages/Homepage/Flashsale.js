import React from 'react'
import Flashhead from './Flashhead';
import './Home.css'
import Saleitem from './Saleitem'
import { Link } from 'react-router-dom';

const Flashsale = () => {
    const time = new Date();
    time.setSeconds(time.getSeconds() + 700);
  return (
    <div>
        <Flashhead expiryTimestamp={time}/>
        <div className='flexcontainer-wid sale-items subcate-rel'>
        <div className='showmore-link show-ab'>
            <Link to='/' className='link-show'>
                Show More <i class="fa-solid fa-caret-right"></i>
            </Link>
        </div>
            <Saleitem/>
            <Saleitem/>
            <Saleitem/>
            <Saleitem/>
            <Saleitem/>
        </div>
    </div>
  )
}

export default Flashsale