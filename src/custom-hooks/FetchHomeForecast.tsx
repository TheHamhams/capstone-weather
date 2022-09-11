import { useState, useEffect } from "react";
import React from "react";
import { home_calls } from "../api";

export const useHomeGet = () => {
    const [ homeForecast, setForecast ] = useState()

    async function handleDataFetch() {
        const result = await home_calls.get()
        setForecast(result)
    }

    useEffect( () => {
        handleDataFetch()
    }, [])

    return {homeForecast, getHomeForecast:handleDataFetch}
}