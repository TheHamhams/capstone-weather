import React from 'react'
import { Image } from 'react-bootstrap'
import { useSavedThreeForecastGet } from '../../../custom-hooks/FetchSavedThreeForecast'
import { useSavedThreeGet } from '../../../custom-hooks/FetchSavedThree'
import { Container } from 'react-bootstrap'

export const SavedLocationThreeForecast = () => {
    let { savedThreeForecast, getSavedThreeForecast } = useSavedThreeForecastGet()
    const {savedThree, setSavedThree} = useSavedThreeGet()


  if (!savedThreeForecast || !savedThree) {
    return null
  }

  return (
      <div className='py-3 col-4' style={{'backgroundImage': `url(${savedThreeForecast.icon})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
      <Container className='rounded py-3 border mb-5 container-bg'>
        
        <h2>Forecast for {savedThree.city}, {savedThree.state}</h2>
        <h4>Current Temperature: {savedThreeForecast.temperature} F &emsp; <Image src={savedThreeForecast.icon} /></h4>
        {savedThreeForecast.detailedForecast} 
        
      </Container>
    </div>
  )
}