/**
 * @Description: Container Component
 * @author Shy
 * @date 18.08.2022
 */

import React, { useRef } from 'react'
import tw from 'tailwind-styled-components'
import styled from 'styled-components'

import Video from '../../../../components/Video/Video'
import scroll1MP4 from '../../../../assets/videos/scroll-videos/McLaren_GT_Scroll1_480p.mp4'
import scroll1WEBm from '../../../../assets/videos/scroll-videos/McLaren_GT_Scroll1_480p.webm'
import scroll2MP4 from '../../../../assets/videos/scroll-videos/2022McLarenGT_Scroll2_480p.mp4'
import scroll2WEBm from '../../../../assets/videos/scroll-videos/2022McLarenGT_Scroll2_480p.webm'
import scroll3MP4 from '../../../../assets/videos/scroll-videos/2022McLarenGT_Scroll3_480p.mp4'
import scroll3WEBm from '../../../../assets/videos/scroll-videos/2022McLarenGT_Scroll3480p.webm'
import useHorizontalScroll from '../../../../hooks/HorizontalScroll/useHorizontalScroll'

const scrollVideo1 = {MP4: scroll1MP4, WEBm: scroll1WEBm}
const scrollVideo2 = {MP4: scroll2MP4, WEBm: scroll2WEBm}
const scrollVideo3 = {MP4: scroll3MP4, WEBm: scroll3WEBm}

const video = [scrollVideo1, scrollVideo2, scrollVideo3]

const VideosContainer = () => {
    const scrollRef = useRef()
    let videosComponents
    
    // a Video components loop
    videosComponents = video.map((v, i) => {
        return (
            <VideoStyles key={i + new Date().getUTCMilliseconds()}>
                <Video
                    video={v}
                    autoplay={false}
                    replay={true}
                />
            </VideoStyles>
        )
    })
    
    useHorizontalScroll(scrollRef, 960)
    
    return (
        <div className="w-full h-fit md:h-[480px] relative flex items-center overflow-hidden">
            <VideosContainerStyles ref={scrollRef}>
                {videosComponents}
                {videosComponents}
            </VideosContainerStyles>
        </div>
    )
}

// CSS components area
const NoScrollBarStyles = styled.div`
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
    /* Hide scrollbar for Chrome, Safari and Opera */

    ::-webkit-scrollbar {
        display: none;
    }

    overscroll-behavior-x: contain;
`

const VideosContainerStyles = tw(NoScrollBarStyles)`
    w-full h-fit
    md:h-[480px]
    bg-sky-50
    overflow-x-scroll
    overflow-y-hidden
    whitespace-nowrap
    scroll-x
    snap-proximity
    scroll-smooth
`

const VideoStyles = tw.div`
    w-96
    h-fit
    md:w-[853px]
    md:h-[480px]
    mr-[0.3px]
    inline-block
    snap-center
`
/**
 * End of Container Component
 */
export default VideosContainer