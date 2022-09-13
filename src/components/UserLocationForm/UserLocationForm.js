import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { user_calls, profile_calls } from '../../api'
import { useAuth0 } from '@auth0/auth0-react'
import SelectUSState from 'react-select-us-states'

export const UserLocationForm = (update) => {
  const { user } = useAuth0()
  const { register, handleSubmit } = useForm()
  const [usState, setUsState ] = useState('')
  

  
  const onSubmit = (data, event) => {
    if (!update) {  
        user_calls.create({
            id: user.sub,
            city: data.city,
            state: usState
            })
        setTimeout( () => {window.location.reload()}, 1000)
        }
    if (update) {
        profile_calls.update({
            id: user.sub,
            city: data.city,
            state: usState
            })
        setTimeout( () => {window.location.reload()}, 1000)
        }
    }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <label>
            City: 
            <br/>
            <input {...register("city")} />
        </label>
        <br/>
        <label>
            State:
            <br/> 
            <SelectUSState onChange={setUsState} />
        </label>
        <br/>
        <Button className="mt-3" type='submit'>Submit</Button>
    </form>
  )
}
