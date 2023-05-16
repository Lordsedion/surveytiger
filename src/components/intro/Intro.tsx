import React, { useEffect, useState } from 'react'
import {FaTimes} from 'react-icons/fa'
import {MdOutlineExplore} from 'react-icons/md'
import './intro.css'

interface icard {
    title:string,
    subject:string
}

const IntroCard = (icard:icard)=> {
    const handleScroll = ()=> {
        let moved = false
        const element:any = document.querySelectorAll('.q-inst-segm');
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
                element[i]?.classList.add('animate-answer', 'pa-left-0-init')
            }
        }
        if (moved) {INoSendUrPapa()}
    }
    
    useEffect(()=> {    
        window.addEventListener('scroll', handleScroll);
    }, [])

    function INoSendUrPapa() {
        window.removeEventListener('scroll', handleScroll);
    
    } 
    return (
        <div className="q-inst-segm">
            <p className="icon-la-la-seg"><MdOutlineExplore/></p>
            <h3>{icard.title}</h3>
            <p className="q-inst-s-txt-1">{icard.subject}</p>
        </div>
    )
}

const QuestionWidget = ()=> {
    const [iQuestion, setiQuestion] = useState(".")
    const [index, setIndex] = useState(0)
    const [miniRun, setMiniRun] = useState(false)
    
    const handleScroll = ()=> {
        let moved = false
        const element:any = document.querySelectorAll('.ans-widget, .question-widget');
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
                element[i]?.classList.add('animate-answer', 'pa-left-0-init')
            }
        }
        if (moved) {INoSendUrPapa()}
    }
    const ihandleScroll = ()=> {
        const element:any = document.getElementById('interactive-question');
        const windowHeight:number = window.innerHeight;
        const elementArrayTop = element?.getBoundingClientRect().top;
        const elementArrayHeight = element?.offsetHeight;
    
    if (elementArrayTop < windowHeight) {   
            setMiniRun(true)
            setiQuestion("")
            iNoSendUrPapa()
        }
    }
    
    useEffect(()=> {    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('scroll', ihandleScroll);
    }, [])

    useEffect(()=> {
       writeCode(index)
    }, [iQuestion])

    function INoSendUrPapa() {
            window.removeEventListener('scroll', handleScroll);
    }   
    function iNoSendUrPapa() {
            window.removeEventListener('scroll', ihandleScroll);
    }   
    function writeCode(i:number) {
        let text = "How much do you agree with the following statement: Cats are more obedient than dogs.";
        const element = document.getElementById("interactive-question");
        
        if (miniRun) {
            if (index < text.length) {
            setIndex(index+1)
            setTimeout(() => {setiQuestion(iQuestion+text[i])}, 25);
        }
        }
        
    }     
    return (
        <div className="question-widget">
            <p className='h-s-ttl'>SurveyTiger</p>
            <p className='ab-t-right'><FaTimes/></p>
            <div className="q-w-question">
                <code id='interactive-question'><span>{iQuestion}</span><span className="cursor"></span></code>
            </div>
            <div className="answer-g-widget">
                <div className="ans-widget">
                    <p>I strongly agree with this</p>
                </div>
                <div className="ans-widget">
                    <p>I agree with this</p>
                </div>
                <div className="ans-widget">
                    <p>I'm indifferent about this</p>
                </div>
                <div className="ans-widget">
                    <p>I disagree with this</p>
                </div>
                <div className="ans-widget">
                    <p>I strongly disagree with this</p>
                </div>
            </div>
        </div>
    )
}

const Intro = () => {
    const handleScroll1 = ()=> {
        let moved = false
        const element:any = document.querySelectorAll('.intro-1');
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
                element[i]?.classList.add('animate-answer', 'pa-left-0-init')
            }
        }
        if (moved) {INoSendUrPapa1()}
    }
    
    useEffect(()=> {    
    window.addEventListener('scroll', handleScroll1);
    }, [])

function INoSendUrPapa1() {
        window.removeEventListener('scroll', handleScroll1);
}
  return (
    <div className="intro-1">
        <b>Explore your data with SurveyTiger</b> 
        <p className='me--after'>1</p>
        <h2 className='s-2-mme3'>Create</h2>
        <h1 className='my-5'>Create a catchy survey</h1>
        <p className='lorem--1 text-xl'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, 
            quam perferendis odit autem eum doloremque cumque tenetur laboriosam,
             in repellendus aperiam, quis quo? Ea consequatur distinctio repellendus 
             recusandae! Harum, illum.
        </p>
        <div className="intro-1-next">
            <QuestionWidget/>
            <div className="flx-q-inst">
                <IntroCard title={"Explore hidden insights in your data"} subject= {"Lorem ipsum dolor sit amet, consectetur adipisicing elit.Quam quos sed quas atque perferendis suscipit.Error sit aperiam sequi explicabo, unde voluptates.Cumque, quasi blanditiis."}/>
                <IntroCard title={"Explore hidden insights in your data"} subject= {"Lorem ipsum dolor sit amet, consectetur adipisicing elit.Quam quos sed quas atque perferendis suscipit.Error sit aperiam sequi explicabo, unde voluptates.Cumque, quasi blanditiis."}/>
                <IntroCard title={"Explore hidden insights in your data"} subject= {"Lorem ipsum dolor sit amet, consectetur adipisicing elit.Quam quos sed quas atque perferendis suscipit.Error sit aperiam sequi explicabo, unde voluptates.Cumque, quasi blanditiis."}/>
                <IntroCard title={"Explore hidden insights in your data"} subject= {"Lorem ipsum dolor sit amet, consectetur adipisicing elit.Quam quos sed quas atque perferendis suscipit.Error sit aperiam sequi explicabo, unde voluptates.Cumque, quasi blanditiis."}/>
            </div>
        </div>
        
    </div>
  )
}

export default Intro