//event listener once button is clicked runs the function 
document.querySelector('button').addEventListener('click', getPic)

function getPic(){
    
    // we then store the url in a variable called url
    //crypro compare api
    const url = `https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH&tsyms=USD,EUR`

    // we then fetch data from the url
    fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {

        //here we access the data bitcoin price in usd and display it in our .busd class
        document.querySelector('.busd').innerText = `USD Value: ${data.BTC.USD}`
        
        //here we access the data bitcoin price in eur and display it in our .beur class
        document.querySelector('.beur').innerText = `EUR Value: ${data.BTC.EUR}`

        //here we access the data ethereum price in usd and display it in our .eusd class
        document.querySelector('.eusd').innerText = `USD Value: ${data.ETH.USD}`

        //here we access the data ethereum price in eur and display it in our .eeur class
        document.querySelector('.eeur').innerText = `EUR Value: ${data.ETH.EUR}`
    })
    //error catcher
    .catch(err => {
        console.log(`error ${err}`)
});
}