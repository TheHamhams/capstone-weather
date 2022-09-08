import React from 'react'
import { useUserGet } from '../../custom-hooks/FetchUserForcast'
import {Button} from 'react-bootstrap'
import { user_calls } from '../../api'

export const Home = () => {

  let { userForcast, getUserForcast } = useUserGet()

  let forcast = () => {
    user_calls.get()
    getUserForcast()

  }

  console.log(userForcast)
  return (
    <>
        <Button onClick={forcast}>Update</Button>
        Forecast: {userForcast}
    </>
  )
}
