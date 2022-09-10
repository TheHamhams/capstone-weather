import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { UserLocationForm } from '../UserLocationForm'
import { Container } from "react-bootstrap";
import { useProfileGet } from "../../custom-hooks/FetchProfile";

export const Profile = () => {
  const { user } = useAuth0();
  const { userProfile, setProfile } = useProfileGet()

  if (!user || !userProfile) {
    return null
  }


  return (
    <div className="background">
      
      <Container className="text-center py-3 border">
        <h1 className="text-center">Profile</h1>        
        <p >ID: {user.sub}</p>
        <p>Email: {user.email}</p>
        <p>Name: {user.name}</p>
        <ul>
            Location
            <li>City: {userProfile.city}</li>
            <li>State: {userProfile.state}</li>
        </ul>
      </Container>

      <Container className="text-center py-3 border">
        <h1>Location informaiton</h1>
        {!userProfile.city && 
        <UserLocationForm update={false} />
        }
        {userProfile.city && 
        <UserLocationForm update={true} />
        }
        
      </Container>
    </div>
  );
};