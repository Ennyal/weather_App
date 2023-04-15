import React from 'react'
import { getUsers } from '../service/api'
import { useEffect } from 'react'
import {Table,TableHead,TableRow,TableCell,TableBody, Button} from '@mui/material'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { deleteUser } from '../service/api'

const AllUsers = () => {

const [users,setUsers]=useState([])



    useEffect(()=>{
       getAllUsers();
       
    },[])

    const getAllUsers= async()=>{
       let response=  await getUsers ();
       setUsers(response.data);
    }

    const deleteUserDetails = async (id)=>{
      await deleteUser(id);
      getAllUsers()
    }

     
     
  return (
    <Table>
    
       <TableHead>
        <TableRow>
          <TableCell>Id</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Username</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Phone</TableCell>
          <TableCell>Action</TableCell>
          
        </TableRow>
       </TableHead>
       <TableBody>
                {
                  users.map(user =>(
                    <TableRow>
                      <TableCell>{user._id}</TableCell>
                      <TableCell>{user.name}</TableCell>
                      <TableCell>{user.username}</TableCell>
                      <TableCell>{user.email}</TableCell>
                      <TableCell>{user.phone}</TableCell>
                      <TableCell>
                         <Button variant='contained' style={{marginRight:10}} component={Link} to={`/edit/${user._id}`} >Edit</Button>
                         <Button variant='contained' color='secondary' onClick={()=> deleteUserDetails(user._id)}>Delete</Button>
                      </TableCell> 
                    </TableRow>
                  ))
                }
       </TableBody>
    
    </Table>
  )
}

export default AllUsers