import React from 'react'
import { Image } from 'react-bootstrap'
import { useUserGet } from '../../custom-hooks/FetchUserForecast'
import { useProfileGet } from '../../custom-hooks/FetchProfile'
import { Container } from 'react-bootstrap'

export const UserForecast = () => {
    let { userForecast, getUserForecast } = useUserGet()
    const { userProfile, setProfile } = useProfileGet()


  if (!userForecast || !userProfile) {
    return null
  }

  return (
    <div className='py-3 ' style={{'backgroundImage': `url(${userForecast.icon})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
      <Container className='rounded py-3 border col-4 mb-3 container-bg'>
        
        <h2>Forecast for {userProfile.city}, {userProfile.state}</h2>
        <h4>Current Temperature: {userForecast.temperature} F &emsp; <Image src={userForecast.icon} /></h4>
        {userForecast.detailedForecast} 
        
      </Container>
    </div>
  )
}
