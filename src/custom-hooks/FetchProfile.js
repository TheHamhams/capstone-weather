import { useState, useEffect } from "react";
import React from "react";
import { profile_calls } from "../api";
import { useAuth0 } from "@auth0/auth0-react";

export const useProfileGet = () => {
    const [ userProfile, setProfile ] = useState()
    const { user } = useAuth0()


    async function handleDataFetch() {
        if (!user) {
            return null
        }
        const result = await profile_calls.get(`${user.sub}`)
        setProfile(result)
    }

    useEffect( () => {
        handleDataFetch()
    })

    return {userProfile, getProfile:handleDataFetch}
}