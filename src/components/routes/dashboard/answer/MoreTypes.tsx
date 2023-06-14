import React, {useState, createContext, useContext} from 'react'
import { arr, checkType } from './Answer'
import { bollyType } from './Answer'
import {TbGridDots} from 'react-icons/tb'
import {BiRadioCircleMarked} from 'react-icons/bi'
import {BiCheckbox} from 'react-icons/bi'
import {BiCheckboxSquare} from 'react-icons/bi'
import { QTypeGet } from './Answer'

type CheckContextType = {
  choseMe: number[]
  setChoseMe: any
  maxCheck: number | undefined
  verifyCheck: number
  setVerifyCheck: React.Dispatch<React.SetStateAction<number>>
}

const CheckBoxContext = createContext<CheckContextType | undefined>(undefined)

const CheckOpt = (inp:checkType)=> {
  const cont = useContext(CheckBoxContext)
  const maxCheck = cont?.maxCheck!
  const verifyCheck = cont?.verifyCheck!
  const setVerifyCheck = cont?.setVerifyCheck!
  const [choser, setChoser] = [cont?.choseMe!, cont?.setChoseMe!]
  return (
    <>
      <div className="opt-flex-me1">
        <p className={`${inp.chosen === 'chosen-one' ? 'color-primary': ''} flex items-center galife gap-1`}>
          {
            inp.chosen === 'chosen-one'? <span><BiCheckboxSquare/></span>
            : <span><BiCheckbox/></span>
          }
         </p>
        <div className={`wrap-no-forgob-1 ${inp.chosen}`} onClick={
                ()=> {
                  const newArr =  [...choser]
                  if (typeof(newArr) !== 'number') {
                    if (newArr.includes(inp.id)) {
                      newArr[inp.id-1] = 0
                      setVerifyCheck((prev) => prev-=1)
                      setChoser(newArr)
                    }
                    else {
                      if (verifyCheck < maxCheck) {
                        newArr[inp.id-1] = inp.id
                        setVerifyCheck((prev) => prev+=1)
                        setChoser(newArr)
                      } 
                    }
                    console.log('New array ', newArr)
                  }
                  
                  arr[inp.questionId] = {
                    "id": inp.questionId,
                    "surveyId": "surveyId",
                    "choice": choser,
                    "date": Date.now()
                  }
                  console.log("Array", arr)
                }
                }>
          <p>{inp.option}</p>
        </div>
      </div>
    </>
    )
}
const BollyOpt = (inp:bollyType)=> {
  return (
    <>
      <div className="opt-flex-me1">
        <p className={`${inp.chosen === 'chosen-one' ? 'color-primary': ''} flex items-center galife gap-1`}> <span><BiRadioCircleMarked/></span></p>
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
          <p>{inp.option}</p>
        </div>
      </div>
    </>
    )
}

export const UserInputQ = (inp:QTypeGet)=>{
  const [userInp, setUserInp] = useState("")
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
              <textarea name="something_a_random_guy_will_type" id="something_random" 
              placeholder="Type text here" cols={30} rows={3} value={userInp}
               onChange={(e)=>{
                setUserInp(e.target.value)
                  arr[inp.questionId] = {
                    "id": inp.questionId,
                    "surveyId": "surveyId",
                    "user_input": userInp,
                    "date": Date.now()
                  }
                  console.log("Array", arr)
              }}></textarea>
          </div>
        </div>
  </div>
    )
}

export const CheckBox = (inp:QTypeGet)=>{
  const maxCheck = inp.maxCheck
  const [verifyCheck, setVerifyCheck] = useState<number>(0);
  const [choseMe, setChoseMe] = useState<number[]>([0,0,0,0])
    return (
      <CheckBoxContext.Provider value={{choseMe, setChoseMe, maxCheck, verifyCheck, setVerifyCheck}}>
        <div className="q-box-1-t-flx">
            <div className="holem">
              <p><TbGridDots/></p>
              <h4>Question {inp.id}</h4>
            </div>

            <div className="main-event-1">
                <div className="wrap-me-bro-103">
                    <p>{inp.text}</p>
                </div>
                <div className="options-sect-11" onClick={()=>{
                  console.log("As", choseMe, choseMe.includes(1))
                }}>
                    <CheckOpt chosen={`${choseMe.includes(1) ? 'chosen-one': ''}`} questionId={inp.questionId} id={1} option={'I do know'} 
                    key={1} maxCheck={inp.maxCheck!}/>

                    <CheckOpt chosen={`${choseMe.includes(2) ? 'chosen-one': ''}`} questionId={inp.questionId} id={2} option='I cannot tell' 
                    key={2} maxCheck={inp.maxCheck!}/>

                    <CheckOpt chosen={`${choseMe.includes(3) ? 'chosen-one': ''}`} questionId={inp.questionId} id={3} option='I do not know'
                    key={3} maxCheck={inp.maxCheck!}/>

                    <CheckOpt chosen={`${choseMe.includes(4) ? 'chosen-one': ''}`} questionId={inp.questionId} id={4} option='I do not know'
                    key={4} maxCheck={inp.maxCheck!}/>
                </div>
              </div>
            </div>
      </CheckBoxContext.Provider>
      
    )
}
const BollyBox = (inp:QTypeGet)=>{
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
              <BollyOpt chosen={`${choseMe===1 ? 'chosen-one': ''}`} valueT={choseMe} 
              setValueT={setChoseMe} questionId={inp.questionId} id={1} option={'I do know'} key={1}/>
              <BollyOpt chosen={`${choseMe===2 ? 'chosen-one': ''}`} valueT={choseMe} 
              setValueT={setChoseMe} questionId={inp.questionId} id={2} option='I cannot tell' key={2}/>
              <BollyOpt chosen={`${choseMe===3 ? 'chosen-one': ''}`} valueT={choseMe} 
              setValueT={setChoseMe} questionId={inp.questionId} id={3} option='I do not know'key={3}/>
          </div>
        </div>
  </div>
    )
}


export default BollyBox