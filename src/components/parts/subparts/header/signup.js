import React , {  useState } from 'react';
import { Button ,Row, Col , Image} from 'react-bootstrap';
import { FaUserAlt , FaUpload } from 'react-icons/fa';
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
    const [upload, setUpload] = useState({ preview: "", raw: "" });

    const handleChange = e => {
      if (e.target.files.length) {
        setUpload({
          preview: URL.createObjectURL(e.target.files[0]),
          raw: e.target.files[0]
        });
      }
    };

    console.log(upload);
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
                
              <div id="uploadPhoto-signup-group"> 
                      <input type="file" name="uploadPhotoSignup" id="uploadPhotoSignup"    style={{ display: 'none' }}  onChange={ handleChange}  /> 
                      <label htmlFor="uploadPhotoSignup">
                         {upload.preview ?<div className="showPhoto-signup"> <Image id="showPhoto-signup-img" src={upload.preview} rounded />  </div> : (
                            <>
                               <div className="upload-icon" id="upload-icon-signup">
                                 <FaUpload/>
                               </div>
                               <p>Upload your photo</p>
                            </>)}
                        </label>
                        <Button type="button" className="btns btn-trans" id="btnPhotoSignup" >Add photo</Button> 
               </div>    
        </Col>
        <Col s={12} md={6} lg={6}>
               <Button type="submit" name="signup-btn" id="signup-btn" className="btns black-outline-btn mt-2">Sign Up</Button>
        </Col>
     
     </Row>
 
       
       
               
      
      </React.Fragment>
    );
  };

  export default SignUpForm