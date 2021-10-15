(function onload() {
    setButtonFunctions();

    getExchangeRate();
})();

function setButtonFunctions() {
    document.getElementById("buttonCurrency").onclick = getExchangeRate();
};

// Currency Exchange rates
async function getExchangeRate() {
    const from = document.getElementById('currencyFrom').value;
    const to = document.getElementById('currencyTo').value;
    await fetch("https://currency-exchange.p.rapidapi.com/exchange?q=1.0&from=" + from + "&to=" + to, { //&to to match what we have on on ?q
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "currency-exchange.p.rapidapi.com",
            "x-rapidapi-key": //ADD YOUR API KEY HERE
        }
    })
        .then(response => response.json())
        .then(response => {
            console.log("Currency Exchange API object:");
            console.log(response);
            console.log("\n");

            // display data
            document.getElementById('innerResult').innerHTML = 'Result: ' + response;
        })
        .catch(err => {
            console.log(err);
        });
}
