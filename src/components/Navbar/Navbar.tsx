import React, { useEffect, useState } from 'react'
import './navbar.css'
import {FaUserAlt} from 'react-icons/fa'
import {AiOutlineMenu} from 'react-icons/ai'
import {MdModeNight} from 'react-icons/md'
import {BsSunFill} from 'react-icons/bs'
import {FaTimes} from 'react-icons/fa'
import {Link} from 'react-router-dom'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [isNav, setisNav] = useState(false)
  const[darkMode, isDarkMode] = useState(false)

  function sideNavbar() {
    setisNav(!isNav)
  } 

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1) {setScrolled(true)}
      else {setScrolled(false)}
    };
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
      if (darkMode) {document.getElementById('root')?.setAttribute('data-theme', 'dark')}
      else {document.getElementById('root')?.setAttribute('data-theme', 'light')}
  }, [darkMode])

  return (
    <div className={`${scrolled ? 'nav-container nav-c-bbb' : 'nav-container'} py-4`}>
        <h2 className="logo-header"><a href="/">SurveyTiger</a></h2>
        <div className="header-links">
         <Link to={'/dashboard'}><a className='navLinks'> Dashboard</a></Link> 
          <a href='#' className='navLinks'> Create</a>
          <a href='#' className='navLinks'> Surveys</a>
          {/* <a href='#' className='navLinks'> Responses</a> */}
          <a href='#' className='navLinks'> Reports</a>
          <a href='#' className='navLinks'> About us</a>
        </div>
        <div className="right-2-nav flex flex-row" >
          <div className='flex flex-row justify-between b-u-icon items-center'>
              {darkMode && (<p className='mx-1 night-round text-2xl' onClick={() => {isDarkMode(false)}}><BsSunFill/></p>)}
              {!darkMode && (<p className='mx-1 night-round text-2xl' onClick={() => {isDarkMode(true)}}><MdModeNight/></p>)}
          </div>
          <dl onClick={sideNavbar}>
          {!isNav && (<AiOutlineMenu/>)}
          {isNav && (<FaTimes/>)} 
          </dl>
          
        </div>
        <div className="right-nav">
          <div className='flex flex-row justify-between b-u-icon items-center'>
            {darkMode && (<p className='mx-1 night-round text-2xl' onClick={() => {isDarkMode(false)}}><BsSunFill/></p>)}
            {!darkMode && (<p className='mx-1 night-round text-2xl' onClick={() => {isDarkMode(true)}}><MdModeNight/></p>)}
            <>
          <Link to="/register"><button className='but-with-blue-text'>Sign up</button></Link>
          <Link to='/login'><button className='but-with-blue-bg'>Login</button></Link>
          </>
            {/* <a href="#" className='b-u-icon font-semibold mx-3 text-xl'><p><FaUserAlt/></p></a> */}
            <p className="logged-in-user mx-3"><a href="#" className='b-u-icon font-semibold none'> John Doe</a></p>
          </div>
          
        </div>
        <div className={`side-navbar ${isNav ? "block": "none"}`}>
        <div className="side-nav-links flex flex-col m-4 overflow-y-scroll">
          <div className="link-ctn flex flex-col m-4">
            <a href="#">Profile</a>
            <a href="#">Dashboard</a>
            <a href="#">Reports</a>
            <a href="#">Notification</a>
            <a href="#">Surveys</a>
            <a href="#">Create</a>
            <a href="#">Completed</a>
            <a href="#">About us</a>
            <div className='vsb'></div>
          </div>
            
        </div>
    </div>
    </div>
  )
}

export default Navbar