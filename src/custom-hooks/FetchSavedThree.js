import { useState, useEffect } from "react";
import React from "react";
import { saved_calls } from "../api";
import { useAuth0 } from "@auth0/auth0-react";

export const useSavedThreeGet = () => {
    const [ savedThree, setSavedThree ] = useState()
    const { user } = useAuth0()


    async function handleDataFetch() {
        if (!user) {
            return null
        }
        const result = await saved_calls.getInfo(`3/${user.sub}`)
        setSavedThree(result)
    }

    useEffect( () => {
        handleDataFetch()
    }, [])

    return {savedThree, getSavedThree:handleDataFetch}
}