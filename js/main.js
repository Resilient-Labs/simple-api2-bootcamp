let quote = document.querySelector('#kanye')
let button = document.querySelector('button')
button.addEventListener('click', getQuote)
const url ='https://api.kanye.rest'


function getQuote(){
    fetch(url)
    .then(res => res.json())
    .then(data => {
    console.log(data)
    quote.innerText = data.quote
    
    })
    }

