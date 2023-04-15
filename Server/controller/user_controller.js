import { request, response } from "express";
import User from "../schema/user_schema.js";


export const addUser= async(request,response)=>{
    const user = request.body;
    const newUser = new User(user)
     
    try{
     await newUser.save()
     response.status(201).json(newUser)
    }catch(error){
      response.status(409).json({message:error.message})
    }
  }

  export const getUsers= async(request,response)=>{
    try{
      const users=await  User.find({})
      response.status(200).json(users)
    }catch(error){
      response.status(404).json({message:error.message})
    }
  }

  export const getUser= async (request,responce)=>{

    try{
        const users = await User.findOne({_id:request.params.id})
        responce.status(200).json(users)
    }catch(error){
      responce.status(404).json({message:error.message})
    }
  }

  export const editUser = async(request,response)=>{
let user = request.body;
const editUser = new User(user)
   try{
    await User.updateOne({_id:request.params.id},editUser);
    response.status(201).json(editUser);
   }catch(error){
      response.status(409).json({message:error.message})
   }

  }

  export const deleteUser = async(request,response)=>{
    try{
         await User.deleteOne({_id:request.params.id})
          response.status(200).json({message:"user Deleted succesfully"})
    }catch(error){
      response.status(409).json({message:error.message});
    }
  }


  

export const logUser= async(request,responce)=>{
  
      const log= await User.findOne({
        email:request.body.email,
        })

        if(log.password == request.body.password){
          console.log(log)
        return responce.status(200).send(log)

        
        
        }

}

