import React from 'react'
import { Image } from 'react-bootstrap'
import { useSavedTwoForecastGet } from '../../../custom-hooks/FetchSavedTwoForecast'
import { useSavedTwoGet } from '../../../custom-hooks/FetchSavedTwo'

export const SavedLocationTwoForecast = () => {
    let { savedTwoForecast, getSavedTwoForecast } = useSavedTwoForecastGet()
    const {savedTwo, setSavedTwo} = useSavedTwoGet()


  if (!savedTwoForecast || !savedTwo) {
    return null
  }

  return (
    <>
      <div>
        <h1>Forecast for Today</h1>
        <p>Location: {savedTwo.city}, {savedTwo.state}</p>
        {savedTwoForecast.detailedForecast} 
        <br/>
        <Image src={savedTwoForecast.icon} />
        <p>Current Temperature: {savedTwoForecast.temperature}</p>

      </div>
    </>
  )
}