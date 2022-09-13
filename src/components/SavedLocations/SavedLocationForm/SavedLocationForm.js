import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { saved_calls } from '../../../api'
import { useAuth0 } from '@auth0/auth0-react'
import SelectUSState from 'react-select-us-states'

export const SavedLocationForm = (props) => {
  const { user } = useAuth0()
  const { register, handleSubmit } = useForm()
  const [ usState, setUsState ] = useState('')
  
  const onSubmit = (data, event) => {

    if (!props.update) {  
        saved_calls.create({
            id: user.sub,
            city: data.city,
            state: usState,
            num: props.num
            })
        setTimeout( () => {window.location.reload()}, 1000)
        }
        
    if (props.update) {
        saved_calls.update({
            id: user.sub,
            city: data.city,
            state: usState,
            num: props.num
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
