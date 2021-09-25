import React , {  useState } from 'react';
import { Button ,Row, Col , Image} from 'react-bootstrap';
import { FaUserAlt , FaUpload } from 'react-icons/fa';
import Captcha from '../../../helps/recaptcha';
/*
const handleUpload = async e => {
  e.preventDefault();
  const formData = new FormData();
  formData.append("image", upload.raw);

  await fetch("YOUR_URL", {
    method: "POST",
    headers: {
      "Content-Type": "multipart/form-data"
    },
    body: formData
  });
};
*/
  const SignUpForm = () =>{
 
    const [signUp, setSignUp] = useState(null)
  
    return(
     <>
       <Row>
         <Col lg={12} >
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
                 <Captcha/>
                 <Button type="submit" name="signup-btn" id="signup-btn" className="btns black-outline-btn mt-2">Sign Up</Button>
         </Col>
      
     </Row>
 
      </>
    );
  };

  export default SignUpForm