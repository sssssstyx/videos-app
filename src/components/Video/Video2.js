/**
 * @Description: Video2 Component
 * @author Shy
 * @date 18.08.2022
 */

import React, { useRef } from 'react'
import { useVideo } from '../../hooks'

// this is the video component using custom hook
const Video2 = (props) => {
    // initialize boolean autoplay and replay
    const {autoplay: isAutoplay, replay: isReplay, image: imageUrl, video: videoSrc} = props
    // getting the control of video, HTMLDivElement(null)
    const videoRef = useRef(null)
    
    // custom hook for video play controller
    useVideo(videoRef, isAutoplay, isReplay)
    
    return (
        <video ref={videoRef}
               className="h-full w-full object-cover hover:duration-150 hover:ease-in-out"
               autoPlay={isAutoplay} loop muted
               poster={imageUrl}
        >
            <source src={videoSrc} type="video/mp4" />
        </video>
    )
}
/**
 * End of Video2 Component
 */
export default Video2