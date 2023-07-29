import React from 'react'
import './Portfolio.css';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import moviebox from "../../img/moviebox.png";
import food from "../../img/food.png";
import money from "../../img/moneyaccount.png";
import nextNetflix from "../../img/nextnetflix.png";
import shoppingmart from "../../img/ShoppingMart.png"

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
          window.location.href='https://ecommerce-project-frontend-ruby.vercel.app/';
          }}
        src = {shoppingmart} alt = ""/>
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
          window.location.href='https://gregarious-sopapillas-c0d429.netlify.app/';
          }}
        src = {moviebox} alt = ""/>
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
        <img 
          onClick={(e) => {
            e.preventDefault();
            window.location.href="https://next-movie-webite-68iy.vercel.app/";
            }}
        src = {nextNetflix} alt = ""/>
        </SwiperSlide>

</Swiper>

    </div>
  )
}

export default Portfolio

