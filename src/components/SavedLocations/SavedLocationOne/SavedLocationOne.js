import React from 'react'
import { SavedLocationForm } from '../SavedLocationForm'
import { useSavedOneGet } from '../../../custom-hooks/FetchSavedOne'
import { Container } from 'react-bootstrap'

export const SavedLocationOne = () => {
  const {savedOne, setSavedOne} = useSavedOneGet()


  if (!savedOne) {
    return null
  }
  return (
    <Container className="text-center py-3 border">
        <h1>Saved Location One Information</h1>
        
        {!savedOne.city &&  
            <SavedLocationForm update={false} num='1'/>
        }

        {savedOne.city &&  
        <>
            <p>City: {savedOne.city}</p>
            <p>State: {savedOne.state}</p>
            <SavedLocationForm update={true} num='1'/>
        </>
        
        }
    </Container>
  )
}
