import React, { useContext } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { FaFacebookF } from "react-icons/fa";
import {FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { themeContext } from '../../Context';

// import { baseUrl } from "./config";
import "./ExpertsReview.css"
import Vector1 from "./Imgs/experts/ex1.png"
import Vector2 from "./Imgs/experts/ex2.png"
import Vector3 from "./Imgs/experts/ex3.png"
import Vector4 from "./Imgs/experts/ex4.png"
import Vector5 from "./Imgs/experts/ex5.png"
const ExpertsReview = () => {
    
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    const settings = {

        dots: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
       cssEase:"linear",
       autoplay:true,
       autoplaySpeed:1500,
        responsive: [
          
           
          {
            breakpoint: 680,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      }

     
  return (
    <div className="expertSlider">
            <div className="e-name">
                <span style={{color: darkMode? "white": ""}}>What Experts Say About Us!!! </span>
                <span>Review </span>
            </div>
    
        <Slider {...settings} className="slider-first">
        <div className="e-card-wrapper">
            <div className="e-card">
                <div className="e-card-img">
                    <img src={Vector1} alt=" "/>
                </div>
                <ul className="e-social-icons">
                <li><a href="www.facebook.com"><FaFacebookF/></a></li>
                <li><a href="www.instagram.com"><FaInstagram/></a></li>
                <li><a href="www.linkedin.com"><FaLinkedinIn/></a></li>
                </ul>
                <div className="e-details">
                    <h2>Mr. U.D.<span className="job title"></span> Patnaik Sir</h2>
                </div>
            </div>
        </div>  
        <div className="e-card-wrapper">
            <div className="e-card">
                <div className="e-card-img">
                    <img src={Vector2} alt=""/>
                </div>
                <ul className="e-social-icons">
                <li><a href="/"><FaFacebookF/></a></li>
                <li><a href="/"><FaInstagram/></a></li>
                <li><a href="/"><FaLinkedinIn/></a></li>
                </ul>
                <div className="e-details">
                    <h2>Mr. Anup <span className="job title"></span>Bose</h2>
                </div>
            </div>
        </div>  
        <div className="e-card-wrapper">
            <div className="e-card">
                <div className="e-card-img">
                    <img src={Vector3} alt=" "/>
                </div>
                <ul className="e-social-icons">
                <li><a href="/"><FaFacebookF/></a></li>
                <li><a href="/"><FaInstagram/></a></li>
                <li><a href="/"><FaLinkedinIn/></a></li>
                </ul>
                <div className="e-details">
                    <h2>Mrs. Deepti <span className="job title"></span>Thakur</h2>
                </div>
            </div>
        </div>  
        <div className="e-card-wrapper">
        <div className="e-card">
            <div className="e-card-img">
                <img src={Vector4} alt=" "/>
            </div>
            <ul className="e-social-icons">
            <li><a href="/"><FaFacebookF/></a></li>
            <li><a href="/"><FaInstagram/></a></li>
            <li><a href="/"><FaLinkedinIn/></a></li>
            </ul>
            <div className="e-details">
                <h2>Mr. H.S <span className="job title"></span>Rajput</h2>
            </div>
        </div>
    </div> 
    <div className="e-card-wrapper">
    <div className="e-card">
        <div className="e-card-img">
            <img src={Vector5} alt=" "/>
        </div>
        <ul className="e-social-icons">
        <li><a href="/"><FaFacebookF/></a></li>
        <li><a href="/"><FaInstagram/></a></li>
        <li><a href="/"><FaLinkedinIn/></a></li>
        </ul>
        <div className="e-details">
            <h2>Mrs. Seemulata <span className="job title"></span>Bose</h2>
        </div>
    </div>
</div> 
          
</Slider>
      </div>
  )
}

export default ExpertsReview