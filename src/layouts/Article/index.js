/**
 * @Description: Index Component
 * @author Shy
 * @date 18.08.2022
 */

import React from 'react'

export default function Article (props) {
    return (
        <article className="flex flex-col mt-20 mx-8 items-center z-10">
            {props.children}
        </article>
    )
}
/**
 * End of Index Component
 */