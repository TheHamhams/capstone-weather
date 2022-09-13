import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Container, Row, Col } from "react-bootstrap";
import { SavedLocationInfo } from "../SavedLocations/SavedLocationInfo";
import { UserLocationInfo } from "../UserLocationInfo";

export const Profile = () => {
  const { user, isLoading } = useAuth0();
  

  if ( isLoading ) {
    return (
      <>
      loading...
      </>
    )
  }


  return (
    <div className="background">
      <Container fluid >
        <Row className="d-flex">
          <Col>
          <Container className="text-center py-3 my-3 border container-bg col-4">
            <h1 className="text-center">Profile</h1>        
            <p >ID: {user.sub}</p>
            <p>Email: {user.email}</p>
            <p>Name: {user.name}</p>

          </Container>
          </Col>
          
        </Row>

        <Row className="d-flex">
        <UserLocationInfo />
        </Row>
        
        <Row className="d-flex pb-5">
        <SavedLocationInfo />
        </Row>
      

      
      </Container>

    </div>
  );
};