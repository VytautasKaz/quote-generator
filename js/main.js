let quoteGeneratingButton = document.querySelector('.new_quote');
let quoteLocation = document.querySelector('.quote_text');
let endpoint = 'https://api.whatdoestrumpthink.com/api/v1/quotes/random';

let displayQuote = function (quote) {
    quoteLocation.textContent = quote;
};

let getQuote = function () {
    fetch(endpoint)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            displayQuote(data.message);
        })
        .catch(function () {
            console.log('Error');
        });
};

quoteGeneratingButton.addEventListener('click', getQuote);

getQuote();
