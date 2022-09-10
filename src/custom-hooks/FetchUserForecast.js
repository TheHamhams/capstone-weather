import { useState, useEffect } from "react";
import React from "react";
import { user_calls } from "../api";
import { useAuth0 } from "@auth0/auth0-react";

export const useUserGet = () => {
    const [ userForecast, setUserForecast ] = useState()
    const { user } = useAuth0()


    async function handleDataFetch() {
        if (!user) {
            return null
        }
        const result = await user_calls.get(`${user.sub}`)
        setUserForecast(result)
    }

    useEffect( () => {
        handleDataFetch()
    })

    return {userForecast, getUserForecast:handleDataFetch}
}