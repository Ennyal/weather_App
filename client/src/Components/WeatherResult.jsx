import React from 'react'
import { Box } from '@mui/material'

const WeatherResult = ({Ans}) => {
console.log(Ans)

  return (
    
        Ans && Object.keys(Ans).length>0 ? <Box>
      <p> Location : {Ans.name} </p>
     {Ans.main.temp}
       
        </Box>: <p>Please Enter a location above to see weather</p>
  )
}

export default WeatherResult