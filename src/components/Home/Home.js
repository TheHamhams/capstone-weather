import React from 'react'
import { useHomeGet } from '../../custom-hooks/FetchHomeForecast'
import { Container, Image } from 'react-bootstrap'


export const Home = () => {

  let { homeForecast, getHomeForecast } = useHomeGet()


  if (!homeForecast) {
    return (
      <div>Loading</div>
    )
  }

  return (
    <div style={{'backgroundImage': `url(${homeForecast.icon})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '100vh'}}>
      <br/>
      <Container className='rounded py-3 border col-4 mb-5 container-bg'>
      <h1 className='text-center'>Weather to Go Out Today</h1>
      </Container>
      
      <Container className='rounded py-3 border col-4 mb-5 container-bg'>
        <p>
          Welcome! Our app allows you to keep track of today's forecast for your location as well as up to 3 custom locations. 
        </p>
        <p>
          All you need to do is sign up, choose your locations, and visit your dashboard! Simple as that!
        </p>
      </Container>

      <Container className='container-bg rounded py-3 col-5 border' >
        <h2>Forecast for Today </h2>
        <h4><strong>Location:</strong> Everett, WA</h4>
        <h4>Current Temperature: {homeForecast.temperature} F &emsp; <Image src={homeForecast.icon} /></h4>
        <h4>{homeForecast.detailedForecast}</h4> 
        
      </Container>
    </div>
  )
}
