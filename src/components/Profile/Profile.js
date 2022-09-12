import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Container } from "react-bootstrap";
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
      
      <Container className="text-center py-3 border">
        <h1 className="text-center">Profile</h1>        
        <p >ID: {user.sub}</p>
        <p>Email: {user.email}</p>
        <p>Name: {user.name}</p>

      </Container>

      <UserLocationInfo />

      <SavedLocationInfo />
    </div>
  );
};