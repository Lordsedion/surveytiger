import React, { useEffect, useState } from 'react'
import './load.css'

const Loading = () => {
    const [state, setState] = useState(new Date())
    const [sElement, setElement] = useState(document.querySelector('#loading-text'))
    const [value, setValue] = useState(0)

    const textName:string = '00000'
    
    useEffect(()=> {
        const element = document.querySelector('#loading-text') as HTMLElement;
        setElement(element)
        for (var i=0; i<textName.length; i++) {
            element.innerHTML += `<span id='sodiq-00${i}'>${textName[i]}</span>`
        }        
    }, [])
    useEffect(()=> {
        document.getElementById(`sodiq-00${value}`)?.classList.add('color-primary', 'wave-1-up')
        if (value !== 0) {
            document.getElementById(`sodiq-00${value-1}`)?.classList.remove('wave-1-up')
        }

        if (value < textName.length) {setValue(prev => prev+1)}
        else {setValue(0)}
        setTimeout(() => {setState(new Date())}, 220) 
        if (value == textName.length) {
            for (var i=0; i<textName.length; i++) {
            document.getElementById(`sodiq-00${i}`)?.classList.remove('color-primary', 'wave-1-up')
            }
        }
    }, [state])
    

  return (
    <div className="loading">
        <h1 className='loading-text mx-' id='loading-text'></h1>
    </div>
  )
}

export default Loading