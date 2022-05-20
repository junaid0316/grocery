import React from 'react'
import './Subcate.css'
import Heading from '../Homepage/Heading'
import Subitem from './Subitem'
import Oneprd from '../Homepage/Oneprd'
import { Link } from 'react-router-dom'

const Subcate = () => {
  return (
    <div className='subcate_main'>
        <Heading name='Grocery Categories'/>
        <div className='flexcontainer-wid sub-bg'>
            <Subitem/>
            <Subitem/>
            <Subitem/>
            <Subitem/>
            <Subitem/>
            <Subitem/>
            <Subitem/>
            <Subitem/>
        </div>
        <div className='groc-av'>All grocerries items available results 2,500</div>
        <div className='flexcontainer-wid subcate-rel'> 
        <div className='showmore-link show-ab'>
            <Link to='/' className='link-show'>
                Show More <i class="fa-solid fa-caret-right"></i>
            </Link>
        </div>
            <Oneprd/>
            <Oneprd/>
            <Oneprd/>
            <Oneprd/>
            <Oneprd/>
            <Oneprd/>
        </div>
    </div>
  )
}

export default Subcate