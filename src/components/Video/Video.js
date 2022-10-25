/**
 * @Description Video2 Component
 * @author Shy
 * @date 06.09.2022
 */

import React, { useReducer, useRef } from 'react'
// import { isMobile } from 'react-device-detect'
import { VIDEO_PAUSE, VIDEO_PLAY, VIDEO_REPLAY } from './constants'

/* useReducer's reducer function for several scenarios:
 * Autoplay videos if set as true;
 * if video is not set as autoplay,
 * it means this component should be used for the card videos playing.
 * In this case, when mouse enter the video area, video plays
 * and mouse leave the area, video pauses or replay if it is set.
 */
 function reducer (state, action){
     switch (action.type){
        case VIDEO_PLAY:
            return  {
                play: true,
                pause: false,
                videoPlayer: action.videoPlayer.play()
            }
        case VIDEO_PAUSE:
            return {
                play: false,
                pause: true,
                videoPlayer: action.videoPlayer.pause()
            }
        case VIDEO_REPLAY:
            return { videoPlayer: action.videoPlayer.currentTime = 0 }
        default:
            throw new Error()
    }
}

/* this is the video component using useReducer, both Video components are available
 * the app invokes this component
 */

const Video = ({autoplay, image, replay, video}) => {
    // getting the control of video, HTMLDivElement(null)
    const videoRef = useRef(null)
    
    // initialize boolean autoplay and replay
    const initState = {
        play: autoplay,
        pause: !autoplay,
        videoPlayer: undefined
    }
    
    // define useReducer
    const [, dispatcher] = useReducer(reducer, initState)
    
    // using different functions to dispatch several operations for multiple scenarios
    const videoPlayHandler = async () => await dispatcher({ type:VIDEO_PLAY, videoPlayer: videoRef.current })
    const videoPauseHandler = async () => await dispatcher({ type:VIDEO_PAUSE, videoPlayer: videoRef.current })
    const videoReplayHandler = async () => await dispatcher({ type:VIDEO_REPLAY, videoPlayer: videoRef.current })
    
    return (
        <video ref={videoRef}
               className="w-full h-full object-cover"
               autoPlay={autoplay} loop muted
               poster={image}
               onMouseEnter={autoplay ? undefined : videoPlayHandler}
               onMouseLeave={autoplay ? undefined : () =>{videoPauseHandler(); replay && videoReplayHandler()}}
        >
            {/*{isMobile ?*/}
            {/*    <>*/}
            {/*        <source src={video.MP4} type="video/mp4" />*/}
            {/*        <source src={video.WEBm} type="video/webm" />*/}
            {/*    </>*/}
            {/*    :*/}
            {/*    <>*/}
            {/*        <source src={video.MP4} type="video/mp4" />*/}
            {/*        <source src={video.WEBm} type="video/webm" />*/}
            {/*    </>*/}
            {/*}*/}
            <source src={video.MP4} type="video/mp4" />
            <source src={video.WEBm} type="video/webm" />
        </video>
    )
}
/**
 * End of Video2 Component
 */
export default Video