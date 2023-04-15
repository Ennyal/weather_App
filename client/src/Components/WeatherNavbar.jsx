import React from 'react'
import { useState } from 'react'
import { Box ,Input,Button } from '@mui/material'
import styled from '@emotion/styled'
import { WeatherApi } from '../service/api'

const Navb = styled(Box)({
    width:'60%',
  background:'#e6e6fa',
  paddingBottom:'30px',
  
 })
const WeatherNavbar = ({Setans}) => {

    const [data , setData]= useState({city:'' , country:''})



const handleChange=(e)=>{
    setData({...data,[e.target.name]:e.target.value})
    console.log(data)
}

    const Getinfo=async()=>{
     let result =  await WeatherApi(data.city,data.country)
     Setans(result)
    }
    

  return (
    <Navb>
         <Input type='text' placeholder='City'
          onChange={(e)=>handleChange(e)}
           name='city'   style={{marginRight:'5px',position:'relative',top:'8px'}}/>

          <Input type='text'
           placeholder='Country'
          onChange={(e)=>handleChange(e)} name='country' style={{marginRight:'5px',position:'relative',top:'8px'}} />

        <Button  style={{background:'#483d8b' ,color:'white',padding:'3px',marginRight:'5px',position:'relative',top:'8px'}} onClick={() => Getinfo()}>Get Weather</Button>
          
    </Navb>
  )
}

export default WeatherNavbar