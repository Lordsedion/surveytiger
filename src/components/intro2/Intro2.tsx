import React, {useEffect} from 'react'
import {BsSearch} from 'react-icons/bs'
import img from '../../images/img.png'
import img1 from '../../images/img1.png'
import img2 from '../../images/img2.png'
import './intro2.css'

const Intro2 = () => {
    const handleScroll = ()=> {
        let moved = false
        const element:any = document.querySelectorAll('.js-i2');
        const windowHeight:number = window.innerHeight;
        let elementArrayTop = [];
        let elementArrayHeight = [];
        for (let i=0; i<element?.length; i++) {
            elementArrayTop[i] = element[i]?.getBoundingClientRect().top;
            elementArrayHeight[i] = element[i]?.offsetHeight;
        } 
        
        for (let i=0; i<element?.length; i++) {
        if (elementArrayTop[i] < windowHeight) {   
                moved = true 
                element[i]?.classList.add('jacki-chan', 'my-0')
            }
        }
        if (moved) {INoSendUrPapa()}
    } 
    const handleScroll2 = ()=> {
        let moved = false
        const element:any = document.querySelectorAll('.left-sliders--');
        const windowHeight:number = window.innerHeight;
        let elementArrayTop = [];
        let elementArrayHeight = [];
        for (let i=0; i<element?.length; i++) {
            elementArrayTop[i] = element[i]?.getBoundingClientRect().top;
            elementArrayHeight[i] = element[i]?.offsetHeight;
        } 
        
        for (let i=0; i<element?.length; i++) {
        if (elementArrayTop[i] < windowHeight) {   
                moved = true 
                element[i]?.classList.add('animate-answer', 'pa-left-fxd')
            }
        }
        if (moved) {INoSendUrPapa2()}
    }
    const handleScroll3 = ()=> {
        let moved = false
        const element:any = document.querySelectorAll('.right-sliders--');
        const windowHeight:number = window.innerHeight;
        let elementArrayTop = [];
        let elementArrayHeight = [];
        for (let i=0; i<element?.length; i++) {
            elementArrayTop[i] = element[i]?.getBoundingClientRect().top;
            elementArrayHeight[i] = element[i]?.offsetHeight;
        } 
        
        for (let i=0; i<element?.length; i++) {
        if (elementArrayTop[i] < windowHeight) {   
                moved = true 
                element[i]?.classList.add('animate-answer-r', 'pa-right-fxd')
            }
        }
        if (moved) {INoSendUrPapa2()}
    }
    useEffect(()=> {    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('scroll', handleScroll2);
    window.addEventListener('scroll', handleScroll3);
    }, [])

function INoSendUrPapa() {
    window.removeEventListener('scroll', handleScroll); 
}        
function INoSendUrPapa2() {
    window.removeEventListener('scroll', handleScroll2); 
}       
function INoSendUrPapa3() {
    window.removeEventListener('scroll', handleScroll3); 
}       

    return (
      <div className="intro-2">
        <div className="js-i2">
            <p className='me--after'>2</p>
          <h2 className='s-2-mme3'>Publish</h2>
          <h1 className='my-5'>Publish your survey to your customers</h1>
          <p className='lorem--1 text-xl'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, 
              quam perferendis odit autem eum doloremque cumque tenetur laboriosam,
               in repellendus aperiam, quis quo? Ea consequatur distinctio repellendus 
               recusandae! Harum, illum.
          </p>
        </div>
          
          <div className="intro-2-next">
              <div className="flx-q-ins-2">
                 <div className="flx-q-ins2-left">
                    <img src={img} className='left-sliders--' alt="Javascript" />
                    <img src={img1} className='left-sliders--' alt="Javascript" />
                    <img src={img2} className='left-sliders--' alt="Javascript" />
                 </div>
                <div className="flx-q-ins2-right">
                    <div className="fl-r-2-2-c-3 right-sliders--">
                        <h3 className='we-g'><BsSearch/></h3>
                        <h2>Preview your surveys</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi delectus magni error veritatis similique rem quos optio, ab reprehenderit! Beatae temporibus laboriosam harum minima obcaecati.</p>
                    </div>
                    <div className="fl-r-2-2-c-3 right-sliders--">
                    <h3 className='we-g'><BsSearch/></h3>
                        <h2>Capture interests with photos</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi delectus magni error veritatis similique rem quos optio, ab reprehenderit! Beatae temporibus laboriosam harum minima obcaecati.</p>
                    </div>
                    <div className="fl-r-2-2-c-3 right-sliders--">
                    <h3 className='we-g'><BsSearch/></h3>
                        <h2>Publish your survey with a click</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi delectus magni error veritatis similique rem quos optio, ab reprehenderit! Beatae temporibus laboriosam harum minima obcaecati.</p>
                    </div>
                </div>
            </div>
              <div className="flx-q-ins-2-1 none">
                    <div className="fl-r-2-2-c">
                        <h3 className='we-h'><BsSearch/></h3>
                        <h2>Preview your surveys</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi delectus magni error veritatis similique rem quos optio, ab reprehenderit! Beatae temporibus laboriosam harum minima obcaecati.</p>
                        <img src={img2} alt="Javascript" />
                    </div>
                    <div className="fl-r-2-2-c">
                    <h3 className='we-h'><BsSearch/></h3>
                        <h2>Capture interests with photos</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi delectus magni error veritatis similique rem quos optio, ab reprehenderit! Beatae temporibus laboriosam harum minima obcaecati.</p>
                        <img src={img} alt="Javascript" />
                    </div>
                    <div className="fl-r-2-2-c">
                    <h3 className='we-h'><BsSearch/></h3>
                        <h2> Publish your survey with a click </h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi delectus magni error veritatis similique rem quos optio, ab reprehenderit! Beatae temporibus laboriosam harum minima obcaecati.</p>
                        <img src={img1} alt="Javascript" />
                    </div>
            </div>
          </div>
          
      </div>
    )
  }
  
  export default Intro2