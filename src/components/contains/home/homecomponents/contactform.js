import React, {useEffect, useState} from 'react';
import { useForm } from "react-hook-form";
import  {Row } from 'react-bootstrap';
import  Spinner  from '../../../spinner/spinner';
import { FaExclamationTriangle , FaRegCheckCircle , FaRegTimesCircle  } from 'react-icons/fa';
import Captcha from '../../../helps/recaptcha';
const ContactForm = props => {


    const [message, setMessage] = useState(false);
        const { register, handleSubmit, errors , formState , setValue } = useForm({
          mode: "onBlur",
          reValidateMode: "onBlur"
        });
        const { isDirty, isValid, touched } = formState;
            
        const [contact, setContact] = useState(null)
        const [success, setSuccess] = useState(null)
        const [loading, setLoading] = useState(false)
    console.log(contact)
        const handleClose = () => setMessage(false);
    
        useEffect(() => {
       
          register({ name: 'captchaToken' }, { required: true })
       /*   if(contact !== null)
          ContactEmail(contact, setSuccess,  setMessage,setLoading , lang)*/
       
        }, [contact, register])
    
        let lngSuccess = ""
        if(success !== null){
           lngSuccess = success.split("-");
        }
    
    const onVerifyCaptcha = (token) => {
      setValue('captchaToken' , token ,{
       shouldValidate: true,
       shouldDirty: true
     })
    };
    
    const formIconValid = (error) => {
      const valid = typeof error == 'undefined'  ? <FaRegCheckCircle size={18} style={{ fill: '#00AB66' }} /> : <FaRegTimesCircle size={18} style={{ fill: '#e60000' }} /> 
      return valid 
    }
    
     // const onSubmit = data => setContact(data);
     const onSubmit = data => {
          setContact(data);
          setLoading(true)
     } 

   return(
    <>
 
   <form name="contact-form-send-data" onSubmit={handleSubmit(onSubmit)}>
      <Row>
        <div className="fields-group">
                <label htmlFor="contact-name">First and last name:</label>
                 <input type="text" name="contactname" id="contact-name"  ref={register({ required: true, pattern:{ value: /^[A-ZŠĐČĆŽ][a-zšđčćž]{3,20}(\s[A-ZŠĐČĆŽ][a-zšđčćž]{3,20})+$/ } })} placeholder="Robert Deniro" />
                    <span className="form-icon">  { touched.contactname === true ? formIconValid(errors.contactname) : null }  </span>
                   {errors.contactname?.type === "required" &&  <p  className="error-valid-text"> <FaExclamationTriangle color="#ff0000"/> First and last name are required </p> }
                    {errors.contactname?.type === "pattern" &&  <p  className="error-valid-text"> <FaExclamationTriangle color="#ff0000"/> First and last name are not valid ,they should have first uppercase letter and other lowercase letters </p> }
        </div> 
     </Row>
      <Row>
         <div className="fields-group">
              <label htmlFor="contact-email">Email address:</label>
               <input type="text" name="contactemail" id="contact-email"  ref={register({ required:  true  , pattern :{ value: /^[a-z][a-z0-9\_\-\.]{3,25}(\@)(gmail|hotmail|yahoo|example)(\.)(com)$/ }  })} placeholder="robertdeniro@gmail.com"
                />
                  <span className="form-icon"> { touched.contactemail === true ? formIconValid(errors.contactemail) : null } </span>
              {errors.contactemail?.type === "required" &&  <p  className="error-valid-text"><FaExclamationTriangle color="#ff0000"/> Email address is required </p> }
              {errors.contactemail?.type === "pattern" &&  <p  className="error-valid-text"><FaExclamationTriangle color="#ff0000"/> Email address not valid </p> }
         </div>
      </Row>
       <Row>
         <div className="fields-group">
               <label htmlFor="contact-message">Message:</label>
                <textarea rows="1" name="contactmessage" id="contact-message"   ref={register({ required:  true , minLength: 3  , maxLength: 1000})}  ></textarea>
                <span className="form-icon">  { touched.contactmessage=== true ? formIconValid(errors.contactmessage) : null } </span>
                {errors.contactmessage?.type === "required" &&     <p className="error-valid-text"> <FaExclamationTriangle color="#ff0000"/> Message is required  </p> }
                {errors.contactmessage?.type === "maxLength" && <p className="error-valid-text"> <FaExclamationTriangle color="#ff0000"/> Message not valid, it should have max 1000 characters  </p> } 
                {errors.contactmessage?.type === "minLength" &&  <p className="error-valid-text"> <FaExclamationTriangle color="#ff0000"/> Message not valid, it should have min 3 characters </p> } 
           </div>
       </Row>  
       <Row>
           <Captcha onVerifyCaptcha={onVerifyCaptcha} />
           
       </Row>   
       <Row>
               <button type="submit" id="btn-contactform" name="btn-contactform" className="btns black-outline-btn" style={{opacity: !isValid || !isDirty  ? 0.5 : 1 }} disabled={!isValid || !isDirty  }  > Send </button>
       </Row> 
       
  </form>

     {
       loading && <Spinner/>
     }

</>
   )        
}

export default ContactForm