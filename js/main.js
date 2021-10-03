
document.querySelector('button').addEventListener('click', rickAndMorty)

function rickAndMorty(){
    let val = document.querySelector('input').value
    const url = `https://rickandmortyapi.com/api/character/?name=${val}`


    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data.results[0])
            document.querySelector('h3').innerText = data.results[0].name
            document.querySelector('#photo').src = data.results[0].image
            document.querySelector('#status').innerText = `Status:${data.results[0].status}`
            document.querySelector('#origin').innerText = `Origin:${data.results[0].origin.name}`
            document.querySelector('#location').innerText = `Location:${data.results[0].location.name}`
        })

        .catch(err => {
            console.log(`error ${err}`)
        });
}