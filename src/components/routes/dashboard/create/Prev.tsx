import React, {useEffect, useState, useCallback, useContext} from 'react'
import {FaPlus, FaTimes} from 'react-icons/fa'
import {BsCardImage,BsFillCameraVideoFill} from 'react-icons/bs'
import {AiFillAudio} from 'react-icons/ai'
import SomeCirc from './Create.tsx'
import { QuestionContext } from './Create.tsx'


const Individ = (inp:Tindiv)=> {
    const useCont = useContext(QuestionContext)
    const id_ = inp.id
    const id = inp.mid
    const [state1, setState1] = useState(inp.opt)
    const questionArray= useCont?.questionArray!

    return (
        <>
            <div className='my-3 font-bold flex items-center gap-2' key={id_}>
                <SomeCirc/><input type='text' value={state1} onChange={
                (e)=> {
                    setState1(e.target.value)
                    const newArray = [...questionArray]
                    newArray[id].Options[id_] = e.target.value
                    inp.setArr(newArray)
            }}/></div>
        </>
    )
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
const PreviewQ = (inp:pType)=> {
    const useCont = useContext(QuestionContext)
    const id_ = inp.id_
    // const [answerType, surveyTitle] = [useCont?.answerType, useCont?.surveyTitle]
    const questionArray= useCont?.questionArray!
    const setQuestionArray= useCont?.setQuestionArray!

    const [state, setState] = useState(questionArray[id_].question)
    const [image, setImage] = useState(questionArray[id_].qImage)
    const [video, setVideo] = useState(questionArray[id_].qVideo)
    const [audio, setAudio] = useState(questionArray[id_].qAudio)
    const options = questionArray[id_].Options

    useEffect(()=>{
        if (image.length>0) {document.getElementById("q-image1")?.setAttribute('value', image[0]["image"])}
        else {
            let inpe = document.getElementById("q-image1") as HTMLInputElement
            inpe.value = ''
        }
        console.log("HI", questionArray, options)
    },[questionArray])

    function PreviewImage1(e:any){
        if (e.target.files.length > 0){
            for (let i = 0; i < e.target.files.length; i++) {
                 if (i+image.length >4){
                    return alert('Maximum of 5 photos!')
                }
                setImage([...image,{ "imageId": image.length,"image": URL.createObjectURL(e.target.files[i])}])
                const newArray = [...questionArray]
                newArray[id_].qImage = image
                setQuestionArray(newArray)
            }
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
                setVideo([...video,{ "imageId": video.length,"image": URL.createObjectURL(e.target.files[i])}])
                const newArray = [...questionArray]
                newArray[id_].qVideo = video
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
                setAudio([...image,{ "imageId": video.length,"image": URL.createObjectURL(e.target.files[i])}])
                const newArray = [...questionArray]
                newArray[id_].qAudio = audio
                setQuestionArray(newArray)
            }
        } 
        } else {
            return alert(`Error: Invalid extension`)
        }
        
    }

    function handleDelete1(index:number) {
        const newItems = [...image]
        newItems.splice(index, 1)
        for (let i=0; i<newItems.length; i++) {
            newItems[i]["imageId"] = i
        }
        const newArray = [...questionArray]
        newArray[id_].qImage = newItems
        setImage(newItems)
        setQuestionArray(newArray)
    }
    function handleDeleteA1(index:number) {
        const newItems = [...audio]
        newItems.splice(index, 1)
        for (let i=0; i<newItems.length; i++) {
            newItems[i]["imageId"] = i
        }
        const newArray = [...questionArray]
        newArray[id_].qAudio = newItems
        setAudio(newItems)
        setQuestionArray(newArray)
    }
    function handleDeleteV1(index:number) {
        setVideo([])
    }

    return (
        <div className="prev-11-q-item my-8">
            <div className="prev-11-w-1 flex gap-4" onClick={()=>{
            }}>
                <p className='font-bold'>{id_+1}</p>
                <textarea name="prev-q-1" id="" cols={50} rows={3} value={state} onChange={
                    (e)=> {
                        setState(e.target.value)
                        const newArray = [...questionArray]
                        newArray[id_].question = e.target.value
                        setQuestionArray(newArray)
                    }
                }></textarea>
            </div>
            <div className="some-image-102">
                <div className="files-add-001">
                    <input type="file" name='attachment-image' aria-hidden='true' className='hiddenV' id='q-image1' multiple={true} onChange={(e)=>{
                       PreviewImage1(e)                       
                    }} />
                    <input type="file" name='attachment-video' aria-hidden='true' className='hiddenV' id='q-video' multiple={false} onChange={(e)=>{
                        PreviewVideo1(e)
                    }} />
                    <input type="file" name='attachment-audio' aria-hidden='true' className='hiddenV' id='q-audio' multiple={true} onChange={(e)=>{
                        PreviewAudio1(e)
                    }} />
                <div className="bg-mann">
                    <p onClick={()=> {
                        document.getElementById('q-image1')?.click()
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
            </div>
            <div className="image-section-que my-5 mx-8 flex gap-3" id='image-section-que'>
                {
                    image.map((img:any) => (
                        <div className="relative" key={img.imageID}>
                            <img src={img.image} alt={`${img.imageId}`} className='q-image-iden'/> 
                            <p className='lov-112' onClick={()=>{handleDelete1(img.imageId)}}><FaTimes/></p>
                        </div>
                    ))
                }
                {
                    video.map((img:any) => (
                        <div className="relative">
                            <video src={img.image} className='q-image-iden' id='q-video-iden'/> 
                            <p className='lov-112' onClick={()=>{handleDeleteV1(img.imageId)}}><FaTimes/></p>
                        </div>
                    ))
                }
                {
                    audio.map((img:any) => (
                        <div className="relative p-1 nk-w4">
                            <audio controls id='q-audio-iden'>
                                <source src={img.image}/>
                                </audio>
                            <p className='lov-112' onClick={()=>{handleDeleteA1(img.imageId)}}><FaTimes/></p>
                        </div>
                    ))
                }
            </div>
            {
                questionArray[id_].typeofQ === 'uin' && (
                    <div className="pol-12">
                        <textarea name="op332" id="" cols={80} rows={2} placeholder='Enter your answer'></textarea>
                    </div>
                )
            }
            {
                questionArray[id_].typeofQ !== 'uin' && (
                    <div className="ans-pre">
                    {options.map((item:any)=> (
                        <Individ opt={item.question} id={item.id} setArr={setQuestionArray} type={questionArray[id_].typeofQ} mid={id_}/>
                    ))}

            </div>
                )
            }
                
           
        </div>
    )
}
export default PreviewQ