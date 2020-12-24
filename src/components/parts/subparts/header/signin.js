import React from 'react';
import { Button } from 'react-bootstrap';
  const SignInForm = () =>{

    return(
     <React.Fragment>
               
                <label htmlFor="signin-email">Email </label>
                <input type="text" name="signin-email" id="signin-email" />
                <label htmlFor="signin-password">Password </label>
                <input type="password" name="signin-password" id="signin-password" /> 
                 <Button  type="submit" name="signin-btn" id="signin-btn" className="btns black-outline-btn">SignIn</Button>
      </React.Fragment>
    
    );
  };

  export default SignInForm

