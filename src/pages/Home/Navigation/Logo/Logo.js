/**
 * @Description Logo Component
 * @author Shy
 * @date 19.08.2022
 */

import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../../../assets/images/McLaren-White-Logo.png'

const Logo = () => {
    return (
        <div className="w-full z-20 cursor-pointer md:-translate-y-6">
            <img className="h-24" src={logo} alt={"McLaren White Logo"}/>
        </div>
    )
}
/**
 * End of Logo Component
 */
export default Logo