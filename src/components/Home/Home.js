import React from 'react'
import { useHomeGet } from '../../custom-hooks/FetchHomeForecast'
import { Button, Image } from 'react-bootstrap'


export const Home = () => {

  let { homeForecast, getHomeForecast } = useHomeGet()


  if (!homeForecast) {
    return (
      <div>Loading</div>
    )
  }

  return (
    <>
      <div>
        <h1>Forecast for Today</h1>
        {homeForecast.detailedForecast} 
        <Image src={homeForecast.icon} />
        <p>Current Temperature: {homeForecast.temperature}</p>

      </div>
    </>
  )
}
