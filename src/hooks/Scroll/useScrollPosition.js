/**
 * @Description custom useScrollPosition hook
 * @author Shy
 * @date 23.08.2022
 */

import { useState } from 'react'
import { useEventListener, usePrevState } from '../index'

export const useScrollPosition = () => {                       // get vertical and horizontal scroll offset
    const [scrollX, setScrollX] = useState(0)
    const [scrollY, setScrollY] = useState(0)
    
    const prevX= usePrevState(scrollX)                          // have a last data to compare up or down
    const prevY= usePrevState(scrollY)
    
    useEventListener("scroll",() => {        // update horizontal(X) and vertical(Y) scroll positions
        setScrollX( window.scrollX)
        setScrollY( window.scrollY)
    }, window)
    
    return  {
        scrollX, scrollY,
        prevPosition:[prevX, prevY]
    }
}
    /*
     const updatePosition = () => {                            // update horizontal(X) and vertical(Y) scroll positions
     setScrollX(scrollX => window.scrollX)
     setScrollY(scrollY => window.scrollY)
     }
     useEffect(() => {
     window.addEventListener("scroll", updatePosition) // add event listener for 'scroll'
     return () => window.removeEventListener("scroll", updatePosition)
     }, [])
     */
