import React from 'react'
import subimg from '../../images/watches.jpg'
import { Link } from 'react-router-dom'
import './Home.css'

const Subsinglecate = () => {
  return (
    <div className='flex-4-wid'>
    <Link to='/' className='sub-link'>
        <div>
            <img src={subimg} className='subimg'/>
            <h3 className='sub-h3'>
                T-Shirts
            </h3>
        </div>
    </Link>
</div>
  )
}

export default Subsinglecate