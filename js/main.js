
document.querySelector('button').addEventListener('click', getQuotes)

function getQuotes(){
    const api = 'https://api.quotable.io/random';

    fetch(api)
        .then(res => res.json()) // parse response as JSON

        .then(data => {
        document.querySelector(".quoteText").innerHTML = '"' + data.content + '"';
        document.querySelector(".quoteAuthor").innerHTML = "- " + data.author;
        })

        .catch(err => {
        console.log(`error ${err}`)
        })
}



