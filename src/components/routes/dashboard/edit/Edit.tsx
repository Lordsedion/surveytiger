import React, {useEffect, useState, useCallback, createContext, useContext} from 'react'
import {FaPlus, FaTimes} from 'react-icons/fa'
import {BsCardImage,BsFillCameraVideoFill} from 'react-icons/bs'
import {AiFillAudio} from 'react-icons/ai'
import '../create/create.css'

export const QuestionContext = createContext<MyContextValueType | undefined>(undefined);


// ===================================INTERFACE==================================
type MyContextValueType = {
    image:imType[]
    video:imType[]
    audio:imType[]
    answerType:string
    question:string
    renderOption:string
    options:optionsType[]
    optionsBool:optionsType[]
    questionArray:questionArrayType[]
    userInp:optionsType[]
    peace:boolean
    
    setUserInp:React.Dispatch<React.SetStateAction<optionsType[]>>
    setImages:React.Dispatch<React.SetStateAction<imType[]>>
    setVideo:React.Dispatch<React.SetStateAction<imType[]>>
    setAudio:React.Dispatch<React.SetStateAction<imType[]>>
    setOptions:React.Dispatch<React.SetStateAction<optionsType[]>>
    setOptionsBool:React.Dispatch<React.SetStateAction<optionsType[]>>
    setQuestionArray:React.Dispatch<React.SetStateAction<questionArrayType[]>>
    setAnswerType:(value:string)=>void
    setQuestion:(value:string)=>void
    setRenderOption:(value:string)=>void
    setPeace:(value:boolean)=>void
};
interface forPrintQ {
    someText:string
    someId:number
    someArray:any
    setSArray:any
}
interface Tindiv {
    opt:string
    id:number
    setArr:any
    mid:number
    type:string
}
interface pType{
    id_:number
}
interface booleanType {
    arr:any
    setArr:any
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
interface booleanType {
    arr:any
    setArr:any
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
    qImage:any
    qVideo:any
    qAudio:any
}
interface thisType {
    id_:number
}
interface surveyType {
    title: string
    questArray: any
    budget: string
    paid: boolean
    isPublished: boolean
}
interface delModalType {
    title:string
    bool: boolean
    someFunc: any
    id:number
}
// =====================================INTERFACE ENDS=============================================

const SomeCirc = ()=> {
    return (
        <p className='q-outline-c'></p>
    )
}
export const SomeFilledCirc = ()=> {
    return (
        <>
            <p className='q-outline-c'></p>
            <div className='q-fill-c flex items-center justify-center'>
                <p className='the-in-w11'></p>
            </div>
        </>
    )
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
const Individ = (inp:Tindiv)=> {
    const useCont = useContext(QuestionContext)
    const id_ = inp.id
    const id = inp.mid
    const [state1, setState1] = useState(inp.opt)
    const questionArray= useCont?.questionArray!
    const [userInp, setUserInp] = [useCont?.userInp!, useCont?.setUserInp!]

    return (
        <>
            <div className='my-3 font-bold flex items-center gap-2' key={id_}>
                {inp.type === "uin" && id_== 0 && (
                    <>
                    <p>Minimum</p>
                    <input type="text" className='gen-input' placeholder='Minimum number of words' value={state1}
                        onChange={(ev)=>{
                            let arr = ["1","2", "3", "4", "5", "6", "7", "8", "9", "0"] 
                            const nativeEventData = (ev.nativeEvent as any).data;
                            for (let i=0; i<arr.length; i++) {
                            
                                if (nativeEventData === arr[i]) {
                                    const newArray = [...questionArray]
                                    if (Number(ev.target.value) <= 25) {
                                        newArray[id].Options[id_].question = ev.target.value
                                        inp.setArr(newArray)
                                    }
                                    else {
                                        alert("Omo, guy na 25 be the max")
                                    } break
                                }
                                }
                            if (nativeEventData === null) {
                                const newArray = [...questionArray]
                                newArray[id].Options[id_].question = newArray[id].Options[id_].question.slice(0, newArray[id].Options[id_].question.length-1)
                                inp.setArr(newArray)
                            }
                        }}/>
                    </>
                )}
                {inp.type === "uin" && id_== 1 && (
                   <>
                   <p>Maximum</p>
                   <input type="text" className='gen-input' placeholder='Minimum number of words' value={state1}
                        onChange={(ev)=>{
                            let arr = ["1","2", "3", "4", "5", "6", "7", "8", "9", "0"] 
                            const nativeEventData = (ev.nativeEvent as any).data;
                            for (let i=0; i<arr.length; i++) {
                            
                                if (nativeEventData === arr[i]) {
                                    const newArray = [...questionArray]
                                    if (Number(ev.target.value) <= 50) {
                                        newArray[id].Options[id_].question = ev.target.value
                                        inp.setArr(newArray)
                                    }
                                    else {
                                        alert("Omo, guy na 50 be the max")
                                    } break
                                }
                                }
                            if (nativeEventData === null) {
                                const newArray = [...questionArray]
                                newArray[id].Options[id_].question = newArray[id].Options[id_].question.slice(0, newArray[id].Options[id_].question.length-1)
                                inp.setArr(newArray)
                            }
                        }}/>
                   </>
                )}
                {inp.type !== "uin" && (
                    <>
                    <SomeCirc/>
                   <input type='text' value={state1} onChange={
                        (e)=> {
                            setState1(e.target.value)
                            const newArray = [...questionArray]
                            newArray[id].Options[id_].question = e.target.value
                            inp.setArr(newArray)
                    }}/>
                    </>
                )}   
            </div>
        </>
    )
}
const PreviewQ = (inp:pType)=> {
    const useCont = useContext(QuestionContext)
    const id_ = inp.id_
    const questionArray= useCont?.questionArray!
    const setQuestionArray= useCont?.setQuestionArray!

    useEffect(()=>{
        if (questionArray[id_].qImage.length>0) {document.getElementById(`q-image${id_}`)?.setAttribute('value', questionArray[id_].qImage[0]["image"])}
        else {
            let inpe = document.getElementById(`q-image${id_}`) as HTMLInputElement
            if (inpe){
                inpe.value = ''
            }
        }
    },[questionArray[id_].qImage])

    useEffect(()=>{
        if (questionArray[id_].qVideo.length>0) {document.getElementById(`q-video${id_}`)?.setAttribute('value', questionArray[id_].qVideo[0]["image"])}
        else {
            let inpe = document.getElementById(`q-video${id_}`) as HTMLInputElement
            if (inpe){
                inpe.value = ''
            }
        }
    },[questionArray[id_].qAudio])

    useEffect(()=>{
        if (questionArray[id_].qAudio.length>0) {document.getElementById(`q-audio${id_}`)?.setAttribute('value', questionArray[id_].qAudio[0]["image"])}
        else {
            let inpe = document.getElementById(`q-audio${id_}`) as HTMLInputElement
            if (inpe){
                inpe.value = ''
            }
        }
    },[questionArray[id_].qAudio])

    function PreviewImage1(e:any){
        const newArray = [...questionArray]
        if (e.target.files.length > 0){
            for (let i = 0; i < e.target.files.length; i++) {
                 if (i+questionArray[id_].qImage.length >4){
                    return alert('Maximum of 5 photos!')
                }
                newArray[id_].qImage.push({"imageId": questionArray[id_].qImage.length, "image": URL.createObjectURL(e.target.files[i])})
            }
            console.log(newArray)
            setQuestionArray(newArray)
        }
    }
    function PreviewVideo1(e:any){
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
                const newArray = [...questionArray]
                newArray[id_].qVideo.push({"imageId": questionArray[id_].qVideo.length, "image": URL.createObjectURL(e.target.files[i])})
                setQuestionArray(newArray)
            }
        } 
        } else {
            return alert(`Error: Invalid extension`)
        }
        
    }
    function PreviewAudio1(e:any){
        const uploadedFile = e.target.files[0]
        const extension = uploadedFile.name.split('.').pop()
        const allowedExtensions = ["mp3", "wav"]
        const newArray = [...questionArray]
        let isAllowed=false
        for (let i=0; i<allowedExtensions.length; i++){
            if (extension===allowedExtensions[i]) {isAllowed=true; break}
        }
        if (isAllowed) {
           if (e.target.files.length > 0){
            for (let i = 0; i < e.target.files.length; i++) {
                if (i+questionArray[id_].qAudio.length >2){
                    return alert('Maximum of 3 audio files!')
                }
                newArray[id_].qAudio.push({"imageId": questionArray[id_].qAudio.length, "image": URL.createObjectURL(e.target.files[i])})
            }
            setQuestionArray(newArray)
        } 
        } else {
            return alert(`Error: Invalid extension`)
        }
        
    }

    function handleDelete1(index:number) {
        const newArray = [...questionArray]
        newArray[id_].qImage.splice(index, 1)
        for (let i=0; i<newArray[id_].qImage.length; i++) {
            newArray[id_].qImage[i]["imageId"] = i
        }
        setQuestionArray(newArray)
    }
    function handleDeleteA1(index:number) {
        const newArray = [...questionArray]
        newArray[id_].qAudio.splice(index, 1)
        for (let i=0; i<newArray[id_].qAudio.length; i++) {
            newArray[id_].qAudio[i]["imageId"] = i
        }
        setQuestionArray(newArray)
    }
    function handleDeleteV1(index:number) {
        const newArray = [...questionArray]
        newArray[id_].qVideo.splice(index, 1)
        for (let i=0; i<newArray[id_].qVideo.length; i++) {
            newArray[id_].qVideo[i]["imageId"] = i
        }
        setQuestionArray(newArray)
    }

    return (
        <div className="prev-11-q-item my-8">
            <div className="prev-11-w-1 flex gap-4">
                <p className='font-bold'>{id_+1}</p>
                <textarea name="prev-q-1" id="" cols={50} rows={3} value={questionArray[id_].question}
             onChange={
                    (e)=> {
                        const newArray = [...questionArray]
                        newArray[id_].question = e.target.value
                        setQuestionArray(newArray)
                    }
                }></textarea>
            </div>
            <div className="some-image-102">
                <div className="files-add-001">
                    <input type="file" name='attachment-image' aria-hidden='true' className='hiddenV' id={`q-image${id_}`} multiple={true} onChange={(e)=>{
                       PreviewImage1(e)                       
                    }} />
                    <input type="file" name='attachment-video' aria-hidden='true' className='hiddenV' id={`q-video${id_}`} multiple={false} onChange={(e)=>{
                        PreviewVideo1(e)
                    }} />
                    <input type="file" name='attachment-audio' aria-hidden='true' className='hiddenV' id={`q-video${id_}`} multiple={true} onChange={(e)=>{
                        PreviewAudio1(e)
                    }} />
                <div className="bg-mann">
                    <p onClick={()=> {
                        document.getElementById(`q-image${id_}`)?.click()
                        }}><BsCardImage/></p>
                    <span>Upload Image</span>
                    </div>
                    <div className="bg-mann">
                    <p onClick={()=>{document.getElementById(`q-video${id_}`)?.click()}}><BsFillCameraVideoFill/></p>
                    <span>Upload Video</span>
                    </div>
                    <div className="bg-mann">
                    <p onClick={()=>{document.getElementById(`q-audio${id_}`)?.click()}}><AiFillAudio/></p>
                    <span>Upload Audio</span>
                    </div>
                    </div>
            </div>
            <div className="image-section-que my-5 mx-8 flex gap-3" id='image-section-que'>
                {
                    questionArray[id_].qImage.map((img:any) => (
                        <div className="relative" key={img.imageID}>
                            <img src={img.image} alt={`${img.imageId}`} className='q-image-iden'/> 
                            <p className='lov-112' onClick={()=>{handleDelete1(img.imageId)}}><FaTimes/></p>
                        </div>
                    ))
                }
                {
                    questionArray[id_].qVideo.map((img:any) => (
                        <div className="relative">
                            <video src={img.image} className='q-image-iden' id='q-video-iden'/> 
                            <p className='lov-112' onClick={()=>{handleDeleteV1(img.imageId)}}><FaTimes/></p>
                        </div>
                    ))
                }
                {
                    questionArray[id_].qAudio.map((img:any) => (
                        <div className="relative p-1 nk-w4">
                            <audio controls id='q-audio-iden'>
                                <source src={img.image}/>
                                </audio>
                            <p className='lov-112' onClick={()=>{handleDeleteA1(img.imageId)}}><FaTimes/></p>
                        </div>
                    ))
                }
            </div>
            <div className="ans-pre">
                {questionArray[id_].Options.map((item:any)=> (
                    <Individ opt={item.question} id={item.id} setArr={setQuestionArray} type={questionArray[id_].typeofQ} mid={id_} key={item.id}/>
                ))}
            </div>
        </div>
    )
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
const BoolSmall = (inp:thisType)=> {
    const useCont = useContext(QuestionContext)
    const optionsBool = useCont?.optionsBool!
    const setOptionsBool = useCont?.setOptionsBool!
    const [stateS, setStateS] = useState(optionsBool[inp.id_].question)

    return (
        <li className='my-1 font-bold flex items-center gap-2'><SomeFilledCirc/><input type="text" value={stateS} onChange={
            (e)=>{
                const newArr =  [...optionsBool]
                newArr[inp.id_].question = e.target.value
                setStateS(e.target.value)
                setOptionsBool(newArr)
            }}/></li>
    )
}
 const BooleanAnswer = ()=> {
    const useCont = useContext(QuestionContext)
    const optionsBool = useCont?.optionsBool!
    const setOptionsBool = useCont?.setOptionsBool!

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

const ModalDelete = (inp:delModalType)=> {
    const [delYes, setDelYes] = useState(true)
    const useCont = useContext(QuestionContext)
    const [peace, setPeace] = [useCont?.peace!, useCont?.setPeace!]
    return (
        <div className="delete-modal">
            <div className='modal-inn-101'>
                <p>Are you sure you want to delete <span>{inp.title}</span></p>
            <div className="del-opt-101">
                <button className='h-lbu' onClick={(e)=> {
                    e.preventDefault()
                    const elly = document.querySelector(`#sss-${inp.id+1}`) as HTMLElement
                    setDelYes(false)
                    inp.someFunc(inp.id)
                    elly.style.display = 'none'
                    }}>Yes</button>
                <button className='h-red' onClick={(e)=> {
                    e.preventDefault()
                    const elly = document.querySelector(`#sss-${inp.id+1}`) as HTMLElement
                    elly.style.display = 'none'
                    setDelYes(false)}}>No</button>
            </div>
            </div>
        </div>
    )
}

let modal = document.getElementsByClassName('delete-modal');
window.onclick = function(event) {
    for (let i=0; i<modal.length; i++){
        const meddle = modal[i] as HTMLElement;
        if (event.target === modal[i]) {
            meddle.style.display = 'none'
    }  
    }
    
}

const Edit = () => {
    const [surveyArray, setSurveyArray] = useState<surveyType[]>([
        {
            title: "",
            budget:"",
            questArray:[],
            paid:false,
            isPublished:false
        }
    ]);
    const [peace, setPeace] = useState(false);
    const [image, setImages] = useState<imType[]>([]);
    const [video, setVideo] = useState<imType[]>([]);
    const [audio, setAudio] = useState<imType[]>([]);
    const [radio, setRadio] = useState(true);
    const [answerType, setAnswerType] = useState('radio');
    const [question, setQuestion]= useState("");
    const [renderOption, setRenderOption] = useState('');
    const [options, setOptions] = useState<optionsType[]>([]);
    const [userInp, setUserInp] = useState<optionsType[]>([
        { question: '10', id: 0 },
        { question: '50', id: 1 },
    ]);
    const [optionsBool, setOptionsBool] = useState<optionsType[]>([
        { question: 'True', id: 0 },
        { question: 'Indifferent', id: 1 },
        { question: 'False', id: 2 },
    ]);
    const [questionArray, setQuestionArray] = useState<questionArrayType[]>([])

    function deleteArray(index:number) {
        const newArr = [...questionArray];
        newArr.splice(index, 1)

        for (let i=0; i<newArr.length; i++) {
            newArr[i].id = i
        }
        setQuestionArray(newArr)        
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

    useEffect(()=> {
        const newArr = [...surveyArray]
        newArr[0].questArray = questionArray
        setSurveyArray(newArr)
    },[questionArray])

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
             setQuestionArray([...questionArray, {"question": question, "Options": userInp, "id":questionArray.length, "typeofQ": answerType, "qImage": image, "qVideo": video, "qAudio":audio}])
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
            //  setAnswerType("radio")
        }
        }, [questionArray,question, answerType, image, video, audio])

  return (
    <QuestionContext.Provider value={{image,  video,  audio, answerType, userInp, 
         question, renderOption, options, optionsBool, questionArray, peace,
         setImages,setVideo,setAudio,setOptions,setOptionsBool,setQuestionArray,setAnswerType,
         setQuestion, setRenderOption, setUserInp, setPeace}}
      >
        <div className="create">
            
        <div className="create-new-001">
            <h3 className='my-4'>Create new survey</h3>
            <div className="create-ss-box">
                <form>
                    <div className="create-s-b-item">
                        <p>Title:</p>
                    <input type="text" placeholder='Survey title' value={surveyArray[0].title} onChange={(e)=> {
                        const newArr = [...surveyArray]
                        newArr[0].title = e.target.value
                        setSurveyArray(newArr)
                    }}/>
                    </div>
                    <div className="create-s-b-item">
                        <p>Budget:</p>
                    <input type="text" placeholder='Survey Budget' value={surveyArray[0].budget} onChange={(ev: React.ChangeEvent<HTMLInputElement>)=> {
                        let arr = ["1","2", "3", "4", "5", "6", "7", "8", "9", "0"] 
                         const nativeEventData = (ev.nativeEvent as any).data;
                        for (let i=0; i<arr.length; i++) {
                            if (nativeEventData === arr[i]) {
                                const newArr = [...surveyArray]
                                newArr[0].budget = ev.target.value
                                setSurveyArray(newArr)
                                break
                            }
                            }
                        if (nativeEventData === null) {
                            const newArr = [...surveyArray]
                            const yu = ev.target.value
                            yu.slice(0, yu.length-1)
                            newArr[0].budget = yu
                            setSurveyArray(newArr)
                        }
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
                               <BooleanAnswer/>
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
                                            if (renderOption !== ""){
                                                for (let i=0; i<options.length; i++) {
                                                    if (options[i]['question'].toLowerCase().trim() !== renderOption.toLowerCase().trim()) {}
                                                    else {done=false; break} 
                                                }
                                                if (done) {setOptions([...options, {"question" : renderOption, "id": options.length}])}
                                                    setRenderOption("")
                                            }
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
                                <input type="text" className='gen-input' placeholder='Minimum number of words' value={userInp[0].question}
                                onChange={(ev)=>{
                                    let arr = ["1","2", "3", "4", "5", "6", "7", "8", "9", "0"] 
                                    const nativeEventData = (ev.nativeEvent as any).data;
                                    for (let i=0; i<arr.length; i++) {
                                    
                                        if (nativeEventData === arr[i]) {
                                            let newArr = [...userInp]
                                            newArr[0].question = ev.target.value
                                            if (Number(ev.target.value) <= 25) {
                                                setUserInp(newArr)
                                            }
                                            else {
                                                alert("Omo, guy na 25 be the max")
                                            } break
                                        }
                                        }
                                    if (nativeEventData === null) {
                                        let newArr = [...userInp]
                                        newArr[0].question = newArr[0].question.slice(0, newArr[0].question.length-1)
                                        setUserInp(newArr)
                                    }
                                }}/>
                                </div>
                                <div className='ctn-items-define-umax'>
                                    <p>Maximum amount of words : </p>
                                <input type="text" className='gen-input' placeholder='Maximum number of words' value={userInp[1].question}
                                onChange={(ev)=>{
                                    let arr = ["1","2", "3", "4", "5", "6", "7", "8", "9", "0"] 
                                    const nativeEventData = (ev.nativeEvent as any).data;
                                    for (let i=0; i<arr.length; i++) {
                                    
                                        if (nativeEventData === arr[i]) {
                                            let newArr = [...userInp]
                                            newArr[1].question = ev.target.value
                                            if (Number(ev.target.value) <= 50) {
                                                setUserInp(newArr)
                                            }
                                            else {
                                                alert("Omo, guy na 50 be the max")
                                            } break
                                        }
                                        }
                                    if (nativeEventData === null) {
                                        let newArr = [...userInp]
                                        newArr[1].question = newArr[1].question.slice(0, newArr[1].question.length-1)
                                        setUserInp(newArr)
                                    }
                                }}
                                />
                                </div>
                            </div>
                            )}
                        </div>                
                    </div>
                    <button className='q-ader-01' onClick={(e)=> {
                        e.preventDefault()
                        if (answerType === 'radio' || answerType === 'multiple') {
                            ninja()
                        }
                        else if (answerType==='uin' || answerType === 'tof') {
                            ninja1()
                        }
                    }}><FaPlus/> Add Question</button>
                    {
                        questionArray.length === 0 ?"" : (
                            <div className="view-question-prev">
                        <h3 className='my-6'>Preview Questions</h3>
                        <div className="prev-11-q" id="use-effect-strong-pass-you">
                            {
                                questionArray.map(items=> (
                                    <>
                                    <PreviewQ id_={items.id} key={items.id}/>
                                    <div className="delete-area-102">
                                        <button className="flex items-center px-4 py-3 justify-around"
                                            onClick={(e)=>{
                                                e.preventDefault()
                                                const elly = document.querySelector(`#sss-${items.id+1}`) as HTMLElement
                                                elly.style.display = 'block'
                                            }}
                                        >
                                            <FaTimes/>Delete</button>
                                       <div id={`sss-${items.id+1}`} className="p-none">
                                            <ModalDelete title={`Option ${items.id+1}`} bool={true} someFunc={deleteArray} id={items.id} key={items.id}/>
                                       </div>
                                    </div>
                                </>
                        ))
                            }
                        </div>
                        </div>  
                        )
                    }    
                    <div className="float-right-001 flex gap-4 justify-end m-4 ode-1">
                        <button className='q-ader-01'>Save</button>
                        <button className='q-ader-01'>Publish</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    </QuestionContext.Provider>
  )
}

export default Edit