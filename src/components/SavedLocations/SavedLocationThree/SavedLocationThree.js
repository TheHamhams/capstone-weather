import React from 'react'
import { SavedLocationForm } from '../SavedLocationForm'
import { useSavedThreeGet } from '../../../custom-hooks/FetchSavedThree'
import { Container } from 'react-bootstrap'

export const SavedLocationThree = () => {
  const {savedThree, setSavedThree} = useSavedThreeGet()


  if (!savedThree) {
    return null
  }

  return (
    <Container className="text-center py-3 border container-bg col-3">
        <h1>Saved Location Three</h1>
        
        {!savedThree.city &&  
            <SavedLocationForm update={false} num='3'/>
        }

        {savedThree.city &&  
        <>
            <h4>{savedThree.city}, {savedThree.state}</h4>
            <SavedLocationForm update={true} num='3'/>
        </>
        
        }
    </Container>
  )
}