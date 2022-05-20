import React from 'react'
import { Link } from 'react-router-dom'
import footimg from '../../images/logo.png'
import './Footer.css'

const Footer = () => {
  return (
      <div className='mainfooter'>
          
    <div className='flexcontainer'>
        <div className='flex-3'>
            <img src={footimg} className='foot-logo'/>
            <p className='foot-p'>Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis dui, eget bibendum magna congue nec.</p>
            <div className='call-div'>
            CALL US: <a href='tel:+9233354789621' className='call-foot'>+92-333-45678912</a>
            </div>
        </div>
        <div className='flex-3i'>
            <div className='foot-head'>
                CATEGORIES
            </div>
            <Link to='/' className='link-foot'>
                Vegetables
            </Link>
            <Link to='/' className='link-foot'>
                Fruits
            </Link>
            <Link to='/' className='link-foot'>
                Meat
            </Link>
            <Link to='/' className='link-foot'>
                Dairy
            </Link>
        </div>
        <div className='flex-3i'>
        <div className='foot-head'>
            HELP
            </div>
            <Link to='/' className='link-foot'>
                Order List
            </Link>
            <Link to='/' className='link-foot'>
                Cart
            </Link>
            <Link to='/' className='link-foot'>
                Check List
            </Link>
        </div>
        <div className='flex-3i'>
        <div className='foot-head'>
            ACCOUNTS
            </div>
            <Link to='/' className='link-foot'>
                Order List
            </Link>
            <Link to='/' className='link-foot'>
                Cart
            </Link>
            <Link to='/' className='link-foot'>
                Check List
            </Link>
        </div>
        <div className='flex-3i'>
        <div className='foot-head'>
            SOCIAL
            </div>
            <div className='social-box'>
                <a href='' className='soc-link'>
                    <div className='social-icon'>
                        <i class="fa-brands fa-facebook-square"></i>
                    </div>
                </a>
            </div>
            <div className='social-box'>
                <a href='' className='soc-link'>
                    <div className='social-icon'>
                    <i class="fa-brands fa-whatsapp"></i>
                    </div>
                </a>
            </div>
            <div className='social-box'>
                <a href='' className='soc-link'>
                    <div className='social-icon'>
                    <i class="fa-brands fa-instagram"></i>
                    </div>
                </a>
            </div>
            <div className='social-box'>
                <a href='' className='soc-link'>
                    <div className='social-icon'>
                    <i class="fa-brands fa-twitter"></i>
                    </div>
                </a>
            </div>
            
        </div>
    </div>
    <div className='copyright'>
    Martlab © 2021. All Rights Reserved
    </div>
      </div>
  )
}

export default Footer