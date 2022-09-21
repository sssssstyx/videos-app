/**
 * @Description custom usePrevState Hook, for using the previous value in useState or props
 * @author Shy
 * @date 23.08.2022
*/

import { useEffect, useRef } from 'react'

export const usePrevState =(val) => {
    // The ref object is a generic container whose current property is mutable
    // and can hold any value, similar to an instance property on a class
    const ref = useRef()
    useEffect(() => { ref.current = val }, [val])   // Store current value in ref
    return ref.current          // Return previous value (before update in useEffect above)
}