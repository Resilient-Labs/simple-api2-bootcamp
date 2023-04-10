document.querySelector('button').addEventListener('click', getQuotes)

function getQuotes(){
    const url = `https://api.breakingbadquotes.xyz/v1/quotes`
    fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        document.querySelector('h2').innerText = data[0].quote
        document.querySelector('span').innerText = data[0].author
    })

}