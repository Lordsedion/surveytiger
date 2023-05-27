import React, {useState, useContext} from 'react'
import { QuestionContext } from '../create/Create.tsx'
import SomeFilledCirc from '../create/Create.tsx'

interface thisType {
    id_:number
}
const BoolSmall = (inp:thisType)=> {
    const useCont = useContext(QuestionContext)
    const optionsBool = useCont?.optionsBool!;
    const setOptionsBool = useCont?.setOptionsBool!;

    const [stateS, setStateS] = useState(optionsBool[inp.id_].question)

    return (
        <li className='my-1 font-bold flex items-center gap-2'><SomeFilledCirc/><input type="text" value={stateS} onChange={
            (e)=>{
                const newArr =  optionsBool
                newArr[inp.id_].question = e.target.value
                setStateS(e.target.value)
                setOptionsBool(newArr)
            }}/></li>
    )
}
 const BooleanAnswer = ()=> {
    const useCont = useContext(QuestionContext)
    const optionsBool = useCont?.optionsBool!;
    const setOptionsBool = useCont?.setOptionsBool!;

   if (optionsBool.length===0){
    setOptionsBool((prevOptionsBool) => [
        ...prevOptionsBool,
        { question: 'True', id: 0 },
        { question: 'Indifferent', id: 1 },
        { question: 'False', id: 2 },
      ]);
    }
    return (
        <div className="boolen-ans-1">
            <ul>
                {
                    optionsBool.map((items:any)=>(
                        <BoolSmall id_={items.id} key={items.id}/>
                    ))
                }
            </ul>
        </div>
    )
}

export default BooleanAnswer
