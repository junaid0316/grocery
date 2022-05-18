import React from 'react'
import { Link } from 'react-router-dom'
import cate_img1 from '../../images/cateimg1.jpeg'
import cate_img2 from '../../images/cateimg2.jpeg'
import cate_img3 from '../../images/cateimg3.jpeg'
import cate_img4 from '../../images/cateimg4.jpeg'
import cate_img5 from '../../images/cateimg5.jpeg'
import './Home.css'

const Categories = () => {
  return (
    <div className='category-main'>
        <div className='flexcontainer-wid'>
            <div className='flex-1-wid'>
                <Link to='/' className='link_cate'>
                    <div><img src={cate_img1} className='cateimg'/>
                    <h3 className='cate_h3'>Vegetables</h3></div>
                </Link>
            </div>
            <div className='flex-1-wid'>
                <Link to='/' className='link_cate'>
                    <div><img src={cate_img2} className='cateimg'/>
                    <h3 className='cate_h3'>Vegetables</h3></div>
                </Link>
            </div>
            <div className='flex-1-wid'>
                <Link to='/' className='link_cate'>
                <div><img src={cate_img3} className='cateimg'/>
                    <h3 className='cate_h3'>Vegetables</h3></div>
                </Link>
            </div>
            <div className='flex-1-wid'>
                <Link to='/' className='link_cate'>
                    <div><img src={cate_img4} className='cateimg'/>
                    <h3 className='cate_h3'>Vegetables</h3></div>
                </Link>
            </div>
            <div className='flex-1-wid'>
                <Link to='/' className='link_cate'>
                    <div><img src={cate_img5} className='cateimg'/>
                    <h3 className='cate_h3'>Vegetables</h3></div>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Categories