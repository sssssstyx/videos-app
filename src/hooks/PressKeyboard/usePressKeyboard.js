/**
 * @Description custom usePressKeyboard hook for detect whether the specific key is pressed
 * @author Shy
 * @date 24.08.2022
*/

/**
 * For using this hook, give a string parameter which represents the specific key
 * deconstructing the return value { keyPressed, targetKeyPressed }
 * Parameter            Type            Usage
 * keyPressed           String          Return the key just pressed
 * targetKeyPressed     Boolean         Return true or false for if the specific key pressed
 *
 */

import { useState } from 'react'
import { useEventListener } from '../index'

export const usePressKeyboard = (targetKey = "") => {
    // State for keeping track of whether key is pressed
    const [keyPressed, setKeyPressed] = useState("")
    const [targetKeyPressed, setTargetKeyPressed] = useState(false)
    
    /*const upHandler = ({ key }) => {        // If released key is our target key then set to false
        if (key === targetKey) {
            setTargetKeyPressed(false)
        }
    }*/
    // useEventListener("keyup", upHandler, window)        // if end pressing a key, not invoke
    
    // with using custom useEventListener hook
    const downHandler = ({ key }) => {      // If pressed key is our target key then set to true
        if (key === targetKey) {
            setTargetKeyPressed(true)
        }
        setKeyPressed(key)
    }
    useEventListener("keydown", downHandler, window)    // if pressing a key
    
    
    // return the key pressed just now and whether the specific key was pressed or targeted
    return { keyPressed, targetKeyPressed }
    
}
     /* without using custom useEventListener hook
     // Add event listeners
     useEffect(() => {
     window.addEventListener("keydown", downHandler)
     window.addEventListener("keyup", upHandler)
     return () => {                      // Remove event listeners on cleanup
     window.removeEventListener("keydown", downHandler)
     window.removeEventListener("keyup", upHandler)
     }
     }, [])
     */