const fetch = require('node-fetch');

const fetchQuote = async () => {
    const res = await fetch('https://talaikis.com/api/quotes/random/');
    const jsonObject = await res.json();
    console.log(jsonObject);
}

fetchQuote();