import React from 'react'
import { SavedLocationForm } from '../SavedLocationForm'
import { useSavedTwoGet } from '../../../custom-hooks/FetchSavedTwo'
import { Container } from 'react-bootstrap'

export const SavedLocationTwo = () => {
  const {savedTwo, setSavedTwo} = useSavedTwoGet()


  if (!savedTwo) {
    return null
  }

  return (
    <Container className="text-center py-3 border container-bg col-3">
        <h1>Saved Location Two</h1>
        
        {!savedTwo.city &&  
            <SavedLocationForm update={false} num='2'/>
        }

        {savedTwo.city &&  
        <>
            <h4>{savedTwo.city}, {savedTwo.state}</h4>
            <SavedLocationForm update={true} num='2'/>
        </>
        
        }
    </Container>
  )
}