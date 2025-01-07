import React, { useState } from 'react';
import './Portfolio.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import moviebox from "../../img/moviebox.png";
import food from "../../img/food.png";
import money from "../../img/moneyaccount.png";
import nextNetflix from "../../img/nextnetflix.png";
import shoppingmart from "../../img/ShoppingMart.png";
import realTimeTracker from '../../img/realtimeTracker.PNG';

function Portfolio() {
  const [hovered, setHovered] = useState(null);

  const projects = [
    { name: 'Real Time Tracker', img: realTimeTracker, link: 'https://realtime-tracker-e1w0.onrender.com/' },
    { name: 'Shopping Mart', img: shoppingmart, link: 'https://ecommerce-project-frontend-ruby.vercel.app/' },
    { name: 'Food Recipe', img: food, link: 'https://foodreciepebyayushsingla.netlify.app/' },
    { name: 'Movie Box', img: moviebox, link: 'https://gregarious-sopapillas-c0d429.netlify.app/' },
    { name: 'Money Account', img: money, link: 'https://fastidious-chimera-2cecb7.netlify.app/' },
    { name: 'Next Netflix', img: nextNetflix, link: 'https://next-movie-webite-68iy.vercel.app/' },
  ];

  return (
    <div className='portfolio'>
      <span>Recent Project</span>
      <span>Portfolio</span>

      <Swiper
        className="portfolio-slider"
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
      >
        {projects.map((project, index) => (
          <SwiperSlide
            key={index}
            className={`swiper-slide ${hovered !== null && hovered !== index ? 'dimmed' : ''}`}
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
          >
            <img
              onClick={(e) => {
                e.preventDefault();
                window.location.href = project.link;
              }}
              src={project.img}
              alt={project.name}
            />
            {hovered === index && <div className="project-name">{project.name}</div>}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Portfolio;
