import { useState, useEffect } from "react";
import React from "react";
import { saved_calls } from "../api";
import { useAuth0 } from "@auth0/auth0-react";

export const useSavedThreeForecastGet = () => {
    const [ savedThreeForecast, setSavedThreeForecast ] = useState()
    const { user } = useAuth0()

    async function handleDataFetch() {
        const result = await saved_calls.getForecast(`3/${user.sub}`)
        setSavedThreeForecast(result)
    }

    useEffect( () => {
        handleDataFetch()
    }, [])

    return {savedThreeForecast, getSavedThreeForecast:handleDataFetch}
}