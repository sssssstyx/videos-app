/**
 * @Description: Sections Component
 * @author Shy
 * @date 18.08.2022
 */

import React from 'react'
import VideosContainer from './SubContainer/VideosContainer'

const Sections = () => {
    return (
        <section className="flex flex-col w-full h-full max-w-[1920px] z-10">
            <VideosContainer />
        </section>
    )
}
/**
 * End of Sections Component
 */
export default Sections