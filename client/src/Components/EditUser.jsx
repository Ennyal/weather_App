import styled from '@emotion/styled'
import { Button, FormControl, FormGroup, Input, InputLabel, Typography } from '@mui/material'
import React, { useState } from 'react'
import { getUser ,editUser } from '../service/api'
import {useParams} from 'react-router-dom'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'


//Styled str
const Container = styled(FormGroup)`
width:50%;
margin:5% auto 0 auto;
& > div {
  margin-top:20px
}`
//styled end

const defaultValue= {
    name:'',
    username:'',
    email:'',
    password:'',
    phone:''
}

const   EditUser = () => {
      const[user,setUser]=useState(defaultValue)
      
      const navigate = useNavigate();
      
      const{id} = useParams();

      useEffect(()=>{
           loadUserDetails();
      },[])

      const loadUserDetails = async()=>{
          const responces = await getUser(id)
              setUser(responces.data)

      }

    const onValueChange=(e)=>{
        setUser({...user,[e.target.name]: e.target.value})
         }
    const editUserDetails = async()=>{
        await editUser(user, id);
        navigate('/all')
    }
       

  return (
    <Container>
        <Typography variant='h4'>Edit User Details</Typography>
        <FormControl>
            <InputLabel>name</InputLabel>
             <Input onChange={(e)=> onValueChange(e)} name='name' value={user.name} />
        </FormControl>
        <FormControl>
            <InputLabel>UserName</InputLabel>
             <Input onChange={(e)=> onValueChange(e)} name='username' value={user.username}/>
        </FormControl>
        <FormControl>
            <InputLabel>Email</InputLabel>
             <Input onChange={(e)=> onValueChange(e)} name='email' value={user.email}/>
        </FormControl>
        <FormControl>
            <InputLabel>Password</InputLabel>
             <Input type='password' onChange={(e)=> onValueChange(e)} name='password' value={user.password}/>
        </FormControl>
        <FormControl>
            <InputLabel>Phone</InputLabel>
             <Input onChange={(e)=> onValueChange(e)} name='phone' value={user.phone}/>
        </FormControl>
        <FormControl>
            <Button variant='contained' onClick={()=>editUserDetails()} >Edit User</Button>
        </FormControl>
    </Container>
  )
}

export default   EditUser