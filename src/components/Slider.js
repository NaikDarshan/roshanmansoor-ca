import React from 'react'
import { Carousel } from 'react-bootstrap';
import Excellence_Banner from '../img/Roshan_Mansoor&Co_Excellence.png';
import Growth_Banner from '../img/Roshan_Mansoor_Growth_Banner.png';
import Confidentiality_Banner from '../img/Roshan_Mansoor_Confidentiality.png';
import Objectivity_Banner from '../img/Roshan_Mansoor_Objectivity.png';
import Trust_Banner from '../img/Roshan_Mansoor_Trust.png';
import Diligence_Banner from '../img/Roshan_Mansoor_Diligence.png';
import Excellence_Banner_Mobile from '../img/Roshan_Mansoor&Co_Excellence_Mobile.png';
import Growth_Banner_Mobile from '../img/Roshan_Mansoor_Growth_Banner_Mobile.png';
import Confidentiality_Banner_Mobile from '../img/Roshan_Mansoor_Confidentiality_Mobile.png';
import Objectivity_Banner_Mobile from '../img/Roshan_Mansoor_Objectivity_Mobile.png';
import Trust_Banner_Mobile from '../img/Roshan_Mansoor_Trust_Mobile.png';
import Diligence_Banner_Mobile from '../img/Roshan_Mansoor_Diligence_Mobile.png';

const Slider = () => {
  return (
    <Carousel
      controls={false}>
      <Carousel.Item>
        <div className="hidden-sm-down">
          <img
            className="d-block w-100"
            src={Excellence_Banner}
            alt="First slide"
          />
        </div>
        <div className="hidden-sm-up">
          <img
            className="d-block w-100"
            src={Excellence_Banner_Mobile}
            alt="First slide"
          />
        </div>
        <Carousel.Caption className="custom-carousel-caption">
          <h1>First slide label</h1>
          <h3>Nulla vitae elit libero, a pharetra augue mollis interdum.</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className="hidden-sm-down">
          <img
            className="d-block w-100"
            src={Growth_Banner}
            alt="Second slide"
          />
        </div>
        <div className="hidden-sm-up">
          <img
            className="d-block w-100"
            src={Growth_Banner_Mobile}
            alt="Second slide"
          />
        </div>
        <Carousel.Caption className="custom-carousel-caption">
          <h1>Second slide label</h1>
          <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className="hidden-sm-down">
          <img
            className="d-block w-100"
            src={Confidentiality_Banner}
            alt="Third slide"
          />
        </div>
        <div className="hidden-sm-up">
          <img
            className="d-block w-100"
            src={Confidentiality_Banner_Mobile}
            alt="Third slide"
          />
        </div>
        <Carousel.Caption className="custom-carousel-caption">
          <h1>Third slide label</h1>
          <h3>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className="hidden-sm-down">
          <img
            className="d-block w-100"
            src={Trust_Banner}
            alt="Third slide"
          />
        </div>
        <div className="hidden-sm-up">
          <img
            className="d-block w-100"
            src={Trust_Banner_Mobile}
            alt="Third slide"
          />
        </div>
        <Carousel.Caption className="custom-carousel-caption">
          <h1>Third slide label</h1>
          <h3>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className="hidden-sm-down">
          <img
            className="d-block w-100"
            src={Objectivity_Banner}
            alt="Third slide"
          />
        </div>
        <div className="hidden-sm-up">
          <img
            className="d-block w-100"
            src={Objectivity_Banner_Mobile}
            alt="Third slide"
          />
        </div>
        <Carousel.Caption className="custom-carousel-caption">
          <h1>Third slide label</h1>
          <h3>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className="hidden-sm-down">
          <img
            className="d-block w-100"
            src={Diligence_Banner}
            alt="Third slide"
          />
        </div>
        <div className="hidden-sm-up">
          <img
            className="d-block w-100"
            src={Diligence_Banner_Mobile}
            alt="Third slide"
          />
        </div>
        <Carousel.Caption className="custom-carousel-caption">
          <h1>Third slide label</h1>
          <h3>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default Slider
