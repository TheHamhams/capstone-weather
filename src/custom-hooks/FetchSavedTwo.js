import { useState, useEffect } from "react";
import React from "react";
import { saved_calls } from "../api";
import { useAuth0 } from "@auth0/auth0-react";

export const useSavedTwoGet = () => {
    const [ savedTwo, setSavedTwo ] = useState()
    const { user } = useAuth0()


    async function handleDataFetch() {
        if (!user) {
            return null
        }
        const result = await saved_calls.getInfo(`2/${user.sub}`)
        setSavedTwo(result)
    }

    useEffect( () => {
        handleDataFetch()
    }, [])

    return {savedTwo, getSavedTwo:handleDataFetch}
}