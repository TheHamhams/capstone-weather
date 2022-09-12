import { useState, useEffect } from "react";
import React from "react";
import { saved_calls } from "../api";
import { useAuth0 } from "@auth0/auth0-react";

export const useSavedTwoForecastGet = () => {
    const [ savedTwoForecast, setSavedTwoForecast ] = useState()
    const { user } = useAuth0()

    async function handleDataFetch() {
        const result = await saved_calls.getForecast(`2/${user.sub}`)
        setSavedTwoForecast(result)
    }

    useEffect( () => {
        handleDataFetch()
    }, [])

    return {savedTwoForecast, getSavedTwoForecast:handleDataFetch}
}