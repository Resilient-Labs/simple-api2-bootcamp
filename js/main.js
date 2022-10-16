const grabbedValue = document.querySelector('.value')
document.querySelector('.word').addEventListener('click', getAnimeCharacter)

function getAnimeCharacter() {
    
    fetch('https://animechan.vercel.app/api/random')
    .then(response => response.json())
    .then(quote => {
        document.querySelector('.result1').innerText = quote.anime
        document.querySelector('.result2').innerText = quote.character
        document.querySelector('.result3').innerText = quote.quote
        console.log(quote)
    })
        
    
}