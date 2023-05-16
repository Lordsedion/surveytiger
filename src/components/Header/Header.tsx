import React from 'react'
import { Pagination, Navigation, Autoplay} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import {Link} from 'react-router-dom'
import './header.css'

import img1 from '../../images/img.png'
import img2 from '../../images/img1.png'
import img3 from '../../images/img2.png'
import img4 from '../../images/img3.jpg'
import img5 from '../../images/img4.png'

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const testData1 = [
    {
        "index": 0,
        "image": img1,
        "mainH": "Create and take surveys with ease: Join our platform today",
        "subH": "Participate in surveys from around the world with ease on our user-friendly platform. Join now to gather valuable insights and make informed decisions."
    },
    {
        "index": 1,
        "image": img2,
        "mainH": "Unlock the power of feedback: Use our survey tool to make informed decisions",
        "subH": "Participate in surveys from around the world with ease on our user-friendly platform. Join now to gather valuable insights and make informed decisions."
    },
    {
        "index": 2,
        "image": img3,
        "mainH": "Improve your surveys with our user-friendly platform: Start now",
        "subH": "Participate in surveys from around the world with ease on our user-friendly platform. Join now to gather valuable insights and make informed decisions."
    },
    {
        "index": 3,
        "image": img4,
        "mainH": "Create surveys that deliver results: Sign up for our platform today",
        "subH": "Participate in surveys from around the world with ease on our user-friendly platform. Join now to gather valuable insights and make informed decisions."
    },
    {
        "index": 4,
        "image": img5,
        "mainH": "Simplify your survey process: Use our platform to create and analyze surveys",
        "subH": "Participate in surveys from around the world with ease on our user-friendly platform. Join now to gather valuable insights and make informed decisions."
    },
]

interface Myprops {
    mainH:string;
    subH:string;
    image:any;
}

const Slider = ({mainH, subH, image}: Myprops) => {
    return (
        <div className="header">
            <div className="header-left">
                <h1>{mainH}</h1>
                <h4 className='m-5'>{subH}</h4>
                <>
                {<Link to='/register'><button className='sgu-dsh-but mx-5'>Sign up</button></Link>}
                </>
                
            </div>
        <div className="header-right">
            <img src={image} alt="Img" className='img-classes-head'/>
        </div>
        </div>
    )
}

const Header = () => {
  return (
    <div className="header-001 my-4">
        <Swiper 
        pagination={{clickable: true}} 
        loop={true}
        speed={500}
        navigation={true}
        modules={[Autoplay,Pagination, Navigation]}
         spaceBetween={40} slidesPerView={1}
         autoplay={{
            delay: 10500,
            disableOnInteraction: false,
          }}
         >
            {
            testData1.map(({index, mainH, subH, image}) => {
                return (
                    <SwiperSlide key={index}>
                        <Slider mainH={mainH} subH={subH} image={image} />
                    </SwiperSlide>
                )
            })
            }
           
        </Swiper>
        
    </div>
  )
}

export default Header