import React, {useEffect,useState} from 'react';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import './App.css';
import Home from './pages/Homepage/Home';
import Navbar from './pages/Navbar/Navbar'
import Footer from './pages/Footer/Footer'

function App() {
  return (
    <Router basename="/">
        <Navbar/>
        {/* <Fromtop> */}
          <Routes> 
          <Route exact path="/" element={<Home/>}/>
          {/* <Route path="*"  element={<Error404/>}/> */}
        </Routes>
        {/* </Fromtop> */}
        {/* <Back_to_top/> */}
        <Footer/>
      </Router>
  );
}

export default App;
