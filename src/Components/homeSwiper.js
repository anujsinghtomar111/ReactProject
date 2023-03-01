import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import './homeSwiper.css'

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import slide1 from './images/slide1.jpg'
import slide2 from './images/slide2.jpg'
import slide3 from './images/slide3.jpg'



// import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function HSwiper() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src={slide1}alt="" /></SwiperSlide>
        <SwiperSlide><img src={slide2} alt="" /></SwiperSlide>
        <SwiperSlide><img src={slide3} alt="" /></SwiperSlide>
      </Swiper>
    </>
  );
}
