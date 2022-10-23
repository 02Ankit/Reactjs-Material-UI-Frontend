import React from 'react'

import "./Slider.css"
import Carousel from 'react-bootstrap/Carousel'
import Vector1 from "./Imgs/img1.gif"
import Vector2 from "./Imgs/img2.gif"
import Vector3 from "./Imgs/img3.gif"
import Vector4 from "./Imgs/img4.gif"

const Slider = () => {
  return (
    <div className='carousel'>
    <Carousel fade>
    <Carousel.Item interval ="4000">
      <img
        
        className="d-block w-100"
        src={Vector1}
        alt="First slide"
      />
      
      <Carousel.Caption>
      {  /*<h3>First slide label</h3>
  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>*/}
      </Carousel.Caption>
    </Carousel.Item>

    <Carousel.Item >
      <img
     
        className="d-block w-100"
        src={Vector2}
        alt="First slide"
      />
      <Carousel.Caption>
      {  /*<h3>First slide label</h3>
  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>*/}
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
    <img
      
      className="d-block w-100"
      src={Vector3}
      alt="First slide"
    />
    <Carousel.Caption>
    {  /*<h3>First slide label</h3>
<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>*/}
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <img
   
    className="d-block w-100"
    src={Vector4}
    alt="First slide"
  />
  <Carousel.Caption>
  {  /*<h3>First slide label</h3>
<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>*/}
  </Carousel.Caption>
</Carousel.Item>
   
  </Carousel>
    </div>
  )
}

export default Slider