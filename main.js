
fetch("https://animechan.vercel.app/api/random")
.then((response) => response.json())
.then((quote) => 
document.querySelector('#result').innerHTML = `<p> ${quote.anime}</p>  <p>${quote.character}</p>  <p>${quote.quote}</p>` )








