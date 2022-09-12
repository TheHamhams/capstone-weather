import { useState, useEffect } from "react";
import React from "react";
import { saved_calls } from "../api";
import { useAuth0 } from "@auth0/auth0-react";

export const useSavedOneForecastGet = () => {
    const [ savedOneForecast, setSavedOneForecast ] = useState()
    const { user } = useAuth0()

    async function handleDataFetch() {
        const result = await saved_calls.getForecast(`1/${user.sub}`)
        setSavedOneForecast(result)
    }

    useEffect( () => {
        handleDataFetch()
    }, [])

    return {savedOneForecast, getSavedOneForecast:handleDataFetch}
}