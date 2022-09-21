/**
 * @Description Arrow Component
 * @author Shy
 * @date 24.08.2022
 */

import React, { useRef } from 'react'
import arrowIcon from '../../assets/images/arrow_icon.svg'
import { useScrollPosition } from '../../hooks'

const Arrow = () => {
    const ref = useRef()
    const { scrollY } = useScrollPosition()
    
    const scrollTop = () => window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
    
    // show scroll-to-top arrow only scroll position larger than 80.
    const scrollPosition = scrollY < 80 && 'translate-y-32'
    return (
        <div ref={ref}
             className={`cursor-pointer duration-200 ease-in-out fixed right-5 bottom-5 z-30 ${scrollPosition}`}
             onClick={scrollTop}
        >
            <img className="h-10 w-10 md:h-16 md:w-16" src={arrowIcon} alt="" />
        </div>
    )
}
/**
 * End of Arrow Component
 */
export default Arrow