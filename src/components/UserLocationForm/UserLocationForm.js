import React from 'react'
import { Button } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { user_calls, profile_calls } from '../../api'
import { useAuth0 } from '@auth0/auth0-react'

export const UserLocationForm = (update) => {
  const { user } = useAuth0()
  const { register, handleSubmit } = useForm()
  

  
  const onSubmit = (data, event) => {
    if (!update) {  
        user_calls.create({
            id: user.sub,
            city: data.city,
            state: data.state
            })
        setTimeout( () => {window.location.reload()}, 1000)
        }
    if (update) {
        profile_calls.update({
            id: user.sub,
            city: data.city,
            state: data.state
            })
        setTimeout( () => {window.location.reload()}, 1000)
        }
    }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <label>
            City: 
            <input {...register("city")} />
        </label>
        <label>
            State: 
            <input {...register("state")} />
        </label>
        <Button type='submit'>Submit</Button>
    </form>
  )
}
