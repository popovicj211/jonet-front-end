import React from 'react';
import {Container,Row , Col , Button } from 'react-bootstrap';
import { FaPhoneAlt , FaMapMarker, FaRegEnvelope } from 'react-icons/fa';
import './footer.css';
import {Link,NavLink, BrowserRouter as Router} from 'react-router-dom';

const Footer = props => {

    return(
   <Router>
    <footer id="footer">
    <Container>
        <Row>
            <Col xs={6} md={4} lg={3}>
                <Link to="/" className="navbar-logo">JONet</Link>
            </Col>
            <Col xs={6} md={4} lg={3}>
                <nav className="footer-navbar">
                    <h4>Links </h4>
                     <NavLink to="/">Home</NavLink>
                      <NavLink to="/services">Services</NavLink>
                     <NavLink to="/contact">Contact</NavLink>
                </nav>           
            </Col>
            <Col xs={6} md={4} lg={3}>
                  <h4>Contact </h4>
                  <p className="footer-contact-name"><FaMapMarker className="footer-icon"/> &nbsp; Zdravka Čelara 16</p>
                  <p className="footer-contact-name"><FaRegEnvelope  className="footer-icon"/> &nbsp; <Link to="#">jonet@gmail.com</Link></p>
                  <p className="footer-contact-name"> <FaPhoneAlt  className="footer-icon"/> &nbsp; +381 61 234 5678</p>
                  
            </Col>
            <Col xs={6} md={4} lg={3}>
                     <h4> Newsletter</h4>
                     <p>Subscribe to receive the latest news, events and updates.</p>
                     <div className="newsletter-btn-group">
                     <form>
                         <input type="text" id="newsletter" name="newsletter" className="bord-text-form" /> <Button className="btns black-outline-btn">Subscribe</Button>
                     </form>
                     </div>     
           </Col>
        </Row>

        <Row>
            <div className="col-md-12 text-center">
                <br/>
                <br/>
                <p className="copyright"> Copyright &copy; <a href="#">Jovan Popović</a> , All rights reserved </p>
            </div>
        </Row>
    </Container>
</footer>
</Router>
);
}

export default Footer;