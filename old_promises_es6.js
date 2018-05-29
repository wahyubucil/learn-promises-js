const fetch = require('node-fetch');

//Using ES6 function declaration
const fetchQuote = () => {
    fetch('https://talaikis.com/api/quotes/random/')
        .then(res => res.json())
        .then(jsonObject => console.log(jsonObject));
}

fetchQuote();