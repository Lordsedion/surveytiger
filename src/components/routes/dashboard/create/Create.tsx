import React, {useEffect, useState, useCallback, createContext, useContext} from 'react'
import {FaPlus, FaTimes} from 'react-icons/fa'
import {BsCardImage,BsFillCameraVideoFill} from 'react-icons/bs'
import {AiFillAudio} from 'react-icons/ai'
import PreviewQ from './Prev.tsx'
import './create.css'

const SomeCirc = ()=> {
    return (
        <p className='q-outline-c'></p>
    )
}
const SomeFilledCirc = ()=> {
    return (
        <>
            <p className='q-outline-c'></p><p className='q-fill-c flex items-center justify-center'><p className='the-in-w11'></p></p>
        </>
    )
}

interface forPrintQ {
    someText:string
    someId:number
    someArray:any
    setSArray:any
}
const PrintQ = (inp:forPrintQ)=> {
    const [smallState, setSmallState] = useState(inp.someText.valueOf())
    let arr = inp.someArray
    return (
        <div className="ed-me-box-item flex items-center gap-4">
            <p className='my-3 font-bold flex items-center gap-2'><SomeCirc/><input type="text" value={smallState} onChange={(e)=> {
                setSmallState(e.target.value)
            }} className='i112-input'/></p>
            <button className='p-edir-b' onClick={(e)=> {
                e.preventDefault()
                arr[inp.someId]['question'] = smallState
                inp.setSArray(arr)
            }}>Edit</button>
        </div>
    )
}

interface booleanType {
    arr:any
    setArr:any
}
interface thisType {
    arr:any
    setArr:any
    opt:string
    id_:number
}
const BoolSmall = (inp:thisType)=> {
    const [stateS, setStateS] = useState(inp.opt)
    return (
        <p className='my-1 font-bold flex items-center gap-2'><SomeFilledCirc/><input type="text" value={stateS} onChange={
            (e)=>{
                inp.arr[inp.id_].question = e.target.value
                setStateS(e.target.value)
                inp.setArr(inp.arr)
            }}/></p>
    )
}
const BooleanAnswer = (inp:booleanType)=> {
   if (inp.arr.length===0){
        inp.arr.push({"question": "True", "id": 0})
        inp.arr.push({"question": "Indifferent", "id": 1})
        inp.arr.push({"question": "False", "id": 2})
        inp.setArr(inp.arr)
    }
    return (
        <div className="boolen-ans-1">
            <ul>
                {
                    inp.arr.map((items:any)=>(
                        <BoolSmall arr={inp.arr} setArr={inp.setArr} opt={items.question} id_={items.id}/>
                    ))
                }
            </ul>
        </div>
    )
}

interface rad {
    id:number
    radio:boolean
    title:string
    displayedOptions:string
    options:any
    setter:any
    optionArray: any
    setoptionArray: any
}
const RadioAnswer = (radio:rad)=> {
    // const [isRadio, setIsRadio] = useState(false)

    return (
        <div className="radio-answer-032">
            <div className="added-quest-rad">
                <PrintQ someText={radio.optionArray[radio.id]['question']} someId={radio.id} someArray={radio.optionArray} setSArray={radio.setoptionArray}/>
            </div>
        </div>
    )
}

interface Tindiv {
    opt:string
    arr:any
    setArr:any
    qarr:any
    setQ:any
    id:number
    mid:number
    type:string
}
const Individ = (inp:Tindiv)=> {
    const [state, setState] = useState(inp.opt)
    return (
        <>
            <p className='my-3 font-bold flex items-center gap-2'><SomeCirc/><input type='text' value={state} onChange={
                (e)=> {
                    inp.setArr(e.target.value)
                    setState(e.target.value)
                    inp.qarr[inp.mid]['Options'][inp.id]['question'] = e.target.value
                    inp.setQ(inp.qarr)
            }}/></p>
        </>
    )
}



interface imType {
    imageId:number,
    image:any,
}
interface optionsType {
    question:string
    id:number
}
interface questionArrayType {
    question: string
    Options: any
    id:number
    typeofQ: string
    qImage:object
    qVideo:object
    qAudio:object
}

interface surveytype {
    questArray: any
    survTitle: string
    budget: number
    paid: boolean
    isPublished: boolean
}

const Create = () => {
    const [image, setImages] = useState<imType[]>([]);
    const [video, setVideo] = useState<imType[]>([]);
    const [audio, setAudio] = useState<imType[]>([]);
    const [radio, setRadio] = useState(true);
    const [answerType, setAnswerType] = useState('radio');
    const [surveyTitle, setSurveyTitle]= useState("");
    const [surveyBudget, setSurveyBudget]= useState("");
    const [question, setQuestion]= useState("");
    const [renderOption, setRenderOption] = useState('');
    const [options, setOptions] = useState<optionsType[]>([]);
    const [optionsBool, setOptionsBool] = useState<optionsType[]>([]);
    const [questionArray, setQuestionArray] = useState<questionArrayType[]>([])

    function setMe(arr:any) {
        setQuestionArray(arr)
    }
    function handleDelete(index:number) {
        const newItems:any = [...image]
        newItems.splice(index, 1)
        for (let i=0; i<newItems.length; i++) {
            newItems[i]["imageId"] = i
        }
        setImages(newItems)
    }
    function handleDeleteA(index:number) {
        const newItems:any = [...audio]
        newItems.splice(index, 1)
        for (let i=0; i<newItems.length; i++) {
            newItems[i]["imageId"] = i
        }
        setAudio(newItems)
    }
    function handleDeleteV(index:number) {
        setVideo([])
    }
    function PreviewImage(e:any){
        if (e.target.files.length > 0){
            for (let i = 0; i < e.target.files.length; i++) {
                 if (i+image.length >4){
                    return alert('Maximum of 5 photos!')
                }
                setImages(image => [...image, {"imageId": image.length,"image": URL.createObjectURL(e.target.files[i])}])
            }
        }
    }
    function PreviewVideo(e:any){
        const uploadedFile = e.target.files[0]
        const extension = uploadedFile.name.split('.').pop()
        const allowedExtensions = ["mp4", "mpeg4"]
        let isAllowed=false
        for (let i=0; i<allowedExtensions.length; i++){
            if (extension===allowedExtensions[i]) {isAllowed=true; break}
        }
        if (isAllowed) {
           if (e.target.files.length > 0){
            for (let i = 0; i < e.target.files.length; i++) {
                setVideo([{"imageId": video.length,"image": URL.createObjectURL(e.target.files[i])}])
            }
        } 
        } else {
            return alert(`Error: Invalid extension`)
        }
        
    }
    function PreviewAudio(e:any){
        const uploadedFile = e.target.files[0]
        const extension = uploadedFile.name.split('.').pop()
        const allowedExtensions = ["mp3", "wav"]
        let isAllowed=false
        for (let i=0; i<allowedExtensions.length; i++){
            if (extension===allowedExtensions[i]) {isAllowed=true; break}
        }
        if (isAllowed) {
           if (e.target.files.length > 0){
            for (let i = 0; i < e.target.files.length; i++) {
                if (i+audio.length >2){
                    return alert('Maximum of 3 audio files!')
                }
                setAudio(audio => [...audio, {"imageId": audio.length,"image": URL.createObjectURL(e.target.files[i])}])
            }
        } 
        } else {
            return alert(`Error: Invalid extension`)
        }
        
    }

    useEffect(()=>{
        if (image.length>0) {document.getElementById("q-image")?.setAttribute('value', image[0]["image"])}
        else {
            let inp = document.getElementById("q-image") as HTMLInputElement
            inp.value = ''
        }
    },[image])
    useEffect(()=>{
        if (video.length>0) {document.getElementById("q-video")?.setAttribute('value', video[0]["image"])}
        else {
            let inp = document.getElementById("q-video") as HTMLInputElement
            inp.value = ''
        }
    },[video])
    useEffect(()=>{
        if (audio.length>0) {document.getElementById("q-audio")?.setAttribute('value', audio[0]["image"])}
        else {
            let inp = document.getElementById("q-audio") as HTMLInputElement
            inp.value = ''
        }
    },[audio])

    const ninja = useCallback(()=> {
        if (question !== "" && options.length !== 0) {
             setQuestionArray([...questionArray, {"question": question, "Options": options, "id":questionArray.length, "typeofQ": answerType, "qImage": image, "qVideo": video, "qAudio":audio}])
             setOptions([])
             setQuestion("")
             setImages([])
             setVideo([])
             setAudio([])
        }
           }, [questionArray,question, options, answerType, image, video, audio])

     const ninja1 = useCallback(()=> {
        if (question !== "" && answerType === 'uin') {
            setOptions([])
             setQuestionArray([...questionArray, {"question": question, "Options": options, "id":questionArray.length, "typeofQ": answerType, "qImage": image, "qVideo": video, "qAudio":audio}])
             setQuestion("")
             setImages([])
             setVideo([])
             setAudio([])
        }
        if (question !== "" && answerType === 'tof') {
            setOptions([])
             setQuestionArray([...questionArray, {"question": question, "Options": optionsBool, "id":questionArray.length, "typeofQ": answerType, "qImage": image, "qVideo": video, "qAudio":audio}])
             setQuestion("")
             setImages([])
             setVideo([])
             setAudio([])
             setOptionsBool([])
        }
           }, [questionArray,question, answerType, image, video, audio])

  return (
    <div className="create">
        <div className="create-new-001">
            <h3 className='my-4'>Create new survey</h3>
            <div className="create-ss-box">
                <form>
                    <div className="create-s-b-item">
                        <p>Title:</p>
                    <input type="text" placeholder='Survey title' value={surveyTitle} onChange={(e)=> {setSurveyTitle(e.target.value)}}/>
                    </div>
                    <div className="create-s-b-item">
                        <p>Budget:</p>
                    <input type="text" placeholder='Survey Budget' value={surveyBudget} onChange={(ev)=> {
                        let arr = ["1","2", "3", "4", "5", "6", "7", "8", "9", "0"] 
                        for (let i=0; i<arr.length; i++) {
                            if (ev.nativeEvent.data === arr[i]) {
                                setSurveyBudget(ev.target.value)
                                break
                            }
                            }
                        if (ev.nativeEvent.data === null) {setSurveyBudget(surveyBudget.slice(0, surveyBudget.length-1))}
                    }}/>
                    </div>
                    <div className="create-question-box">
                        <div className="question-box--name">
                            <div className="u-kn-mflexer my-4">
                                <p className='font-bold'>Question: </p>
                                <textarea name="question-text px-4" id="-box-text" cols={50} rows={3} placeholder='Enter your question here'
                                 value={question}
                                 className="pos-rel"
                                  onChange={(e)=> {
                                    setQuestion(e.target.value)
                                  }}
                                ></textarea>
                            </div>
                            <div className="files-add-001">
                                <input type="file" name='attachment-image' aria-hidden='true' className='hiddenV' id='q-image' multiple={true} onChange={(e)=>{
                                    PreviewImage(e)
                                }} />
                                <input type="file" name='attachment-video' aria-hidden='true' className='hiddenV' id='q-video' multiple={false} onChange={(e)=>{
                                    PreviewVideo(e)
                                }} />
                                <input type="file" name='attachment-audio' aria-hidden='true' className='hiddenV' id='q-audio' multiple={true} onChange={(e)=>{
                                    PreviewAudio(e)
                                }} />
                            <div className="bg-mann">
                                <p onClick={()=> {
                                    document.getElementById('q-image')?.click()
                                    }}><BsCardImage/></p>
                                <span>Upload Image</span>
                            </div>
                            <div className="bg-mann">
                            <p onClick={()=>{document.getElementById('q-video')?.click()}}><BsFillCameraVideoFill/></p>
                            <span>Upload Video</span>
                            </div>
                            <div className="bg-mann">
                            <p onClick={()=>{document.getElementById('q-audio')?.click()}}><AiFillAudio/></p>
                            <span>Upload Audio</span>
                            </div>
                            </div>
                        <div className="image-section-que my-5 flex gap-3" id='image-section-que'>
                            {
                                image.map(img => (
                                    <div className="relative">
                                       <img src={img.image} alt={`${img.imageId}`} className='q-image-iden'/> 
                                       <p className='lov-112' onClick={()=>{handleDelete(img.imageId)}}><FaTimes/></p>
                                    </div>
                                ))
                            }
                            {
                                video.map(img => (
                                    <div className="relative">
                                       <video src={img.image} className='q-image-iden' id='q-video-iden'/> 
                                       <p className='lov-112' onClick={()=>{handleDeleteV(img.imageId)}}><FaTimes/></p>
                                    </div>
                                ))
                            }
                            {
                                audio.map(img => (
                                    <div className="relative p-1 nk-w4">
                                       <audio controls id='q-audio-iden'>
                                            <source src={img.image}/>
                                         </audio>
                                       <p className='lov-112' onClick={()=>{handleDeleteA(img.imageId)}}><FaTimes/></p>
                                    </div>
                                ))
                            }
                        </div>
                        </div>
                        <div className="create-qbox-type">
                            <h4 className='font-bold'>Answer type : </h4>
                            <dl className='flex gap-4 some-wr11'>
                                <p className={`${answerType==='tof' ? 'fin22': ''}`} onClick={()=> {setAnswerType('tof')}}>True/ False</p>
                                <p  className={`${answerType==='radio' ? 'fin22': ''}`} onClick={()=> {setAnswerType('radio'); setRadio(true)}}>Radio choices</p>
                                <p className={`${answerType==='multiple' ? 'fin22': ''}`} onClick={()=> {setAnswerType('multiple')}}>Multiple choices</p>
                                <p className={`${answerType==='uin' ? 'fin22': ''}`} onClick={()=> {setAnswerType('uin')}}>User input</p>
                            </dl>
                        </div>        
                        <div className="answer-0032">
                            {answerType==='tof' && (
                                <BooleanAnswer arr={optionsBool} setArr={setOptionsBool}/>
                            )}
                            {answerType === 'radio' && (
                               <>
                               <h4 className='font-bold'>Maximum of 5 options per question</h4>
                               <dl className='flex items-center gap-4 my-4 resp-101'>
                                    <div className='flex items-center gap-4 my-4 floki'>
                                   <p className='font-bold pla'>Option {options.length+1}:</p>
                                   <input type="text" placeholder='Option text goes here' className='gen-input' value={renderOption} onChange={(e)=> {setRenderOption(e.target.value)}}/>
                               </div> 
                               <div className="more-032-q">
                                   <p className='flex items-center gap-4 cursor-pointer' onClick={
                                       ()=> {
                                        if (options.length < 5) {
                                            let done = true
                                           for (let i=0; i<options.length; i++) {
                                           if (options[i]['question'].toLowerCase().trim() !== renderOption.toLowerCase().trim()) {}
                                           else {done=false; break} 
                                       }
                                       if (done) {setOptions([...options, {"question" : renderOption, "id": options.length}])}
                                        setRenderOption("")
                                        }
                                       }
                                   }><FaPlus/>Add option</p>
                               </div>
                               </dl>
                               {
                                    options.map(items =>(
                                   <RadioAnswer radio={radio} title="Radio Options" displayedOptions={items.question} options={renderOption} setter={setRenderOption} optionArray={options} setoptionArray={setOptions} id={items.id} key={items.id}/> 
                                   ))
                               }
                               </> 
                            )}
                            {answerType === 'multiple' && (
                                <>
                                <h4 className='font-bold'>Maximum of 5 options per question</h4>
                                <dl className='flex items-center gap-4 my-4'>
                                    <div className='flex items-center gap-4 my-4'>
                                        <p className='font-bold'>Option {options.length+1}:</p>
                                        <input type="text" placeholder='Option text goes here' className='gen-input' value={renderOption} onChange={(e)=> {setRenderOption(e.target.value)}}/>
                                    </div> 
                                    <div className="more-032-q">
                                        <p className='flex items-center gap-4' onClick={
                                            ()=> {
                                                if (options.length<5) {
                                                    let done = true
                                                for (let i=0; i<options.length; i++) {
                                                if (options[i]['question'].toLowerCase().trim() !== renderOption.toLowerCase().trim()) {}
                                                else {done=false; break} 
                                            }
                                            if (done) {setOptions([...options, {"question" : renderOption, "id": options.length}])}
                                            setRenderOption("")
                                                }
                                            }
                                            }><FaPlus/>Add option</p>
                                </div>
                                </dl>
                                
                                {
                                     options.map(items =>(
                                    <RadioAnswer radio={radio} title="CheckBox Options" displayedOptions={items.question} options={renderOption} setter={setRenderOption} optionArray={options} setoptionArray={setOptions} id={items.id} key={items.id}/> 
                                    ))
                                }
                                    
                                </>
                            )}
                            {answerType === 'uin' && (
                                <div className="define-umax-11">
                                <div className='ctn-items-define-umax'>
                                    <p>Minimum amount of words : </p>
                                <input type="text" className='gen-input' placeholder='Minimum number of words'/>
                                </div>
                                <div className='ctn-items-define-umax'>
                                    <p>Maximum amount of words : </p>
                                <input type="text" className='gen-input' placeholder='Maximum number of words'/>
                                </div>
                            </div>
                            )}
                            
                        </div>                
                    </div>
                    <button className='q-ader-01' onClick={(e)=> {
                        console.log(questionArray)
                        e.preventDefault()
                        if (answerType === 'radio' || answerType === 'multiple') {
                            ninja()
                        }
                        else if (answerType==='uin' || answerType === 'tof') {
                            ninja1()
                        }

                    }}><FaPlus/> Add Question</button>
                      <div className="view-question-prev">
                        <h3 className='my-6'>Preview Questions</h3>

                        <div className="prev-11-q">
                            {
                                questionArray.map(items=> (
                                    <PreviewQ quest={items.question} arr1={items.Options} type={answerType} id_={items.id} arr={questionArray} setArr={setMe}/>
                                ))
                            }
                        </div>
                        </div>      
                    <div className="float-right-001 flex gap-4 justify-end m-4">
                        <button className='q-ader-01'>Save</button>
                        <button className='q-ader-01'>Publish</button>
                    </div>
                </form>
            </div>
        </div>
        <div className="edit-old-002">
            <h3>Edit existing survey</h3>
        </div>
    </div>
  )
}

export default Create