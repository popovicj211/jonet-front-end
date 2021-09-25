import React, { useEffect, useState } from 'react';
import {Container,Row , Col , Button } from 'react-bootstrap';
//import './header.css';
import {Link,  BrowserRouter as Router } from 'react-router-dom';
import { FaBars, FaTimes ,FaCaretDown , FaCaretUp } from 'react-icons/fa';
import  useWindowDimensions from '../helps/getWindowDimensions';
import { useSpring, Spring, animated, config } from "react-spring";
import {Keyframes, Trail } from 'react-spring/renderprops';
import delay from 'delay'
import SignModal from './subparts/header/modalsign';
import { HashLink as NavLink} from 'react-router-hash-link';

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


/*

 <ul className="nav-links-group links-group">
                         <li>
                            <NavLink to="/"  className="nav-links" activeStyle={{ color: '#006DF0' }} > Home </NavLink>
                        </li>                   
                         <li className="nav-service"  style={{height: showSubmenu ? '40px' : '190px'}}>                    
                         <NavLink to="/services"  className="nav-links"  > Services  </NavLink>
                         <Link to="#" id="submenu-icon-header" className="submenu-show-icon" onClick={onClickSubMenu}>   {showSubmenu ? <FaCaretDown /> : <FaCaretUp />} </Link>  
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

*/


    return(
    <header>
        <Container>
            <Row>
            <Col  md={6}>
            <Link to="/" className="navbar-logo"> JoNet  <p>BROADBAND AND TELECOM</p></Link>
            </Col>
           
             <Col  md={6}>
             {
              navBarClass ?  
              show ? null :  <nav className="nav-sidebar" > 
          
              <div className="nav-sidebar-logo">
                        <Link to="/" className="navbar-logo"> JoNet  <p>BROADBAND AND TELECOM</p></Link>
              </div>
            
   
       <ul className="list-group nav-links-group">
                <li>  <NavLink to="/"  className="nav-links list-group-item list-group-item-action"  > Home </NavLink> </li>
                 <li className="nav-service"  style={{height: showSubmenu ? '55px' : '220px'}}>                    
                         <NavLink to="/#services" smooth className="nav-links list-group-item list-group-item-action"  > Services  </NavLink>
                         <button id="submenu-icon-header" className="submenu-show-icon" onClick={onClickSubMenu}>   {showSubmenu ? <FaCaretDown /> : <FaCaretUp />} </button>  
                                      <ul className="sub-service list-group " id="sub-service" style={{display: showSubmenu ? 'none' : 'block'}} >
                                           <li><NavLink  to="/" >Net</NavLink></li>
                                           <li> <NavLink  to="/"  >TV</NavLink></li>
                                           <li> <NavLink  to="/" >Net + Tv</NavLink></li>
                                           <li> <NavLink  to="/" >Net + Tv + Tel</NavLink></li>
                                         </ul> 
                                        
                                         
                         </li>
                         <li>
                                <NavLink to="/#contact" smooth className="nav-links list-group-item list-group-item-action"  > Contact </NavLink>
                        </li>
                         <li>
                      
                         <div className="btns btn-trans" id="btn-trans-lefttoright" onClick={showStateSignUp}>
                                                <div id="slide" className="slide-btn"></div>
                                                <Link to="/" >Sign up</Link>
                           </div>
                         </li>
        </ul>

             </nav> :  <nav className="navbar"  > 

             <ul className="nav-links-group">
             
                <li>
                   <NavLink to="/"  className="nav-links"  > Home </NavLink>
               </li>
              
                <li  className="nav-service">
                <NavLink to="/#services" exact  smooth  className="nav-links"  > Services  </NavLink>
                                      <button id="submenu-icon-header" className="submenu-show-icon" onClick={onClickSubMenu}>   {showSubmenu ?<FaCaretDown /> : <FaCaretUp />} </button> 
                                        <ul className="sub-service " id="sub-service" style={{display: showSubmenu ? 'none' : 'block'}} >
                                           <li><NavLink  to="/" >Net</NavLink></li>
                                           <li> <NavLink  to="/"  >TV</NavLink></li>
                                           <li> <NavLink  to="/" >Net + Tv</NavLink></li>
                                           <li> <NavLink  to="/" >Net + Tv + Tel</NavLink></li>
                                         </ul> 
                                         
                </li>
               
                <li>
                      
                       <NavLink to="/#contact" exact  smooth  className="nav-links" > Contact </NavLink>
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
          </Col>
           
          <Col  md={12}>
             {
            showSignUp ? null :  <SignModal hideSignUp = {hideStateSignUp}/>
          }
            </Col> 
            <Link to="#" className="menu-icon" id="menu-icon-header" onClick={onClickMenuIcon}>
                               {click ? <FaTimes /> : <FaBars />}
             </Link>
           </Row>
        </Container>
    </header>
   )
   }   

   export default Header



 

 

