/**
 * @Description Burger Component
 * @author Shy
 * @date 19.08.2022
 */

import React, { useState } from 'react'
import { useWindowSize } from '../../hooks'
import {useToggle} from '../../hooks'
import { isWindows } from 'react-device-detect'

const Burger = ({ color }) => {
    /* variables area */
    const { screenWidth } =  useWindowSize()                // get the window width
    const [isBurger, toggleBurger] = useToggle(true)      // if the nav button is a burger button
    const [isHover, toggleHover] = useToggle(false)       // mouse hover on burger button
    
    /* functions/methods area */
    // const mouseEnterHandler = () => setIsHover(true)
    // const mouseLeaveHandler = () => setIsHover(false)
    // const onClickHandler = () => setIsBurger(!isBurger)
    
    /* style conditions area */
    /* first and third lines styles:
    ...if it's in burger shape:
       1. when mouse hover and using windows, translate the line to the right/left a little,
       2. when mouse leave, restore the displacement styles
    ...if it was clicked and not a burger now:
       ...just make the two lines rotate and then move up or down in order to become a cross
     */
    const firstLineStyles = (isBurger ? isHover && isWindows && screenWidth > 1024 && 'translate-x-2'
                                        :
                                        'rotate-[225deg] translate-y-[7px]')
    const thirdLineStyles = (isBurger ? isHover && isWindows && screenWidth > 1024 && '-translate-x-2'
                                        :
                                        '-rotate-[225deg] -translate-y-[7px]')
    // the style of middle line: just disappear when button is not a burger and showing a cross
    const midLineStyle = (!isBurger && 'translate-x-2 opacity-0')
    
    return (
        <div className={`flex flex-col h-full w-full text-amber-50 cursor-pointer z-50`}
             onMouseEnter={toggleHover}     // if mouse enter, set hover true
             onMouseLeave={toggleHover}     // if mouse leave, set hover false
             onClick={toggleBurger}         // if click the button, set reverse boolean status
        >
            <span className={`${color} h-[1px] w-7 my-1.5 duration-300 ease-in-out ${firstLineStyles}`}>
            </span>
            <span className={`${color} h-[1px] w-7 duration-300 ease-in-out ${midLineStyle}`}>
            </span>
            <span className={`${color} h-[1px] w-7 my-1.5 duration-300 ease-in-out ${thirdLineStyles}`}>
            </span>
        </div>
    )
}
/**
 * End of Burger Component
 */
export default Burger