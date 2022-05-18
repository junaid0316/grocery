import React from 'react'
import './Home.css'
import Banner from './Banner'
import Heading from './Heading'
import Categories from './Categories'
import Flashsale from './Flashsale'
import Twoimg from './Twoimg'
import Subcate from './Subcate'
import Products from './Products'

const Home = () => {
  return (
    <div className='main-home'>
        <Banner/>
        <Heading name='Categories'/>
        <Categories/>
        <Flashsale/>
        <Twoimg/>
        <Subcate/>
        <Products/>
    </div>
  )
}

export default Home