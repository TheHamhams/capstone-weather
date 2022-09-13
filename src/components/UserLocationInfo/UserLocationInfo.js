import React from 'react'
import { useProfileGet } from '../../custom-hooks/FetchProfile'
import { Container } from 'react-bootstrap'
import { UserLocationForm } from '../UserLocationForm'

export const UserLocationInfo = () => {
  const { userProfile, setProfile } = useProfileGet()

  if (!userProfile) {
    return null
  }
  return (
    <Container className="text-center py-3 border container-bg col-4 mb-3">
    <h1>User Location Information</h1>

    {!userProfile.city && 
      <UserLocationForm update={false} />
    }

    {userProfile.city && 
      <>
        <h4>{userProfile.city}, {userProfile.state}</h4>
        <UserLocationForm update={true} />
      </>
    }

  </Container>
  )
}
