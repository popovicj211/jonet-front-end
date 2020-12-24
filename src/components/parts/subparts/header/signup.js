import React from 'react';
import { Button ,Row, Col, Image} from 'react-bootstrap';
  const SignUpForm = () =>{
    return(
     <React.Fragment>
       <Row>
         <Col s={12} md={6} lg={6}>
                <label htmlFor="signup-name">Name </label>
                <input type="text" name="signup-name" id="signup-name" />
                <label htmlFor="signup-username">Username </label>
                <input type="text" name="signup-username" id="signup-username" />
                <label htmlFor="signup-email">Email </label>
                <input type="text" name="signup-email" id="signup-email" />
                <label htmlFor="signup-password">Password </label>
                <input type="password" name="signup-password" id="signup-password" /> 
                <label htmlFor="signup-confirm-password">Confirm password </label>
                 <input type="password" name="signup-confirm-password" id="signup-confirm-password" />
                
         </Col>
         <Col s={12} md={6} lg={6}>
                  <Image src="holder.js/171x180" rounded />
                  <label htmlFor="signup-file">Choose photo</label>
                  <input type="file" name="signup-file" id="signup-file" />
                  <label htmlFor="signup-tel">Tel </label>
                  <input type="text" name="signup-tel" id="signup-tel" />
        </Col>
        <Col s={12} md={6} lg={6}>
               <Button type="submit" name="signup-btn" id="signup-btn" className="btns black-outline-btn mt-2">Sign Up</Button>
        </Col>
     
     </Row>
 
       
       
               
      
      </React.Fragment>
    );
  };

  export default SignUpForm