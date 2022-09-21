/**
 * @Description custom useVideo Hook
 * @author Shy
 * @date 20.08.2022
*/

import { useEffect } from 'react'

export const useVideo = (propRef, videoIsPlay, videoIsReplay) => {
    
    useEffect(()=>{
        if(!videoIsPlay){
            const element = propRef.current                      // getElement by Ref.current
            const videoPlay = () => element.play()               // mouse move hover to play the video
            const videoPause = () => element.pause()             // mouse move out to pause the video
            element.addEventListener("mouseenter", videoPlay)     // add mouse listeners
            element.addEventListener("mouseleave", videoPause)
            return () => {                                       // remove listeners
                element.removeEventListener("mouseenter", videoPlay)
                element.removeEventListener("mouseleave", videoPause)
            }
        }
    }, [propRef, videoIsPlay])
    
    // this useEffect is for replaying the video if it is a card video player
    useEffect(() => {
        const element = propRef.current         // getElement by Ref.current
        if(videoIsReplay){                      // replay the video if set true
            // pause and renew the video playing time
            const videoReplay = () =>  element.currentTime = 0
            
            
            element.addEventListener("mouseleave", videoReplay)     // add and remove event listener
            return () => element.removeEventListener("mouseleave", videoReplay)
        }
    }, [propRef, videoIsReplay])
}
