import axios from 'axios'

const URL ='http://localhost:8000';

const API_KEY ='ac34979bf1dfdb6ae458082140f2b409';
const API_URL ='https://api.openweathermap.org/data/2.5/weather'


export const WeatherApi =async(city,country)=>{
    try{

        const responce =await axios.get(`${API_URL}?q=${city},${country}&appid=${API_KEY}&units=metrics`)
         return responce.data;
    }catch(error){
        console.log('Error while calling weather Api' ,error)
    }
}

export const addUser = async(data) =>{
    try{
        return await axios.post(`${URL}/add`,data)

    }catch(error){
        console.log("Error While Calling Add User Api " , error)
    }
}

export const getUsers= async()=>{
    try{
        return await axios.get(`${URL}/all`)
    }catch(error){
        console.log("Error will calling GetuserApi " , error)
    }
}

export const getUser = async(id)=>{
    try{
   return await axios.get(`${URL}/${id}`)
    }catch(error){
        console.log("Error while calling getuser API  ",error)
    }
}

export const editUser = async(user, id)=>{
    try{
         return await axios.put(`${URL}/${id}`,user)
    }catch(error){
        console.log("Error while calling edituser API  ",error)
    }
}

export const deleteUser = async(id)=>{
    try{
        await axios.delete(`${URL}/${id}`)
    }catch(error){

    }
}

export const userLogin = async(data)=>{
    try{
     return (await axios.post(`${URL}/login`,data))
      

    }catch(error){
      console.log("error while calling userLogin " ,error)
    }
}