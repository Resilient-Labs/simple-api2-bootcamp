let apiKey= 'cur_live_UKvTFKtaN2dI4w7hiIKMBundP8PK5t6648XLeIVK'

document.querySelector('#arrow').addEventListener('click', getInput)
//document.querySelector('#from-currency').addEventListener('click', getInput)
let currencyArray =  [
    "AED", "AFN", "ALL", "AMD", "ANG", "AOA", "ARS", "AUD", "AWG", "AZN",
    "BAM", "BBD", "BDT", "BGN", "BHD", "BIF", "BMD", "BND", "BOB", "BRL",
    "BSD", "BTN", "BWP", "BYN", "BYR", "BZD", "CAD", "CDF", "CHF", "CLF",
    "CLP", "CNY", "COP", "CRC", "CUC", "CUP", "CVE", "CZK", "DJF", "DKK",
    "DOP", "DZD", "EGP", "ERN", "ETB", "EUR", "FJD", "FKP", "GBP", "GEL",
    "GGP", "GHS", "GIP", "GMD", "GNF", "GTQ", "GYD", "HKD", "HNL", "HRK",
    "HTG", "HUF", "IDR", "ILS", "IMP", "INR", "IQD", "IRR", "ISK", "JEP",
    "JMD", "JOD", "JPY", "KES", "KGS", "KHR", "KMF", "KPW", "KRW", "KWD",
    "KYD", "KZT", "LAK", "LBP", "LKR", "LRD", "LSL", "LTL", "LVL", "LYD",
    "MAD", "MDL", "MGA", "MKD", "MMK", "MNT", "MOP", "MRO", "MRU", "MUR",
    "MVR", "MWK", "MXN", "MYR", "MZN", "NAD", "NGN", "NIO", "NOK", "NPR",
    "NZD", "OMR", "PAB", "PEN", "PGK", "PHP", "PKR", "PLN", "PYG", "QAR",
    "RON", "RSD", "RUB", "RWF", "SAR", "SBD", "SCR", "SDG", "SEK", "SGD",
    "SHP", "SLL", "SOS", "SRD", "STD", "STN", "SVC", "SYP", "SZL", "THB",
    "TJS", "TMT", "TND", "TOP", "TRY", "TTD", "TWD", "TZS", "UAH", "UGX",
    "USD", "UYU", "UZS", "VEF", "VES", "VND", "VUV", "WST", "XAF", "XAG",
    "XAU", "XCD", "XDR", "XOF", "XPF", 
    ];

//assure that the currency the user types in is actually an option the Api works with
function getInput(){
    let toCurrency =document.querySelector('#to-currency').value.toUpperCase()
    let fromCurrency =document.querySelector('#from-currency').value.toUpperCase()

    if (!currencyArray.includes(fromCurrency) || !currencyArray.includes(toCurrency)){
        alert("You must pick a valid currency from the list provided")
    } else{
        convertCurrency(toCurrency, fromCurrency)
    }
}


function convertCurrency(toCurrency, fromCurrency){
    let number = document.querySelector('#base').value

    fetch(`https://api.currencyapi.com/v3/latest?apikey=${apiKey}&base_currency=${fromCurrency}&currencies=${toCurrency}`)
    .then(res => res.json()) // parse response as JSON 
    .then(info => { 

    document.querySelector('#result').innerText = `${Math.round(info.data[toCurrency].value*number)}` //Exchange math
    document.querySelector('.abbr').innerText = `${info.data[toCurrency].code}` //ex. 'USD'
    writeInfo(number, toCurrency, fromCurrency)

    })

    .catch(err => { 
        console.log(`error ${err}`) 
    })
}


function writeInfo(number, toCurrency, fromCurrency){
    fetch(`https://api.currencyapi.com/v3/currencies?apikey=${apiKey}&value=${number}&base=${fromCurrency}&currencies=${toCurrency}`)
    .then(res => res.json()) // parse response as JSON 
    .then(info => { 

    document.querySelector('#currency-plural').innerText = `${info.data[toCurrency]['name_plural']}` //ex. "United States Dollar" at bottom
    document.querySelector('.symbol').innerText = `${info.data[toCurrency]['symbol_native']}` // ex. $ symbol
    })

    .catch(err => { 
        console.log(`error ${err}`) 
    })
}