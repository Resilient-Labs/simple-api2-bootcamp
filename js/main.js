document.querySelector('button').addEventListener('click', getQuote)

function getQuote(){
    const url = 'https://api.kanye.rest/'

    fetch(url)
        .then(res => res.json())
        .then(data => {
            document.querySelector('h1').innerHTML = data.quote
        })
        .catch(err => console.log(err))
}