import React from 'react'
import { SavedLocationForm } from '../SavedLocationForm'
import { useSavedThreeGet } from '../../../custom-hooks/FetchSavedThree'
import { Container } from 'react-bootstrap'

export const SavedLocationThree = () => {
  const {savedThree, setSavedThree} = useSavedThreeGet()


  if (!savedThree) {
    return null
  }

  console.log(savedThree)
  return (
    <Container className="text-center py-3 border">
        <h1>Saved Location Three Information</h1>
        
        {!savedThree.city &&  
            <SavedLocationForm update={false} num='3'/>
        }

        {savedThree.city &&  
        <>
            <p>City: {savedThree.city}</p>
            <p>State: {savedThree.state}</p>
            <SavedLocationForm update={true} num='3'/>
        </>
        
        }
    </Container>
  )
}