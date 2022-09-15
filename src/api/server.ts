const baseURL = 'https://hamren-weather-api.herokuapp.com/api'

const testURL = 'http://127.0.0.1:5000/api'
const testGrid = {
    "gridId": 'SEW',
    'gridX': 131,
    "gridY": 84
}

export const home_calls = {
    get: async () => {
        const response = await fetch(`https://api.weather.gov/gridpoints/${testGrid.gridId}/${testGrid.gridX},${testGrid.gridY}/forecast`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })

        if (!response.ok) {
            throw new Error('failed to fetch forcast')
        }
        let user = await response.json()
        let forecast = await user.properties.periods[0]
        return await forecast
    }

}

export const user_calls = {
    get: async(id: string) => {
        const response = await fetch(`${baseURL}/user/forecast/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${id}`
            }
        })

        if (!response.ok) {
            throw new Error('Failed to fetch user forecast')
        }

        return response.json()
    },

    create: async (data: any={}) => {
        const response = await fetch(`${baseURL}/userlocal`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        
        if (!response.ok) {
            throw new Error('Failed to create new user data')
        }

        return response.json()
    }
}

export const profile_calls = {
    get: async(id: string) => {
        const response = await fetch(`${baseURL}/profile/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${id}`
            }
        })

        if (!response.ok) {
            throw new Error('Failed to fetch profile data')
        }

        return response.json()
    },

    update: async(data: any={}) => {
        const response = await fetch(`${baseURL}/profile/${data.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${data.id}`
            },
            body: JSON.stringify(data)
        })

        if (!response.ok) {
            throw new Error('Failed to update profile data')
        }

        return response.json()
    }
}

export const saved_calls = {
    getInfo: async (data: string) => {
        const response = await fetch(`${baseURL}/saved/${data}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })

        if (!response.ok) {
            throw new Error('Failed to fetch saved location info')
        }

        return response.json()
    },

    getForecast: async(data: string) => {
        const response = await fetch(`${baseURL}/saved/forecast/${data}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })

        if (!response.ok) {
            throw new Error('Failed to fetch user forecast')
        }

        return response.json()
    },

    create: async (data: any={}) => {
        const response = await fetch(`${baseURL}/saved/${data.num}/${data.id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })

        if (!response.ok) {
            throw new Error('Failed to create new saved location')
        }

        return response.json()
    },

    update: async (data: any={}) => {
        const response = await fetch(`${baseURL}/saved/${data.num}/${data.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })

        if (!response.ok) {
            throw new Error('Failed to update saved location data')
        }

        return response.json()
    }
}