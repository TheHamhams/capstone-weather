const baseMapQuestURL = 'http://www.mapquestapi.com/geocoding/v1/address?'
const mapQuestKey = process.env.REACT_APP_MAP_KEY
const baseWeatherGov = 'https://api.weather.gov/points'
const baseWeatherGovForcast = 'https://api.weather.gov/gridpoints/'
const testLocation = {
    "lat": 47.97913,
	"lng": -122.195893
}
const testGrid = {
    "gridId": 'SEW',
    'gridX': 131,
    "gridY": 84
}

export const user_calls = {
    get:async () => {
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
        let forcast = await user.properties.periods[0]
        return await forcast
    }

}