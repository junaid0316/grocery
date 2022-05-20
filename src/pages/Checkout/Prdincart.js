import React from 'react'
import chkimg from '../../images/dalda.jpg'

const Prdincart = () => {
  return (
    <div className='prd-sel-box'>
    <div className='flexcontainer'>
        <div className='flex-5'>
            <img src={chkimg} className='check-img'/>
        </div>
        <div className='flex-5i'>
            <div className='prd-name'>Dalda Cooking Oil</div>
            <div className='mar-chk'>
                <span className='chk-pri'>Rs. 80/-</span> <del>Rs. 85/-</del>
            </div>
            <div className='dis-chk'>-25%</div>
        </div>    
        <div className='flex-5ii'>
            <div className='count-main'>
                <button className='count-btn'>-</button>
                <input type='text' value={12} className='quantity'/>
                <button className='count-btn'>+</button>
            </div>
        </div>
    </div>
    <input type='checkbox' className='pos-ab-radio'/>    
</div>
  )
}

export default Prdincart