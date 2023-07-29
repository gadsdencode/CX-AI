const axios = require('axios');

const url = "https://api.openai.com/v1/chat/completions";

const headers = {
    "Content-Type": "application/json",
    "Authorization": "Bearer YOUR_OPENAI_KEY"
};

const data = {
    "model": "gpt-3.5-turbo",
    "messages": [
        {
            "role": "system",
            "content": "You are a helpful assistant."
        },
        {
            "role": "user",
            "content": "Who won the world series in 2020?"
        }
    ]
};

axios.post(url, data, {headers: headers})
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.error(error);
    });
