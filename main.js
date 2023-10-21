// "Fernando J. Hernandez: Random dad joke API (https://github.com/fjh321/simpleAPI-2)" / fjh321@uw.edu"



document.querySelector('button').addEventListener('click', dadJokes)

function dadJokes() {
    const myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    const options = {
        method: "GET",
        headers: myHeaders,
        mode: "cors",
        cache: "default",
    };
    // const character = document.querySelector('input').value
    const url = `https://icanhazdadjoke.com/`
    fetch(url, options)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            const newParagraph = document.createElement('p')
            const dadJoke = data.joke
            newParagraph.appendChild((document.createTextNode(`${dadJoke}`)))
            document.querySelector('body').appendChild(newParagraph)
        })
        .catch(err => {
            console.log(`error ${err}`)
        });
}

