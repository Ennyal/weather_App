import React from 'react'
import { Box } from '@mui/material'
import WeatherNavbar from './WeatherNavbar'
import WeatherResult from './WeatherResult'
import weather from '../Assets/image/WEATHER.jpg'
import styled from '@emotion/styled'
import { useState } from 'react'




const Wheather = () => {

    const[Ans , Setans] = useState({})

    const Container =styled(Box)({
           height:'100vh',
           display:'flex',
           alignItems:'center',
           marginLeft:'15%'
           
    })
  
   const Img =styled(Box)({
        backgroundImage:`url(${weather})`,
        width:'25%',
        height:'80%',
        background:'cover'

   })

  return (
    <Container>
        <Img>

        </Img>

        <Box style={{width:'75%',height:'80%'}}>
          <WeatherNavbar Setans={Setans}/>
          <WeatherResult Ans={Ans}/>
        </Box>
    </Container>
  )
}

export default Wheather