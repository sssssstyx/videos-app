/**
 * @Description Navigation Component
 * @author Shy
 * @date 18.08.2022
 */

import React from 'react'
import Burger from '../../../components/Burger/Burger'
import Logo from './Logo/Logo'
import tw from 'tailwind-styled-components'

const Navigation = () => {
    return (
        <NavStyles>
            <BurgerStyles>
                <Burger
                    color={'bg-white'}
                />
            </BurgerStyles>
            
            <UlStyles>
                <LiStyles>This is </LiStyles>
                <LiStyles>Navigation</LiStyles>
            </UlStyles>
            
            <LogoStyles>
                <Logo />
            </LogoStyles>
        </NavStyles>
    )
}

const NavStyles = tw.nav`
    w-full
    h-12
    md:h-nav md:mx-auto
    max-w-6xl
    flex
    flex-row
    justify-center
`

const BurgerStyles = tw.div`
    fixed
    left-0
    ml-6
    md:ml-8
    xl:ml-12
    2xl:ml-20
    my-[10.5px]
    sm:mt-4
    md:my-[18.5px]
`
const UlStyles = tw.ul`
    h-nav
    w-full
    max-w-5xl
    flex
    flex-row
    md:ml-[5.75rem] md:mr-[13.75rem]
    items-center
    justify-between
    hidden
    md:flex
`

const LiStyles = tw.li`
    flex
    text-amber-100
    text-xl
`

const LogoStyles = tw.div`
    flex
    items-center
    md:fixed
    md:right-0
    sm:mt-1.5
    md:mr-6
    xl:mr-8
    2xl:mr-16
`

/**
 * End of Navigation Component
 */
export default Navigation