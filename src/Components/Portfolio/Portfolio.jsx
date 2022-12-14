import React from 'react'
import './Portfolio.css';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
// import netflix from '../../img/Netflix.jpg';
// import youtube from '../../img/youtube.jpeg';
// import amazonHome from '../../img/amazonHome.png';
import reels from '../../img/reels.jpg';
import moviebox from "../../img/moviebox.png";
import food from "../../img/food.png";
import money from "../../img/moneyaccount.png";


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
        <img 
        onClick={(e) => {
          e.preventDefault();
          window.location.href='https://gregarious-sopapillas-c0d429.netlify.app/';
          }}
        src = {moviebox} alt = ""/>
        </SwiperSlide> 

        <SwiperSlide className='swiper-slide'>
        <img 
         onClick={(e) => {
          e.preventDefault();
          window.location.href='https://foodreciepebyayushsingla.netlify.app/';
          }}
        src = {food} alt = ""/>
        </SwiperSlide>

        <SwiperSlide className='swiper-slide'>
        <img 
          onClick={(e) => {
            e.preventDefault();
            window.location.href="https://fastidious-chimera-2cecb7.netlify.app/";
            }}
        src = {money} alt = ""/>
        </SwiperSlide>

        <SwiperSlide className='swiper-slide'>
        <img src = {reels} alt = ""/>
        </SwiperSlide>
</Swiper>

    </div>
  )
}

export default Portfolio

