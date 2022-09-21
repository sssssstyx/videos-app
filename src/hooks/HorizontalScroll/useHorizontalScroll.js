/**
 * @Description UseHorizontalScroll custom hook
 * @author Shy
 * @date 2022/9/21
 */

import { useEffect } from 'react'

const UseHorizontalScroll = (propRef, distance) => {
    useEffect(() => {
        const element = propRef.current
        const scrollHorizontally = async (e) => {
            e.preventDefault()
            await element.scrollBy({
                    left: e.deltaY < 0 ? -distance : distance,
                    behavior: 'smooth'
                }
            )
        }
        element.addEventListener('wheel', e => scrollHorizontally(e))
        return () => element.removeEventListener('wheel', e => scrollHorizontally(e))
    }, [propRef])
}

export default UseHorizontalScroll