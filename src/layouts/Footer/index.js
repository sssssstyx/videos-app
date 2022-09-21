/**
 * @Description: FooterItems Component
 * @author Shy
 * @date 18.08.2022
 */

import React from 'react'


export default function Footer (props) {
    // const ref = useRef()
    // const { scrollY } = useScrollPosition()
    // useEffect(()=> {
    //     console.log("client height =", document.body.clientHeight, "body height =", document.body.offsetHeight,
    // "scroll height =", document.body.scrollHeight) console.log("scroll position", scrollY) console.log("client
    // height =", ref.current.getBoundingClientRect(),"offset height =",ref.current.offsetHeight, "scroll height =",
    // ref.current.scrollHeight )  }, [scrollY])
    
    return (
        <footer className="fixed left-0 bottom-0 w-full h-32 bg-stone-500 -z-50">
                {props.children}
        </footer>
    
    )
}
/**
 * End of FooterItems Component
 */