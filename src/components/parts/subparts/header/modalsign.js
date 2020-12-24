import React , {  useState } from 'react';
import { useSpring, Spring, animated, config } from "react-spring";
import { FaTimes } from 'react-icons/fa';
import {Link,  BrowserRouter as Router } from 'react-router-dom';
import SignInForm from './signin';
import SignUpForm from './signup';

  const SignModal = props =>{

    const [registrationFormStatus, setRegistartionFormStatus] = useState(false);
    const signinProps = useSpring({ 
      left: registrationFormStatus ? -1000 : 0, 
    });
    const signupProps = useSpring({
      left: registrationFormStatus ? 0 : 1000, 
    });

    const formHeightProps = useSpring({
        height: registrationFormStatus ? "800px" : "450px", 
        width: registrationFormStatus ? "1000px" : "500px"
      });
  
    const signinBtnProps = useSpring({
      borderBottom: registrationFormStatus 
        ? "solid 0px transparent"
        : "solid 2px #1059FF", 
    });
    const signupBtnProps = useSpring({
      borderBottom: registrationFormStatus
        ? "solid 2px #1059FF"
        : "solid 0px transparent", 
    });
  
  function signupLinkMenuModClicked() {
    setRegistartionFormStatus(true);
  }
  function signinLinkMenuModClicked() {
    setRegistartionFormStatus(false);
  }

    return(
        <animated.div className="modal-signup-signin" style={formHeightProps} >
        <Link to="#" className="menu-icon" onClick={props.hideSignUp}>
                     <FaTimes /> 
        </Link>
        <div className="linkmenu-buttons">
                   <animated.button className="btn-linkmenu"  onClick={signinLinkMenuModClicked}  id="signin-btn-linkmenu"  style={signinBtnProps}  >
                         Sign In
                  </animated.button>
                  <animated.button onClick={signupLinkMenuModClicked}  id="signup-btn-linkmenu" className="btn-linkmenu" 
                    style={signupBtnProps} >
                         Sign Up
                 </animated.button>
        </div>
        <div className="signup-signin-form-group">
                <animated.form action="" id="signinform" style={signinProps}>
                         <SignInForm/>
               </animated.form>
               <animated.form action="" id="signupform" style={signupProps}>
                         <SignUpForm/>
               </animated.form>
        </div>
        <div id="forgot-panel">
        </div>
    </animated.div>
    
    );
  };

  export default SignModal