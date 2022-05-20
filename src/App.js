import React, {useEffect,useState} from 'react';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import './App.css';
import Home from './pages/Homepage/Home';
import Navbar from './pages/Navbar/Navbar'
import Footer from './pages/Footer/Footer'
import Subcate from './pages/Subcate/Subcate';
import Checkout from './pages/Checkout/Checkout';

function App() {
  return (
    <Router basename="/">
        <Navbar/>
        {/* <Fromtop> */}
          <Routes> 
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/Categories" element={<Subcate/>}/>
          <Route exact path="/Checkout" element={<Checkout/>}/>
          {/* <Route path="*"  element={<Error404/>}/> */}
        </Routes>
        {/* </Fromtop> */}
        {/* <Back_to_top/> */}
        <Footer/>
      </Router>
  );
}

export default App;
