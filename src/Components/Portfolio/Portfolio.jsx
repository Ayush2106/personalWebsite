import React from 'react'
import './Portfolio.css';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import netflix from '../../img/Netflix.jpg';
import youtube from '../../img/youtube.jpeg';
import amazonHome from '../../img/amazonHome.png';
import reels from '../../img/reels.jpg';


function Portfolio() {
  return (
    <div className='portfolio'>
<span>Recent Project</span>
<span>Portfolio</span>

<Swiper className="portfolio-slider"
spaceBetween={30}
slidesPerView={3}
grabCursor={true}
 >
 <SwiperSlide className='swiper-slide'>
        <img src = {netflix} alt = ""/>
        </SwiperSlide> 

        <SwiperSlide className='swiper-slide'>
        <img src = {youtube} alt = ""/>
        </SwiperSlide>

        <SwiperSlide className='swiper-slide'>
        <img src = {amazonHome} alt = ""/>
        </SwiperSlide>

        <SwiperSlide className='swiper-slide'>
        <img src = {reels} alt = ""/>
        </SwiperSlide>
</Swiper>

    </div>
  )
}

export default Portfolio

