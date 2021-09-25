import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link, BrowserRouter as Router, useLocation } from 'react-router-dom';
import SlideOne from './subparts/slider/slideone';
//import './slider.css';
import Slideshow from './subparts/slider/slidershow';

const Slider = () => {
    let location = useLocation();
  
    return (
        <div className="slideshow">
        
                           {
                                location.pathname.includes('/service/') ? <SlideOne/>:  <Slideshow/>
                           }
        </div>
    );

}
export default Slider;