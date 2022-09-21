/**
 * @Description Index Component
 * @author Shy
 * @date 18.08.2022
 */

import React from 'react'
import { useScrollDirection, useScrollPosition } from '../../hooks'
import { useDebounce } from 'use-debounce-hooks';


export default function Header (props) {
    /* variables area */
    const {scrollY} = useScrollPosition()
    const {directionY} = useScrollDirection()     // get vertical scroll direction
    
    /***** debounce optimisation: only the last action is performed even if the mouse keeps scrolling *****/
    const [navScroll, setNavScroll] = useDebounce("", 1000);
    
    // const navScroll = directionY === "down" && "-translate-y-16"     // navigation scroll style without debounce
    // if scroll down, header moves up and disappears with an animation delay, conversely it slides down
    if (directionY === 'down') setNavScroll("-translate-y-16")
    else if (directionY === 'up' && scrollY !==0) setNavScroll("")
    
    // transparent header within video location, 70 opacity in other areas
    const transOpacity = scrollY <= 157 ? 'bg-transparent' : 'bg-slate-900/50'
    
    return (
        <header
            className={
                `fixed top-0 w-full min-w-[280px] md:h-nav z-50 duration-500 ease-in-out ${navScroll} ${transOpacity}`
            }
        >
            {props.children}
        </header>
    )
}
/**
 * End of Index Component
 */