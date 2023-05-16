import React, {useEffect, useState, useCallback} from 'react'
import {FaPlus, FaTimes} from 'react-icons/fa'
import {BsCardImage,BsFillCameraVideoFill} from 'react-icons/bs'
import {AiFillAudio} from 'react-icons/ai'
import SomeCirc from './Create.tsx'


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

interface TpreviewQ {
    quest:string
    arr1:any
    arr:any
    setArr:any
    id_:any
    type:string
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
const PreviewQ = (inp:TpreviewQ)=> {
    const [state, setState] = useState(inp.quest)
    const [note, setNote] = useState("")
    const [imag, setImage] = useState(inp.arr[inp.id_].qImage)

    // useEffect(()=>{
    //     if (inp.arr[inp.id_].qImage.length>0) {document.getElementById("q-image1")?.setAttribute('value', inp.arr[inp.id_].qImage[0]["image"])}
    //     else {
    //         let inpe = document.getElementById("q-image1") as HTMLInputElement
    //         inpe.value = ''
    //     }
    //     console.log("HI")
    // },[inp.arr])

    function PreviewImage1(e:any){
        if (e.target.files.length > 0){
            for (let i = 0; i < e.target.files.length; i++) {
                 if (i+inp.arr[inp.id_].qImage.length >4){
                    return alert('Maximum of 5 photos!')
                }
                inp.arr[inp.id_].qImage.push({"imageId": inp.arr[inp.id_].qImage.length,"image": URL.createObjectURL(e.target.files[i])})
                let newArr = inp.arr[inp.id_].qImage
                setImage(newArr)
                console.log(newArr)
                inp.setArr(inp.arr)
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
                inp.arr[inp.id_].qVideo.push({"imageId": inp.arr[inp.id_].qVideo.length,"image": URL.createObjectURL(e.target.files[i])})
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
                if (i+inp.arr[inp.id_].qAudio.length >2){
                    return alert('Maximum of 3 audio files!')
                }
                inp.arr[inp.id_].qAudio.push({"imageId": inp.arr[inp.id_].qAudio.length,"image": URL.createObjectURL(e.target.files[i])})
            }
        } 
        } else {
            return alert(`Error: Invalid extension`)
        }
        
    }

    function handleDelete1(index:number) {
        const newItems = [...inp.arr[inp.id_].qImage]
        newItems.splice(index, 1)
        for (let i=0; i<newItems.length; i++) {
            newItems[i]["imageId"] = i
        }
        inp.arr[inp.id_].qImage = newItems
        // setIm(inp.arr[inp.id_].qImage)
    }
    function handleDeleteA1(index:number) {
        const newItems = [...inp.arr[inp.id_].qAudio]
        newItems.splice(index, 1)
        for (let i=0; i<newItems.length; i++) {
            newItems[i]["imageId"] = i
        }
        inp.arr[inp.id_].qAudio = newItems
    }
    function handleDeleteV1(index:number) {
        inp.arr[inp.id_].qVideo = []
    }

    return (
        <div className="prev-11-q-item my-8">
            <div className="prev-11-w-1 flex gap-4" onClick={()=>{
            }}>
                <p className='font-bold'>{inp.id_+1}</p>
                <textarea name="prev-q-1" id="" cols={50} rows={3} value={state} onChange={
                    (e)=> {
                        setState(e.target.value)
                        inp.arr[inp.id_].question = e.target.value
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
                    imag.map((img:any) => (
                        <div className="relative" key={img.imageID}>
                            <img src={img.image} alt={`${img.imageId}`} className='q-image-iden'/> 
                            <p className='lov-112' onClick={()=>{handleDelete1(img.imageId)}}><FaTimes/></p>
                        </div>
                    ))
                }
                {
                    inp.arr[inp.id_].qVideo.map((img:any) => (
                        <div className="relative">
                            <video src={img.image} className='q-image-iden' id='q-video-iden'/> 
                            <p className='lov-112' onClick={()=>{handleDeleteV1(img.imageId)}}><FaTimes/></p>
                        </div>
                    ))
                }
                {
                    inp.arr[inp.id_].qAudio.map((img:any) => (
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
                inp.arr[inp.id_].typeofQ === 'uin' && (
                    <div className="pol-12">
                        <textarea name="op332" id="" cols={80} rows={2} placeholder='Enter your answer'></textarea>
                    </div>
                )
            }
            {
                inp.arr[inp.id_].typeofQ !== 'uin' && (
                    <div className="ans-pre">
                    {inp.arr1.map((item:any)=> (
                        <Individ opt={item.question} id={item.id} type={inp.type} setArr={setNote} mid={inp.id_} arr={note} qarr={inp.arr} setQ={inp.setArr}/>
                    ))}

            </div>
                )
            }
                
           
        </div>
    )
}
export default PreviewQ