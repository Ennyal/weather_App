import React, { useState } from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { styled } from '@mui/material/styles';
import { NavLink } from 'react-router-dom';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
//styles str
const Header=styled(AppBar)`
background:#111111`

const Tabs = styled(NavLink)`font-size:20px;margin-right:20px ; color:inherit; text-Decoration:none`

 const getUserData=()=>{
  if(localStorage.userInfo){
     return JSON.parse(localStorage.userInfo)
   }else {
    return {}
   }
   }


    


const NavBar = () => {
  const navigate = useNavigate() 
   

  return (
    <Header position='static'>
        <Toolbar>
            <Tabs to='/'>Project</Tabs>
            <Tabs to='/all'>All Users</Tabs>
            <Tabs to='/add'>Add User</Tabs>
            <Tabs to="/Weather"> Weather</Tabs>
            
            <div >
             <Tabs style={{marginLeft:'800px'}} > User - {(getUserData().name)} </Tabs>
           <Button onClick={()=>{localStorage.removeItem("userInfo") 
           navigate('/')
           }}> LOgout</Button>
           <Button component={Link} to={`/edit/${(getUserData()._id)}`} >User</Button>
             
           </div>
        </Toolbar>
    </Header>
  )
}

export default NavBar