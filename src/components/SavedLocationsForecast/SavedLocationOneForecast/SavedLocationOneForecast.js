import React from 'react'
import { Image } from 'react-bootstrap'
import { useSavedOneForecastGet } from '../../../custom-hooks/FetchSavedOneForecast'
import { useSavedOneGet } from '../../../custom-hooks/FetchSavedOne'

export const SavedLocationOneForecast = () => {
    let { savedOneForecast, getSavedOneForecast } = useSavedOneForecastGet()
    const {savedOne, setSavedOne} = useSavedOneGet()


  if (!savedOneForecast || !savedOne) {
    return null
  }

  return (
    <>
      <div>
        <h1>Forecast for Today</h1>
        <p>Location: {savedOne.city}, {savedOne.state}</p>
        {savedOneForecast.detailedForecast} 
        <br/>
        <Image src={savedOneForecast.icon} />
        <p>Current Temperature: {savedOneForecast.temperature}</p>

      </div>
    </>
  )
}