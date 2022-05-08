document.getElementById('button1').addEventListener('click', checkPrices)



function checkPrices(){

let input1 = document.getElementById('inputBox').value

let url = `https://www.worldcoinindex.com/apiservice/ticker?key=kC4QrDTwRUP12cDWTJSytplDf0X0V3uAMqZ&label=${input1}btc&fiat=usd`

fetch(url)
.then(res => res.json()) // parse response as JSON
    .then(data => { 
    console.log(data)
    let object1 = data[`Markets`]
    console.log(object1)
    let name = object1[0].Name
    document.getElementById('name').innerText= name
    let price = object1[0].Price
    document.getElementById('price').innerText=price
    let volume = object1[0].Volume_24h
    document.getElementById('volume').innerText=volume
    
    })
}