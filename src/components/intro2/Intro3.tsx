import React, {useEffect} from 'react'
import img1 from '../../images/img1.png'
import './intro2.css'

const Intro3 = () => {
    const handleScroll = ()=> {
        let moved = false
        const element:any = document.querySelectorAll('.js-i2-2');
        const windowHeight:number = window.innerHeight;
        let elementArrayTop =  {};
        let elementArrayHeight =  {};
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
        const element:any = document.querySelectorAll('.left-sliders--2');
        const windowHeight:number = window.innerHeight;
        let elementArrayTop =  {};
        let elementArrayHeight =  {};
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
        const element:any = document.querySelectorAll('.card-i3-item');
        const windowHeight:number = window.innerHeight;
        let elementArrayTop =  {};
        let elementArrayHeight =  {};
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
        if (moved) {INoSendUrPapa3()}
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
        <p className='me--after-o'>3</p>
        <h2 className='s-2-mme3 js-i2-2'>Insight</h2>
        <div className="left-sliders--2">
            <h1 className='my-5 font-bold '>Gain new insight through data</h1>
            <p className='lorem--1 text-xl'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, 
                quam perferendis odit autem eum doloremque cumque tenetur laboriosam,
                in repellendus aperiam, quis quo? Ea consequatur distinctio repellendus 
                recusandae! Harum, illum.
            </p>  
        </div>
        <div className="m-i3-card ">
            <div className="card-i3-item">
                <h2>Innovations through accurate data</h2>
                <img src={img1} alt="Javascript" />
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero amet suscipit aperiam, culpa voluptates delectus!</p>
            </div>
            <div className="card-i3-item">
                <h2>Earn by answering surveys</h2>
                <img src={img1} alt="Javascript" />
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero amet suscipit aperiam, culpa voluptates delectus!</p>
            </div>
            <div className="card-i3-item">
                <h2>Get paid in minutes</h2>
                <img src={img1} alt="Javascript" />
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero amet suscipit aperiam, culpa voluptates delectus!</p>
            </div>
            <div className="card-i3-item">
                <h2>Transform your data with just a click</h2>
                <img src={img1} alt="Javascript" />
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero amet suscipit aperiam, culpa voluptates delectus!</p>
            </div>
        </div> 
      </div>
  )
}

export default Intro3