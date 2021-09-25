import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
//import './footer.css';
import { Link } from 'react-router-dom';
import { HashLink as NavLink} from 'react-router-hash-link';
const Footer = props => {

    return ( <footer>
        <Container>
        <Row className="footer-section">

        <NavLink to = "/#" smooth
        className = "navbar-logo" > JoNet </NavLink> 
        <nav className = "footer-navbar">
        <NavLink to = "/#" smooth> Home </NavLink> 
        <NavLink to = "/#services" smooth > Services </NavLink> 
        <NavLink to = "/#contact" smooth > Contact </NavLink> 
        </nav>           
        <p className = "footer-socials">
        <Link to="#"> <FaFacebookF className = "footer-icon" /> </Link> 
        <Link to="#">  <FaInstagram className = "footer-icon" /> </Link> 
        <Link to="#"> <FaLinkedinIn className = "footer-icon" /> </Link> 
       
        </p>

        <p className = "copyright" > Copyright &copy; <a href = "#" > Jovan Popović </a> , All rights reserved </p>
        </Row> 
        </Container> 
        </footer>

    );
}

export default Footer;