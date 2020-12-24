import React, { useEffect, useState } from 'react';
import {Container,Row , Col , Button } from 'react-bootstrap';
import './header.css';
import {Link, NavLink, BrowserRouter as Router } from 'react-router-dom';
import { FaBars, FaTimes, FaSortUp, FaSortDown } from 'react-icons/fa';
import  useWindowDimensions from '../helps/getWindowDimensions';
import { useSpring, Spring, animated, config } from "react-spring";
import {Keyframes, Trail } from 'react-spring/renderprops';
import delay from 'delay'
import SignModal from './subparts/header/modalsign';

const Header = props => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const [show, setShow] = useState(true)
  const toggleMenuState = () => setShow(!show)

const   handleClickSubmenu = () => setClick(click);
const [showSubmenu, setSubmenu] = useState(true)
const toggleSubmenuState = () => setSubmenu(!showSubmenu);

const [showSignUp, setshowSignUp] = useState(true);
const showStateSignUp = ()  => setshowSignUp(false)
const hideStateSignUp = ()  => setshowSignUp(true)


  const { height, width } = useWindowDimensions();
  let navBarClass = null;
  if(width <= 1000){
    navBarClass = true;
  }else{
    navBarClass = false;
  }

const onClickMenuIcon = (event) =>{
  handleClick();
  toggleMenuState();
}

const onClickSubMenu = (event) =>{
  handleClickSubmenu();
  toggleSubmenuState();
}
const pr = useSpring({
  to: async (next, cancel) => {
    await next({opacity: 1, color: '#ffaaee'})
 //   await next({opacity: 0, color: 'rgb(14,26,19)'})
  },
  from: {opacity: 1, color: 'red'}
})

/*
const Conta = Keyframes.Spring({
  show: {opacity: 0},
  showAndHide: [{opacity: 0}, {opacity: 1}],
  wiggle: async (next, cancel, ownProps) => {
    await next({x: 100, config: config.wobbly})
    await delay(1000)
    await next({x: 0, config: config.gentle})
  }
})*/

const users = [{ id:1 , name:"Pera"} ,{ id:2 , name:"Mika"} ]


    return(
      <Router>
    <header id="header">
        <Container>
            <Row>
          
            <animated.div style={pr}>I will fade in and out</animated.div>

            <Link to="/" className="navbar-logo">JONet</Link>
             <Link to="#" className="menu-icon" onClick={onClickMenuIcon}>
                               {click ? <FaTimes /> : <FaBars />}
             </Link>
               
             {
              navBarClass ?  
              show ? null : <nav className="nav-sidebar"  > 
                  <ul id="nav-links-group" className="links-group">
                         <li>
                            <NavLink to="/"  className="nav-links" activeStyle={{ color: '#006DF0' }} > Home </NavLink>
                        </li>                   
                         <li className="nav-service"  style={{height: showSubmenu ? '40px' : '190px'}}>                    
                         <NavLink to="/services"  className="nav-links"  > Services  </NavLink>
                         <Link to="#"  className="submenu-show-icon" onClick={onClickSubMenu}>   {showSubmenu ? <FaSortDown /> : <FaSortUp />} </Link>  
                                      <ul className="sub-service " id="sub-service" style={{display: showSubmenu ? 'none' : 'block'}} >
                                           <li><NavLink  to="/" >Tel</NavLink></li>
                                           <li> <NavLink  to="/"  >TV</NavLink></li>
                                           <li> <NavLink  to="/" >Internet</NavLink></li>
                                         </ul> 
                                        
                                        
                         </li>
                         <li>
                                <NavLink to="/contact"  className="nav-links"  > Contact </NavLink>
                        </li>
                         <li>
                      
                         <div className="btns btn-trans" id="btn-trans-lefttoright" onClick={showStateSignUp}>
                                                <div id="slide" className="slide-btn"></div>
                                                <Link to="/" >Sign up</Link>
                           </div>
                         </li>
                      
                        
                     </ul>          
             </nav> :  <nav className="navbar"  > 
             <ul id="nav-links-group">
             
                <li>
                   <NavLink to="/"  className="nav-links"  activeStyle={{ borderBottom: '3px solid  #006DF0' }} > Home </NavLink>
               </li>
              
                <li  className="nav-service">
                <NavLink to="/services"  className="nav-links"  > Services  </NavLink>
                                      <Link to="#"  className="submenu-show-icon" onClick={onClickSubMenu}>   {showSubmenu ? <FaSortDown /> : <FaSortUp />} </Link> 
                                        <ul className="sub-service " id="sub-service" style={{display: showSubmenu ? 'none' : 'block'}} >
                                           <li><NavLink  to="/" >Tel</NavLink></li>
                                           <li> <NavLink  to="/"  >TV</NavLink></li>
                                           <li> <NavLink  to="/" >Internet</NavLink></li>
                                         </ul> 
                                         
                </li>
               
                <li>
                      
                       <NavLink to="/contact"  className="nav-links" > Contact </NavLink>
               </li>
               <li>
                  
                   <div className="btnh btn-trans" id="btn-trans-lefttoright">
                                                <div id="slide" className="slide-btn"></div>
                                                <Link to="/" onClick={showStateSignUp}>Sign up</Link>
                   </div>
               </li>
              </ul>         
           </nav>
          }
             {
            showSignUp ? null :  <SignModal hideSignUp = {hideStateSignUp}/>
          }
           </Row>
        </Container>
    </header>
   { /* <Conta state="showAndHide">{styles => <div  className="anm"  style={styles}>Hello</div>}</Conta> */}
  
    </Router> )
   }   

   export default Header



 

 

