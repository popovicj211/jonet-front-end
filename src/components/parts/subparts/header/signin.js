import React , {useState, useEffect} from 'react';
import { useForm } from "react-hook-form";
import { Button } from 'react-bootstrap';
import { FaExclamationTriangle , FaRegCheckCircle , FaRegTimesCircle  } from 'react-icons/fa';
import Success from '../../../helps/hooks/messages';
import Spinner from '../../../helps/hooks/spinner';
import SignDataMsg from './signdatamsg';
import {FaFacebook,FaInstagram } from 'react-icons/fa';

  const SignInForm = () =>{

 
    const { register, handleSubmit, errors , formState , setValue } = useForm({
      mode: "onBlur",
      reValidateMode: "onBlur"
    });
    const { isDirty, isValid, touched } = formState;
        
    const [signIn, setSignIn] = useState(null)
    const [success,loading,message, setMessage ]  = SignDataMsg({signIn , register});

    const handleClose = () => setMessage(false);
/*
    useEffect(() => {
   
      register({ name: 'captchaToken' }, { required: true })

    }, [ register])
*/
 
/*
const onVerifyCaptcha = (token) => {
  setValue('captchaToken' , token ,{
   shouldValidate: true,
   shouldDirty: true
 })
};*/

const formIconValid = (error) => {
  const valid = typeof error == 'undefined'  ? <FaRegCheckCircle size={18} style={{ fill: '#00AB66' }} /> : <FaRegTimesCircle size={18} style={{ fill: '#e60000' }} /> 
  return valid 
}

  const onSubmit = data => setSignIn(data);

    return(
     <>    
       <form>
                <label htmlFor="signin-email">Email </label>
                <input type="text" name="signinemail" id="signin-email" ref={register({ required: "Email is required."  , pattern :{ value: /^[a-z][a-z0-9\_\-\.]{3,25}(\@)(gmail|example|hotmail|yahoo)(\.)(com)$/ }  })} />
                <label htmlFor="signin-password">Password </label>
                <input type="password" name="signinpassword" id="signin-password"  ref={register({ required: "Password is required."  , pattern :{ value: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\/\$\#\@\^])[A-Za-z\d]{8,}$/ }  })}/> 
              
                 <Button  type="submit" name="signinbtn" id="signin-btn" className="btns black-outline-btn">SignIn</Button>
                 <FaFacebook/> <FaInstagram/> 
     </form>
                 { 
  
  loading && <Spinner/> 

}
  <Success message={message} handleClose={handleClose} success={success}  />
      </>
    
    );
  };

  export default SignInForm

