// api/fetchEvents.js
const fetch = require('node-fetch');

module.exports = async (req, res) => {
    const apiUrl = 'https://app.nocodb.com/api/v2/tables/mx42z3pzuohjhrn/records';
    const apiToken = process.env.NOCODB_API_TOKEN; // Access the environment variable

    try {
        const response = await fetch(apiUrl, {
            method: 'GET',
            headers: {
                'xc-token': apiToken
            }
        });

        if (!response.ok) {
            return res.status(response.status).json({ error: 'Failed to fetch event data' });
        }

        const data = await response.json();
        res.status(200).json(data);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};