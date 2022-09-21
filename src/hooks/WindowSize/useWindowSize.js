/**
 * @Description custom useWindowSize hook
 * @author Shy
 * @date 20.08.2022
*/

import { useState } from 'react'
import { useEventListener } from '../index'

export const useWindowSize = () =>{
    // Initialize state with undefined width/height so server and client renders match
    //
    const [windowSize, setWindowSize] = useState({
        screenWidth: undefined | window.innerWidth,
        screenHeight: undefined | window.innerHeight,
        bodyWidth: undefined | document.body.clientWidth,
        bodyHeight: undefined |  document.body.clientHeight,
    })
    
    useEventListener("resize",()=>
        setWindowSize(prevState => ({
            ...prevState,
            screenWidth: window.innerWidth,
            screenHeight: window.innerHeight,
            bodyWidth: document.body.clientWidth,
            bodyHeight: document.body.clientHeight,
        })), window)
    
    return windowSize
}
    

