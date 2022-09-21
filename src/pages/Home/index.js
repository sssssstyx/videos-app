/**
 * @Description Index Component
 * @author Shy
 * @date 18.08.2022
 */

import React from 'react'

import Header from '../../layouts/Header'
import Article from '../../layouts/Article'
import Footer from '../../layouts/Footer'
import Navigation from './Navigation/Navigation'
import Sections from './Sections/Sections'
import FooterItems from '../../layouts/Footer/FooterItems/FooterItems'
import Video from '../../components/Video/Video'
import Arrow from '../../components/Arrow/Arrow'

import MP4 from '../../assets/videos/bg-videos/bg-video-default.mp4'
import WEBm from '../../assets/videos/bg-videos/bg-video-default.webm'

const bgVideo = {MP4, WEBm}

export default function Home () {
    return (
        <div className="min-w-[280px] bg-zinc-50 mb-52">
            {/* header */}
            <Header>
                <Navigation />
            </Header>
            {/* main sections */}
            <div className="bg-amber-50 md:h-screen min-w-[280px] z-30">
                <Video
                    video={bgVideo}
                    autoplay={true}
                />
            </div>
            <Article>
                <Sections />
            </Article>
            <Arrow />
            {/* footer */}
            {/*<div className="h-20 w-full "></div>*/}
            <Footer>
                <FooterItems />
            </Footer>
        </div>
    )
}
/**
 * End of Index Component
 */