import React from 'react'
import { useUserGet } from '../../custom-hooks/FetchUserForecast'
import { Button, Image } from 'react-bootstrap'
import { useAuth0 } from '@auth0/auth0-react'
import { UserForecast } from '../UserForecast'
import { SavedLocationOneForecast, SavedLocationTwoForecast, SavedLocationThreeForecast } from '../SavedLocationsForecast'
import { Container, Row, Col } from 'react-bootstrap'

export const Dashboard = () => {
  let { user, isLoading } = useAuth0()


  if ( isLoading ) {
    return (
      <div>Loading</div>
      
    )
  }

  return (
    <div>
      <Container fluid>
        <Row className='d-flex'>
          <UserForecast />
        </Row>
      
        <Row className='d-flex'>
          <SavedLocationOneForecast />

          <SavedLocationTwoForecast />

          <SavedLocationThreeForecast />
        </Row>

      </Container>
    </div>
  )
}
