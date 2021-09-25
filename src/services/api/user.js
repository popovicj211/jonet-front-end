import axios from 'axios';

const SignIn = (signIn, setSuccess, setMessage, setLoading) => {
    setLoading(true)
    const url = `${process.env.REACT_APP_API_URL}/auth/signin`;
    axios.post(url, signIn, {
        Accept : 'application/json'
    }).then(response => {
        setLoading(false)
        setMessage(true)
        setSuccess(response.data)
    }).catch(error => {
        setLoading(false)
      console.error(error)
    });
    
   
}
const SignUp = (signUp , setSuccess, setMessage, setLoading)=> {
    const url = `${process.env.REACT_APP_API_URL}/auth/signup`;
    setLoading(true)
    axios.post(url, signUp, {
        Accept : 'application/json'
    }).then(response => {
        setLoading(false)
        setMessage(true)
        setSuccess(response.data)
    }).catch(error => {
        setLoading(false)
      console.error(error)
    });
    
   
}

export {
       SignUp,
       SignIn
}