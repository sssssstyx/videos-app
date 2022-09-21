/**
 * @Description custom hook useEventListener
 * @author Shy
 * @date 24.08.2022
*/


/**
 * For using this hook, call it by event name, 'eventName', like 'mousemove' or 'click'.
 * There must be one callback function 'handler' when call this hook.
 * Others like 'element' and 'options' are option.
 *
 * PARAMETER    DESCRIPTION
 * eventName*   The event name (string).
 * handler*     A function that will be called whenever eventName fires on element.
 * element      An optional element to listen on. Defaults to global (i.e., window). (Option)
 * options      An object { capture?: boolean, passive?: boolean, once?: boolean } to be passed to addEventListener.
 *              options Like addEventListener(type, listener, useCapture)
 *              see more on MDN addEventListener() API
 */

import { useRef, useEffect } from 'react'

export const useEventListener = (eventName, handler, element = global, options = {}) => {
    const savedHandler = useRef()    // create a useRef to store the callback function
    const { capture, passive, once } = options // options for MDN EventTarget.addEventListener() API
    
    // Update ref.current value if handler changes.
    // This allows our effect below to always get latest handler ...
    // ... without this needing to pass it in effect deps array  ...
    // ... and potentially cause effect to re-run every render ...
    useEffect(() => {
        savedHandler.current = handler
    }, [handler])
    
    useEffect(() => {
        const isSupported = element && element.addEventListener     // Make sure element supports addEventListener
        if (!isSupported) return
    
        // Create event listener that calls handler function stored in ref
        const eventListener = (event) => savedHandler.current(event)
        const opts = { capture, passive, once }     // other optional properties
        // add and remove event listener
        element.addEventListener(eventName, eventListener, opts)
        return () => element.removeEventListener(eventName, eventListener, opts)
    }, [eventName, element, capture, passive, once]) // Re-run if eventName, element changes
}
