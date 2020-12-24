import React from 'react';
import {Container,Row, Col, Button } from 'react-bootstrap';
import {Link,  BrowserRouter as Router } from 'react-router-dom';
import './slider.css';
const Slider = props => {
    return (
        <Router>
        <div id="slideshow">
              <Container>
                  <Row>
                      <div className="slideshow-group">
                           <Col xs={12} md={6} lg={6}>
                                <div className="slideshow-block">
                                      <h1> Slider</h1>
                                      <p>Joneeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeetttttttttttttttttttttttttttttttttttttttttttttttttttttttuiiiiiiiiiiiiiiiiiiiuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu</p>
                                      <div className="btnt btn-trans" id="btn-trans-nobordecolor">
                                               <div id="translate"></div>
                                               <Link to="/">Services</Link>
                                     </div>
                                    
                               </div>
                               
     
                          </Col>
                      </div>
                               
                  </Row>
              </Container>
        </div>
        </Router>
    );
}
export default Slider;