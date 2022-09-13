import React from 'react'
import { Container, Image } from 'react-bootstrap'
import { useSavedOneForecastGet } from '../../../custom-hooks/FetchSavedOneForecast'
import { useSavedOneGet } from '../../../custom-hooks/FetchSavedOne'

export const SavedLocationOneForecast = () => {
    let { savedOneForecast, getSavedOneForecast } = useSavedOneForecastGet()
    const {savedOne, setSavedOne} = useSavedOneGet()


  if (!savedOneForecast || !savedOne) {
    return null
  }

  return (
    <div className='py-3 col-4' style={{'backgroundImage': `url(${savedOneForecast.icon})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
      <Container className='rounded py-3 border mb-5 container-bg'>
        
        <h2>Forecast for {savedOne.city}, {savedOne.state}</h2>
        <h4>Current Temperature: {savedOneForecast.temperature} F &emsp; <Image src={savedOneForecast.icon} /></h4>
        {savedOneForecast.detailedForecast} 
        
      </Container>
    </div>
  )
}