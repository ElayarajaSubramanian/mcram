import React from 'react';
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick";
import Video1 from "../assets/videos/video1.mp4"
import Banner1 from "../assets/images/banner.jpg"
import Banner2 from "../assets/images/banner2.jpg"

const Banner = () =>{
  var settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed:2500,
  };
  return (
    <Slider {...settings}>
      <img src={Banner1} />
      <img src={Banner2} />
    </Slider>
  );
}

export default Banner