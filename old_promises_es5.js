var fetch = require("node-fetch");

//Using ES5 function declaration 
function fetchQuote() {
    fetch('https://talaikis.com/api/quotes/random/')
        .then(res => res.json())
        .then(jsonObject => console.log(jsonObject));
}

fetchQuote();