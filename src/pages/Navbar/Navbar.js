import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Navbar.css'
import logo from '../../images/logo.png'
import categoryimg from '../../images/cate_img.png'
import Marquee from "react-fast-marquee";
import logindp from '../../images/dp.jpg'

const Navbar = () => {

    const [showdrop,setshowdrop]=useState(false);

  return (
    <div className='main-nav'>
        <div className='flexcontainer first-nav-box'>
            <div className='flex-1'>
                <img src={logo} className='logo'/>
            </div>
            <div className='flex-1i'>
                <div className='search-box'>
                    <input type='text' className='search-inp' placeholder='Search in martlab'/>
                    <div className='search-btn'>Search <i class="fa-solid fa-magnifying-glass"></i></div>
                </div>
            </div>
            <div className='flex-1ii'>
                <div className='head-user'>
                    <div className='user-img-box'>
                        <div className='img-box'>
                        <img src={logindp} className='dplog'/> 
                        </div>
                        <div className='user-wr'>User</div>
                    </div>
                    <div className='cart-img-box'>
                    <i class="fa-solid fa-cart-arrow-down"></i> Cart
                    </div>
                </div>
            </div>
        </div>
        <div className='flexcontainer sec-nav-box'>
            <div className='flex-2'>
                <div className='cate-btn-box' onMouseOver={()=>{setshowdrop(true)}} onMouseOut={()=>{setshowdrop(false)}}>
                <div className='cate-btn-head' >
                <i class="fa-solid fa-grip-lines"></i> <span className='cate-he'>Categories</span> <i class="fa-solid fa-caret-down"></i>
                </div>
                {showdrop?<div className='drop-down-main-box'>
                    <div className='single-cate-drop'>
                        <Link to='/' className='drop-link'>
                            <div className="drop-box-link">
                                <div className='allcat-img'>
                                    <img src={categoryimg} className='cat-img'/>
                                </div>
                                <div className='drop-prd-wr'>
                                    Vegetables
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className='single-cate-drop'>
                        <Link to='/' className='drop-link'>
                            <div className="drop-box-link">
                                <div className='allcat-img'>
                                    <img src={categoryimg} className='cat-img'/>
                                </div>
                                <div className='drop-prd-wr'>
                                    Vegetables
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className='single-cate-drop'>
                        <Link to='/' className='drop-link'>
                            <div className="drop-box-link">
                                <div className='allcat-img'>
                                    <img src={categoryimg} className='cat-img'/>
                                </div>
                                <div className='drop-prd-wr'>
                                    Vegetables
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className='single-cate-drop'>
                        <Link to='/' className='drop-link'>
                            <div className="drop-box-link">
                                <div className='allcat-img'>
                                    <img src={categoryimg} className='cat-img'/>
                                </div>
                                <div className='drop-prd-wr'>
                                    Vegetables
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className='single-cate-drop'>
                        <Link to='/' className='drop-link'>
                            <div className="drop-box-link">
                                <div className='allcat-img'>
                                    <img src={categoryimg} className='cat-img'/>
                                </div>
                                <div className='drop-prd-wr'>
                                    Vegetables
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className='single-cate-drop'>
                        <Link to='/' className='drop-link'>
                            <div className="drop-box-link">
                                <div className='allcat-img'>
                                    <img src={categoryimg} className='cat-img'/>
                                </div>
                                <div className='drop-prd-wr'>
                                    Vegetables
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>:''}
                </div>
            </div>
            <div className='flex-2i'>
                <div className='flexcontainer'>
                    <div className='flex-6-wid'>
                        <NavLink to='/' className='nav-link'>NEW PRODUCTS</NavLink>
                    </div>
                    <div className='flex-6-wid'>
                    <NavLink to='/' className='nav-link'>NEW PRODUCTS</NavLink>
                    </div>
                    <div className='flex-6-wid'>
                    <NavLink to='/' className='nav-link'>NEW PRODUCTS</NavLink>
                    </div>
                    <div className='flex-6-wid'>
                    <NavLink to='/' className='nav-link'>NEW PRODUCTS</NavLink>
                    </div>
                </div>
            </div>
            <div className='flex-2ii'>
                <div className='sliding-add'>
                <i class="fa-solid fa-location-dot"></i>
                <Marquee className='mov-marquee' direction='left' gradient={false} speed='40'>
  Gulistan-e-Johar Block-17
</Marquee>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar