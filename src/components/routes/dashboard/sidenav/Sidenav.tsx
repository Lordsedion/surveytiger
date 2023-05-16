import React, {useState, useEffect} from 'react'
import {SiSpeedtest} from 'react-icons/si'
import {TbUserCircle} from 'react-icons/tb'
import {FcStatistics} from 'react-icons/fc'
import {FaBell} from 'react-icons/fa'
import {DiStreamline} from 'react-icons/di'
import {IoIosCreate} from 'react-icons/io'
import {AiOutlineFileDone} from 'react-icons/ai'
import {MdModeNight} from 'react-icons/md'
import {BsSunFill} from 'react-icons/bs'
import './sidenav.css'

const Sidenav = () => {
    const [activeLink, setActive] = useState('#')
    const[darkMode, isDarkMode] = useState(false)

    useEffect(() => {
        if (darkMode) {document.getElementById('root')?.setAttribute('data-theme', 'dark')}
        else {document.getElementById('root')?.setAttribute('data-theme', 'light')}
    }, [darkMode])
  return (
    <div className="dashboard-side-bar-lg">
        <div className="dashboard-side-bar-lg-2">
            <div className="top-name-ctn-comp">
                <h2>SurveyTiger</h2>
            </div>
        <div className="user-cta-s-col">
            <a href="#" className={`flex-a-11 ${activeLink === '#'? 'active':''}`} onClick={()=> {setActive('#')}}><p><TbUserCircle/></p> Profile</a>
            <a href="#" className={`flex-a-11 ${activeLink === '#1'? 'active':''}`} onClick={()=> {setActive('#1')}}> <p><SiSpeedtest/></p> Dashboard</a>
            <a href="#" className={`flex-a-11 ${activeLink === '#2'? 'active':''}`}  onClick={()=> {setActive('#2')}}><p><FcStatistics/></p> Reports</a>
            <a href="#" className={`flex-a-11 ${activeLink === '#3'? 'active':''}`}  onClick={()=> {setActive('#3')}}><p><FaBell/></p> Notification</a>
            <div className="mini-i-maj-cta-s">
                <div className="mini-i-maj-ctan-2">
                    <h4>My Surveys</h4>
                </div>
            <a href="#" className={`flex-a-11 ${activeLink === '#4'? 'active':''}`}  onClick={()=> {setActive('#4')}}><p><DiStreamline/></p> Surveys</a>
            <a href="#" className={`flex-a-11 ${activeLink === '#5'? 'active':''}`} onClick={()=> {setActive('#5')}}><p><IoIosCreate/></p> Create survey</a>
            <a href="#" className={`flex-a-11 ${activeLink === '#6'? 'active':''}`} onClick={()=> {setActive('#6')}}><p><AiOutlineFileDone/></p>Completed</a>
            </div>
            
        </div>
        
        </div>
        <div className="night-m-s-ctn">
            <div className={`night-mode-dash ${darkMode ? 'color-primary': ''}`} onClick={() => {isDarkMode(true)}}><MdModeNight/></div>
        <div className={`night-mode-dash ${!darkMode ? 'color-primary': ''}`} onClick={() => {isDarkMode(false)}}><BsSunFill/></div>
        </div>
    </div>
  )
}

export default Sidenav