import React from 'react'
import { useUserGet } from '../../custom-hooks/FetchUserForecast'
import { Button, Image } from 'react-bootstrap'
import { useAuth0 } from '@auth0/auth0-react'
import { UserForecast } from '../UserForecast'
import { SavedLocationOneForecast, SavedLocationTwoForecast, SavedLocationThreeForecast } from '../SavedLocationsForecast'


export const Dashboard = () => {
  let { user, isLoading } = useAuth0()


  if ( isLoading ) {
    return (
      <div>Loading</div>
      
    )
  }

  return (
    <>
      <UserForecast />

      <SavedLocationOneForecast />

      <SavedLocationTwoForecast />

      <SavedLocationThreeForecast />
    </>
  )
}
