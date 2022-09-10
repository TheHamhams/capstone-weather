import React from 'react'
import { useUserGet } from '../../custom-hooks/FetchUserForecast'
import { Button, Image } from 'react-bootstrap'


export const Dashboard = () => {
  
  let { userForecast, getUserForecast } = useUserGet()


  console.log(userForecast)


  if (!userForecast) {
    return (
      <div>Loading</div>
      
    )
  }

  return (
    <>
      <div>
        <h1>Forecast for Today</h1>
        {userForecast.detailedForecast} 
        <Image src={userForecast.icon} />
        <p>Current Temperature: {userForecast.temperature}</p>

      </div>
    </>
  )
}
