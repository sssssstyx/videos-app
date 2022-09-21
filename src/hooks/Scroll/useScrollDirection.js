/**
 * @Description custom useScrollDirection Hook
 * @author Shy
 * @date 23.08.2022
*/

import { useState } from 'react'
import { useScrollPosition, usePrevState, useEventListener } from '../index'

export const useScrollDirection = () => {
    const { scrollX, scrollY } = useScrollPosition()
    const [directionX, setDirectionX] = useState(undefined)   // scroll direction descriptions
    const [directionY, setDirectionY] = useState(undefined)
    
    const prevX = usePrevState(scrollX)    // get last data to compare up or down
    const prevY = usePrevState(scrollY)
    
    useEventListener("scroll",() => {
        setDirectionX(scrollX > prevX ? "right": "left")
        setDirectionY(scrollY > prevY ? "down": "up")
    }, window)
    
    return {
        directionX, directionY
    }
}
    /*
     const updateDirection = () =>{      // scroll direction configuration according to a previous position
     setDirectionX(scrollX > prevX ? "right": "left")
     setDirectionY(scrollY > prevY ? "down": "up")
     }
     useEffect(()=>{
        window.addEventListener("scroll", updateDirection)           // add event listener for 'scroll'
        return () => window.removeEventListener("scroll", updateDirection)
    }, [scrollX, scrollY])           // according to the 'scroll' positions, to listen every 'scroll' event
    */
    
