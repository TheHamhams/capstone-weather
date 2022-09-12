import React from 'react'
import { Image } from 'react-bootstrap'
import { useSavedThreeForecastGet } from '../../../custom-hooks/FetchSavedThreeForecast'
import { useSavedThreeGet } from '../../../custom-hooks/FetchSavedThree'

export const SavedLocationThreeForecast = () => {
    let { savedThreeForecast, getSavedThreeForecast } = useSavedThreeForecastGet()
    const {savedThree, setSavedThree} = useSavedThreeGet()


  if (!savedThreeForecast || !savedThree) {
    return null
  }

  return (
    <>
      <div>
        <h1>Forecast for Today</h1>
        <p>Location: {savedThree.city}, {savedThree.state}</p>
        {savedThreeForecast.detailedForecast} 
        <br/>
        <Image src={savedThreeForecast.icon} />
        <p>Current Temperature: {savedThreeForecast.temperature}</p>

      </div>
    </>
  )
}