const clickMe = document.querySelector('#button').addEventListener('click', getQuotes)

function getQuotes(){
let url = `https://animechan.vercel.app/api/random`
fetch(url)
    .then(res => res.json())
    .then(quote => {
    console.log(quote)
    document.querySelector("#title").innerText = `Anime: ${quote.anime}`
    document.querySelector("#character").innerText = `Character: ${quote.character}`
    document.querySelector("#quote").innerText = `Quote: ${quote.quote}`
    })

}