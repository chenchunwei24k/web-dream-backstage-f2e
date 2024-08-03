import axios from "axios";


const instance = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    // withCredentials: true,
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Origin': '*',
    }
  })
  
  instance.interceptors.request.use(
    function (request) {
      return request
    },
    function (error) {
      return Promise.reject(error)
    }
  )
  
  instance.interceptors.response.use(
    function (response) {
      return response
    },
    function (error) {
      return Promise.reject(error)
    }
  )
  
  export default instance