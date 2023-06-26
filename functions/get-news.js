const axios = require('axios');

exports.handler = async function(event, context) {
    const city = event.queryStringParameters.city;
    const NEWS_API_KEY = process.env.NEWS_API_KEY; 

    try {
        const response = await axios.get(`https://newsapi.org/v2/everything?q=${city}&apiKey=${NEWS_API_KEY}`);
        return {
            statusCode: 200,
            body: JSON.stringify(response.data)
        };
    } catch (error) {
        console.error('Error fetching news:', error);
        return {
            statusCode: 500, 
            body: JSON.stringify({ message: 'Error fetching news data' })
        };
    }
};
