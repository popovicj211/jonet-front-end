import React from 'react';
import ReCAPTCHA from "react-google-recaptcha";


const Captcha = props => {

// localhost
//const apiKey = "6LdgqSYaAAAAAERQQRQUye3E5iw8A1b41ZcHkIf0";
function onChange(value) {
  props.onVerifyCaptcha(value)
}

let recaptchaInstance

return(
  <ReCAPTCHA
  sitekey= "6LferKUaAAAAAMwgYQwBEIp9oHtD7ode8le_sQaV"
  onChange={onChange}  
  ref={(e) => {recaptchaInstance = e; }}
  />
)
}

export default Captcha


