const apiUrl = 'https://www.frankfurter.app/latest'

// Set up variables grabbing the elements
const fromCurrencyInput = document.getElementById('fromCurrency')
const toCurrencyInput = document.getElementById('toCurrency')
const amountInput = document.getElementById('amount')
const result = document.getElementById('result')

// Eventlistener for btn
document.getElementById('getExchangeRateBtn').addEventListener('click', getExchangeRate)

function getExchangeRate() {
    const amount = parseFloat(amountInput.value) // Take the input number from user and parse to a floating-point number
    const fromCurrency = fromCurrencyInput.value.toUpperCase() // Grab user from value to upper case so user can enter lowercase without error
    const toCurrency = toCurrencyInput.value.toUpperCase()

    // Grab from and to and place into query parameters
    fetch(`${apiUrl}?from=${fromCurrency}&to=${toCurrency}`) 
        .then(response => {
            if (!response.ok) {
                throw new Error('Error response not ok')
            }
            return response.json();
        })
        .then(data => {
            // Truthy for checking the exchange rate and selected user currencies
            // Variable to store the conversion rate for the currency that the user wants to convert to 
            const checkRate = data.rates[toCurrency] 
            if (checkRate) {
                const convertedAmount = amount * checkRate // Multiply the rate  
                result.textContent = `Converted Amount: ${convertedAmount.toFixed(2)} ${toCurrency}` // Display amount and currency rounded to 2 decimal places 
            } else {
                result.textContent = 'Invalid currency abbreviation please try again.'
            } // Error handling if user mistypes currency abbreviation
        })
        .catch(error => {
            console.error('Error', error)
        })
}



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
// document.querySelector('button').addEventListener('click', getRate)

// function getRate() {
//     const userFromSelection = document.querySelector('#fromCurrency').value
//     const userToSelection = document.querySelector('#toCurrency').value
//     const userAmountInput = document.querySelector('#amount').value

//     const host = 'https://www.frankfurter.app'

//     fetch(`${host}/latest?amount=${userAmountInput}&from=${userFromSelection}&to=${userToSelection}`)
//         .then(res => res.json()) // parse response as JSON
//         .then(data => {
//             // Extract the exchange rate from the response
//             const exchangeRate = data.rates[userToSelection]

//             // Calculate the converted amount
//             const convertedAmount = userAmountInput * exchangeRate

//             // Display the converted amount
//             console.log(`Converted Amount: ${convertedAmount} ${userToSelection}`)
//         })
//         .catch(error => {
//             console.error('Error', error)
//         });
// }