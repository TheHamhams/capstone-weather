import React from 'react'
import { Image } from 'react-bootstrap'
import { useSavedTwoForecastGet } from '../../../custom-hooks/FetchSavedTwoForecast'
import { useSavedTwoGet } from '../../../custom-hooks/FetchSavedTwo'
import { Container }  from 'react-bootstrap'

export const SavedLocationTwoForecast = () => {
    let { savedTwoForecast, getSavedTwoForecast } = useSavedTwoForecastGet()
    const {savedTwo, setSavedTwo} = useSavedTwoGet()


  if (!savedTwoForecast || !savedTwo) {
    return null
  }

  return (
      <div className='py-3 col-4' style={{'backgroundImage': `url(${savedTwoForecast.icon})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
      <Container className='rounded py-3 border mb-5 container-bg'>
        
        <h2>Forecast for {savedTwo.city}, {savedTwo.state}</h2>
        <h4>Current Temperature: {savedTwoForecast.temperature} F &emsp; <Image src={savedTwoForecast.icon} /></h4>
        {savedTwoForecast.detailedForecast} 
        
      </Container>
    </div>
  )
}