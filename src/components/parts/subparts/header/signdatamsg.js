   import {useState, useEffect} from 'react';
   import {SignIn , SignUp} from '../../../../services/api/user';
  const SignDataMsg = ({data, register, signIn = true }) => {

    const [success, setSuccess] = useState(null)
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState(null)
    useEffect(() => {
        if(signIn)
        SignIn(data, setSuccess, setMessage, setLoading);
        else
        SignUp(data , setSuccess, setMessage, setLoading);
        register({ name: 'captchaToken' }, { required: true })
        return () => console.log("Unmount")
        
    }, [data])

    return [success,loading,message , setMessage] 
  }
  export default SignDataMsg 

  