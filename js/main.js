document.querySelector('#forQuote').addEventListener('click', getQuote)

function getQuote() {

    fetch("https://strangerthings-quotes.vercel.app/api/quotes")
    .then(res => res.json())
    .then(data => {
    console.log(data)
     document.querySelector('h2').innerText = data[0].author
      document.querySelector('h3').innerText = data[0].quote
      console.log(data.quote)
})
.catch(err => { 
    console.log(`error ${err}`)
})
}

