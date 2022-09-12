import React from 'react'
import { Image } from 'react-bootstrap'
import { useUserGet } from '../../custom-hooks/FetchUserForecast'
import { useProfileGet } from '../../custom-hooks/FetchProfile'

export const UserForecast = () => {
    let { userForecast, getUserForecast } = useUserGet()
    const { userProfile, setProfile } = useProfileGet()


  if (!userForecast || !userProfile) {
    return null
  }

  return (
    <>
      <div>
        <h1>Forecast for Today</h1>
        <p>Location: {userProfile.city}, {userProfile.state}</p>
        {userForecast.detailedForecast} 
        <br/>
        <Image src={userForecast.icon} />
        <p>Current Temperature: {userForecast.temperature}</p>

      </div>
    </>
  )
}
