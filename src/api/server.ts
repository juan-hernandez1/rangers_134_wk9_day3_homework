let accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTcwMTk2MDY0NywianRpIjoiNjM4OTFhMmItMmNkNi00YTZlLTkxM2EtMzFhMzE1ZjE0NGIwIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6Imdlb3JnZWxvcGV6IiwibmJmIjoxNzAxOTYwNjQ3LCJleHAiOjE3MzM0OTY2NDd9.1EX93FbCiyvvYr1xx8PiGSwzM0hhkjMuWoreCMtjYp8"
let userId = localStorage.getItem('uuid') // grabbing the uuid from Google Authentication



// putting all our API calls in a giant dictionary/object

export const serverCalls = {

    getShop: async () => {
        // api call consist of 1-4 things 
        // 1. url (required)
        // 2. methods (optional it will default to GET)
        // 3. headers (optional but usually there) authentication type & type of data 
        // 4. body (optional usually only on a POST, PUT and sometimes DELETE)
        const response = await fetch(`https://car-inventoryjch.onrender.com/`, {
            method: 'GET',
            headers: {
                'Content-Type' : 'application/json',
                'Authorization' : `Bearer ${accessToken}`
            }
        })

        if (!response.ok) {
            throw new Error('Failed to fetch data'), response.status 
        }

        return await response.json()

    }
}