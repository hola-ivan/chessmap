// api/translate.js
const fetch = require('node-fetch');

module.exports = async (req, res) => {
    const { text, targetLang } = req.query;

    console.log('Detected text:', text); // Logging text
    console.log('Detected target language:', targetLang); // Logging target language

    if (!text || !targetLang) {
        return res.status(400).json({ error: 'Missing text or targetLang parameter' });
    }

    const apiKey = process.env.DEEPL_API_KEY; // Use environment variable

    try {
        const response = await fetch(`https://api-free.deepl.com/v2/translate?auth_key=${apiKey}&text=${encodeURIComponent(text)}&target_lang=${targetLang}`);
        const data = await response.json();

        console.log('Deepl Response:', data); // Logging Deepl response

        if (response.ok) {
            res.status(200).json({ translation: data.translations[0].text });
        } else {
            res.status(500).json({ error: data.message });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};