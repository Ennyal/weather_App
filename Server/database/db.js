import mongoose from "mongoose"



const Connection= async(username,password)=>{
const URL=`mongodb://${username}:${password}@ac-escyxlb-shard-00-00.vbpo8ba.mongodb.net:27017,ac-escyxlb-shard-00-01.vbpo8ba.mongodb.net:27017,ac-escyxlb-shard-00-02.vbpo8ba.mongodb.net:27017/?ssl=true&replicaSet=atlas-6z4izz-shard-0&authSource=admin&retryWrites=true&w=majority`;
try{
     await mongoose.connect(URL,{useUnifiedTopology:true,useNewUrlParser:true})
     console.log("Database connected successfully")
}catch(error){
    console.log("Error While Connecting with Database: ", error)
}
}

export default Connection