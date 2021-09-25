import axios from 'axios'; 

const AxiosWebServices = (url,  setGetData , formData = null, setMessage = null, setLoading = false ,  setSuccess = false ,  setError = false , token = null, methodType = 'get') => {
     
 // const baseUrl = process.env.REACT_APP_API_URL
 const baseUrl = process.env.PUBLIC_URL
    
    if(methodType === 'get'){ 
        axios.get(`${baseUrl}/${url}`, formData, {
            Accept : 'application/json'
         /*   headers: {
                Authorization: 'Bearer ' + token
            }*/
        }).then(response => {
            setGetData(response.data)
          }).catch(error => {
            console.error(error)
          });

    }
    if(methodType === 'post'){
        setLoading(true)
         axios.post(`${baseUrl}/${url}`, formData, {
            Accept : 'application/json'
          /*  headers: {
                Authorization: 'Bearer ' + token
            }*/
        }).then(response => {
            setLoading(false)
            setMessage(true)
            setSuccess(response.data)
          }).catch(error => {
            setLoading(false)
            setError(true)
            console.error(error)
          });
    }

    if(methodType === 'put'){
        setLoading(true)
         axios.put(`${baseUrl}/${url}`, formData, {
            Accept : 'application/json'
         /*   headers: {
                Authorization: 'Bearer ' + token
            }*/
        }).then(response => {
            setLoading(false)
            setMessage(true)
            setSuccess(response.data)
          }).catch(error => {
            setLoading(false)
            setError(true)
            console.error(error)
          });
    }

    if(methodType === 'delete'){
        setLoading(true)
         axios.delete(`${baseUrl}/${url}`, {
            Accept : 'application/json'
          /*  headers: {
                Authorization: 'Bearer ' + token
            }*/
        }).then(response => {
            setLoading(false)
            setMessage(true)
            setSuccess(response.data)
          }).catch(error => {
            setLoading(false)
            setError(true)
            console.error(error)
          });
    }
}

export default AxiosWebServices