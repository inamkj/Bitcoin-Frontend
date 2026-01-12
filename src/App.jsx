import { useState } from 'react'

import './App.css'
import "./styles/style.css";
import Navbar from './components/navbar';
import img from '../public/images/about.jpg';
import About from './components/about';
import Form from './components/form';
import Home from './components/home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Aboutpage from './pages/aboutpage';
import DataMaping from './components/datamaping';
import Details from './components/details';
import Parent from './components/parent';
import Practice from './components/practice';
import UserDashboard from './components/userdashboard';
import Coindetails from './components/coindetails';
import BasicExample from './components/basicexample';
import YouTubeSearch from './components/utube';
import PracReg from './components/prac-reg';
import PracLogin from './components/prac_login';




function App() {

  return (
    <>


<div className="main">
  
<Navbar/>
<PracLogin/>
        <PracReg/>
        <YouTubeSearch/>
        <Routes>
          
          <Route path='/' element={<Home/>} />
          <Route path="about" element={<About/>} />
          <Route path='/form' element={<Form/>} />
          <Route path='/detail' element={<Details/>} />
          <Route path='/coins' element={<DataMaping/>} />
          <Route path='/coindetails' element={<Coindetails/>} />


        </Routes>

        
    </div>  


</>



  )




}



export default App
