import fetch from 'node-fetch';

export default async (req, res) => {
    const apiUrl = 'https://app.nocodb.com/api/v2/tables/mx42z3pzuohjhrn/records';
    const apiToken = process.env.NOCODB_API_TOKEN;

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
        res.status(500).json({ error: 'Internal server error' });
    }
};