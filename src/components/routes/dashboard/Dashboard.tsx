import React from 'react'
import Home from './home/Home.tsx';
import Sidenav from './sidenav/Sidenav.tsx';
import { Outlet } from 'react-router';
import Footer from '../../footer/Footer.tsx';
import Navbar from '../../Navbar/Navbar.tsx';
import SideProfile from './sideprofile/SideProfile.tsx';


const Dashboard = () => {
  return (
  <>
  <dl className='sorry-bro'>
    <Navbar/>
  </dl>
   <dl className='d-god-c'>
    <Sidenav/>
    <dl className='m-2-112--'>
      <Outlet/>
    </dl>

    <SideProfile/>
    </dl>
     <Footer/>
  </>
  ) 
   
}

export default Dashboard