import React, { useState, useEffect, createContext, useContext } from "react";
import "./answer.css";
import profileImg from "../../../../images/img.png";
import {TbGridDots} from 'react-icons/tb'
import {RxDragHandleDots2} from 'react-icons/rx'
import BollyBox, { CheckBox, UserInputQ } from "./MoreTypes";

export const QSendContext = createContext<SubmitVType | undefined>(undefined);
export const arr:any = {}

interface SubmitVType {
  arr: {}
}
export interface optType {
  id: number
  questionId: string
  chosen: string
  valueT: number
  optD: string
  setValueT: React.Dispatch<React.SetStateAction<number>>
}
export interface bollyType {
  id: number
  questionId: string
  chosen: string
  valueT: number
  option: string
  setValueT: React.Dispatch<React.SetStateAction<number>>
}
export interface checkType {
  id: number
  questionId: string
  chosen: string
  valueT: number | number[]
  option: string
  setValueT: React.Dispatch<React.SetStateAction<number[]>>
  maxCheck: number
}
interface QTypePost {
  id: string
  opt: number
}
interface AnsType {
  id: number
  option: string
}
export interface QTypeGet {
  questionId: string
  id: number
  text: string
  opt?: []
  isCheck?:boolean
  maxCheck?: number
}
interface QArray {
  surveyId:string
  arr: QTypePost
  date: Date
}
interface sendAType {
  id:string
  surveyId:string
  choice: number
  date: Date
}

const Options = (inp:optType)=> {
  const useCont = useContext(QSendContext)
  return (
    <>
      <div className="opt-flex-me1">
        <p className={`${inp.chosen === 'chosen-one' ? 'color-primary': ''} flex items-center galife gap-1`}><RxDragHandleDots2/> {inp.optD}</p>
        <div className={`wrap-no-forgob-1 ${inp.chosen}`} onClick={
                ()=> {
                  inp.setValueT(inp.id)
                  arr[inp.questionId] = {
                    "id": inp.questionId,
                    "surveyId": "surveyId",
                    "choice": inp.valueT,
                    "date": Date.now()
                  }
                  console.log("Array", arr)
                }
                }>
          <p>Some random option that i don't know if it has purpose or not for now.</p>
        </div>
      </div>
    </>
    )
}

const QuestionBoxes = (inp:QTypeGet)=> {
  const [choseMe, setChoseMe] = useState<number>(-1)

  return (
    <div className="q-box-1-t-flx">
        <div className="holem">
          <p><TbGridDots/></p>
          <h4>Question {inp.id}</h4>
        </div>
            <div className="main-event-1">
                <div className="wrap-me-bro-103">
                    <p>{inp.text}</p>
                </div>
                <div className="options-sect-11">

                <Options chosen={`${choseMe===1 ? 'chosen-one': ''}`} valueT={choseMe} 
                    setValueT={setChoseMe} questionId={inp.questionId} id={1} optD='A' key={1}/>

                <Options chosen={`${choseMe===2 ? 'chosen-one': ''}`} valueT={choseMe} 
                    setValueT={setChoseMe} questionId={inp.questionId} id={2} optD='B' key={2}/>

                <Options chosen={`${choseMe===3 ? 'chosen-one': ''}`} valueT={choseMe} 
                    setValueT={setChoseMe} questionId={inp.questionId} id={3} optD='C' key={3}/>

                <Options chosen={`${choseMe===4 ? 'chosen-one': ''}`} valueT={choseMe} 
                    setValueT={setChoseMe} questionId={inp.questionId} id={4} optD='D' key={4}/>
                </div>
              </div>
    </div>
  )
}

const Answer = () => {

  useEffect(()=>{
      setTimeout(
        ()=> {
          //post the values of the array that changed to the server
        },
      30000)
  }, [Date.now()])

  return (
    <>
          <div className="answer-ctn">
          <div className="some-fancy-ctn">
            <div className="hard-flex-101">
              <div className="hard-f-item-l">
                <h2>Welcome</h2>
              </div>

              <div className="hard-f-item-r">
                <h4>Okechukwu Joshua</h4>
                <img src={profileImg} alt="Javascript" />
              </div>
            </div>
          </div>

          <div className="questions-meta-data">
            <div className="some-keeper-rank-1">
              <h3 className="title-qmd font-medium">Some cheerful guy does good</h3>
              <p className="meta-desc">
                Some good cheerful guy Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Qui, assumenda.
              </p>
            </div>
          </div>

          <div className="question-boxes">
              <QuestionBoxes questionId="someId1" id={1} text="Please be good. Do not be hard. Please"
              key={1}/>
              <QuestionBoxes questionId="someId2" id={2} text="Do not be greedy. Be like the good samritan"
              key={2}/>
              <BollyBox questionId="someId3" id={3} text="Be humble, be loyal and wise" key={3}/>
              <CheckBox questionId="someId3" id={4} text="Be humble, be loyal and wise" key={4}
              maxCheck={2}/>
              <UserInputQ questionId="someId4" id={5} text="Let hear what you have to say please!"key={5}/>
              <UserInputQ questionId="someId5" id={6} text="Let hear what you have to say Nah!" key={6}/>
          </div>

          <div className="coppre">
            <button>Finish Survey</button>
          </div>
        </div>
    </>
  );
};

export default Answer;
