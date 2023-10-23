//host: https://www.frankfurter.app/docs/#docker

//first attempt
// document.querySelector('button').addEventListener('click', getRate)

// function getRate(){
//     const userFromSelection = document.querySelector('#fromCurrency')
//     const userToSelection = document.querySelector('#toCurrency')
//     const userAmountInput = document.querySelector('#amount')

//     const host = 'https://www.frankfurter.app/'

//     fetch (`${host}/latest?${userAmountInput}from=${userFromSelection}&to=${userToSelection}`,
//     )
//     .then(res => res.json()) //parse response as JSON
//     .then(data => {
//         console.log(data)
//     })
// }

//second attempt
// document.querySelector('button').addEventListener('click', getRate);

// function getRate() {
//     const userFromSelection = document.querySelector('#fromCurrency').value;
//     const userToSelection = document.querySelector('#toCurrency').value
//     const userAmountInput = document.querySelector('#amount').value

//     const host = 'https://www.frankfurter.app'

//     fetch(`${host}/latest?amount=${userAmountInput}&from=${userFromSelection}&to=${userToSelection}`)
//         .then(res => res.json()) // parse response as JSON
//         .then(data => {
//             // Extract the exchange rate from the response
//             const exchangeRate = data.rates[userToSelection]

//             // Calculate the converted amount
//             const convertedAmount = userAmountInput * exchangeRate;

//             // Display the converted amount
//             console.log(`Converted Amount: ${convertedAmount} ${userToSelection}`)
//         })
//         .catch(error => {
//             console.error('Error:', error)
//         });
// }

// Fetch currencies and populate select dropdowns
const fromCurrencySelect = document.querySelector('#fromCurrency');
const toCurrencySelect = document.querySelector('#toCurrency');

// Using CORS proxy to fetch data
const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
const apiUrl = 'https://www.frankfurter.app/currencies';

fetch(proxyUrl + apiUrl)
    .then(response => response.json())
    .then(data => {
        const currencies = Object.keys(data);
        currencies.forEach(currency => {
            const option = document.createElement('option');
            option.value = currency;
            option.text = currency;
            fromCurrencySelect.appendChild(option.cloneNode(true));
            toCurrencySelect.appendChild(option);
        });
    })
    .catch(error => {
        console.error('Error:', error);
    });

// Event listener for button click
document.querySelector('#getExchangeRateBtn').addEventListener('click', getExchangeRate);

function getExchangeRate() {
    const amount = parseFloat(document.querySelector('#amount').value);
    const fromCurrency = document.querySelector('#fromCurrency').value;
    const toCurrency = document.querySelector('#toCurrency').value;

    fetch(`${proxyUrl}https://www.frankfurter.app/latest?from=${fromCurrency}`)
        .then(response => response.json())
        .then(data => {
            const targetRate = data.rates[toCurrency];
            const convertedAmount = amount * targetRate;
            
            // Display the converted amount
            const resultElement = document.querySelector('#result');
            resultElement.textContent = `Converted Amount: ${convertedAmount.toFixed(2)} ${toCurrency}`;
        })
        .catch(error => {
            console.error('Error:', error);
        });
}