import React from 'react';
import {Container,Row, Col, Button } from 'react-bootstrap';
import {Link,  BrowserRouter as Router } from 'react-router-dom';
import './slider.css';
import Slideshow from './subparts/slider/slidershow';

const Slider = props => {

    return (
        <div id="slideshow">
              <Container fluid className="p-0">
          
                           <Slideshow/>
              </Container>
        </div>
    );
}
export default Slider;