import React from "react";
import "./Portfolio.css";
import Slider from "react-slick";
import p1 from "../../img/portfolio/p1.jpg";
import p2 from "../../img/portfolio/p2.jpg";
import p3 from "../../img/portfolio/p3.jpg";
import p4 from "../../img/portfolio/p4.jpg";
import p5 from "../../img/portfolio/p5.JPG";
import p6 from "../../img/portfolio/p6.JPG";

const Portfolio = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay:true,
    autoplaySpeed:1500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
          infinite: true,
          dots: true
        }
      },
     
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      }
    ]
  };
  return (
  <div className="p-slide" id= "Gallery">
   <div className="p-title" id="portfolio">
    {/* heading */}
    <span>View to </span> 
    <span>Gallery</span>
</div>
{/*Slider*/}
<Slider {...settings}>
<div>
  <img src={p1} alt="" srcSet="" />
</div>
<div>
<img src={p2} alt="" srcSet="" />
</div>
<div>
<img src={p3} alt="" srcSet="" />
</div>
<div>
<img src={p4} alt="" srcSet="" />
</div>
<div>
<img src={p5} alt="" srcSet="" />
</div>
<div>
<img src={p6} alt="" srcSet="" />
</div>
</Slider>

   </div>
  )
}

export default Portfolio