// api/fetchEvents.js
const fetch = require('node-fetch');

module.exports = async (req, res) => {
    const apiUrl = 'https://app.nocodb.com/api/v2/tables/mx42z3pzuohjhrn/records';
    const apiToken = process.env.NOCODB_API_TOKEN;

    console.log('Fetching data from NocoDB...');
    console.log('API URL:', apiUrl);
    console.log('API Token:', apiToken ? 'Exists' : 'Missing');

    try {
        const response = await fetch(apiUrl, {
            method: 'GET',
            headers: {
                'xc-token': apiToken
            }
        });

        if (!response.ok) {
            console.error('Failed to fetch event data:', response.status, response.statusText);
            return res.status(response.status).json({ error: 'Failed to fetch event data' });
        }

        const data = await response.json();
        console.log('Data fetched from NocoDB:', data);

        res.status(200).json(data);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};