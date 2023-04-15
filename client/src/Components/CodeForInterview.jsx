import React, { useState } from 'react'
import { FormControl, FormGroup, InputLabel,Input, Typography,styled, Button } from '@mui/material'
import { userLogin } from '../service/api'
import { useNavigate } from 'react-router-dom'

//styled str
const Container = styled(FormGroup)`
width:50%;
margin:5% auto 0 auto;
& > div{
  margin-top:20px;
}
`
//styled end

const defaultValue={
 email:'',
 password:''
}

  

const CodeForInterview = () => {

  const navigate = useNavigate()

  const [login,setLogin]=useState(defaultValue)
  const [error , setError] =useState('')

     const onValueChange=(e)=>{
       console.log(e.target.name,e.target.value)
       setLogin({...login,[e.target.name]:e.target.value})
       }

       const loginUser = async()=>{
           
            const Success = await userLogin(login)
           if(Success){
            navigate("/all")
            localStorage.setItem("userInfo",JSON.stringify(Success.data))
            
           }else{
            setError("Incorrect Crendentials")
           }
       }

  return (
    <Container>
      <Typography variant="h4"> Login Please </Typography>
      <FormControl>
        <InputLabel> Email </InputLabel>
        <Input onChange={(e)=> onValueChange(e)} name='email' />
      </FormControl>
      <FormControl>
        <InputLabel> Password </InputLabel>
        <Input type="Password" onChange={(e)=> onValueChange(e)}  name='password'/>
      </FormControl>
      <FormControl style={{marginTop:50}}>
        <Button variant='outlined' onClick={()=> loginUser()}>Login</Button>
      </FormControl>
      <p>{error}</p>
          

    </Container>
  )
}

export default CodeForInterview