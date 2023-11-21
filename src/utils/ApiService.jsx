import axios from "axios";

const AxiosService = axios.create({
    baseURL:`${import.meta.env.VITE_API_URL}`,
    headers:{
        'Content-Type':"application/json",
    }
}) 

AxiosService.interceptors.request.use(cofig=>{
    const token = sessionStorage.getItem('token')
    if(token)
    {
        config.headers.Authorization = `bearer ${token}`
        return config
    }
})

export default AxiosService