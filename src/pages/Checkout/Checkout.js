import React from 'react'
import './Checkout.css'
import Prdincart from './Prdincart'

const Checkout = () => {
  return (
    <div className='main-checkout'>
        <div className='top-head-check'>
            <div className='top-head-wr'>
                Total 2 items selected
            </div>
            <div className='sel-box-check'>
                <span className='sel-all'>Select All</span>
                <input type='checkbox' className='chk-box-inp'/>
            </div>
            <div className='del-box-chk'>
            <i class="fa-solid fa-trash-can"></i> Delete
            </div>
        </div>
        <div className='flexcontainer'>
            <div className='flex-4'>
                <Prdincart/>          
                <Prdincart/>          
                <Prdincart/>          
                <Prdincart/>          
                <Prdincart/>          
            </div>
            <div className='flex-4i'>
                <div className='ord-sum'>
                    <div className='ord-sum-head'>Order Summary</div>
                    <div className='sep-items'>
                        <div className='ord-name'>Item 1</div>
                        <div className='ord-pri'>Rs. 80/-</div>
                    </div>
                    <div className='sep-items'>
                        <div className='ord-name'>Delivery fee</div>
                        <div className='ord-pri'>Rs. 20/-</div>
                    </div>
                    <div className='sep-items'>
                        <div className='ord-name'>Tax In</div>
                        <div className='ord-pri'>Rs. 0/-</div>
                    </div>
                    <div className='ord-total'>
                        <div className='ord-name'>Total</div>
                        <div className='ord-pri'><b>Rs. 100/-</b></div>
                    </div>
                </div>
                <div className='pay-to-btn'>
                    Pay to Proceed
                </div>
            </div>
        </div>
    </div>
  )
}

export default Checkout