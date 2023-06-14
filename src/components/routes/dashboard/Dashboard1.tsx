import React from 'react'
import Sidenav from './sidenav/Sidenav.tsx';
import { Outlet } from 'react-router';
import Footer from '../../footer/Footer.tsx';
import Navbar from '../../Navbar/Navbar.tsx';

const Dashboard1 = () => {
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
      </dl>
       <Footer/>
    </>
    ) 
     
  }

export default Dashboard1