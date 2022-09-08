import { useState, useEffect } from "react";
import React from "react";
import { user_calls } from "../api";

export const useUserGet = () => {
    const [userForcast, setForcast] = useState<[]>([])

    async function handleDataFetch() {
        const result = await user_calls.get()
        setForcast(result)
    }

    useEffect( () => {
        handleDataFetch()
    }, [])

    return {userForcast, getUserForcast:handleDataFetch}
}