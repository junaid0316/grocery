import React from 'react'
import { useTimer } from 'react-timer-hook';
import {Link} from 'react-router-dom'
import './Home.css'

const Flashhead = ({expiryTimestamp}) => {
    
    const {
        seconds,
        minutes,
        hours,
      } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });
    
  return (
    <div className='main-flashhead'>
        <div className='flash-head-box'>
            Flash <span className='light-ico'><i class="fa-solid fa-bolt"></i></span> Sale
            <span className='green-time'>{hours}</span>
            <span className='yellow-time'>{minutes}</span>
            <span className='green-time'>{seconds}</span>
        </div>
        <div className='showmore-link'>
            <Link to='/' className='link-show'>
                Show More <i class="fa-solid fa-caret-right"></i>
            </Link>
        </div>
    </div>
  )
}

export default Flashhead