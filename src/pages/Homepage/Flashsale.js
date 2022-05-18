import React from 'react'
import Flashhead from './Flashhead';
import './Home.css'
import Saleitem from './Saleitem'

const Flashsale = () => {
    const time = new Date();
    time.setSeconds(time.getSeconds() + 700);
  return (
    <div>
        <Flashhead expiryTimestamp={time}/>
        <div className='flexcontainer-wid sale-items'>
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