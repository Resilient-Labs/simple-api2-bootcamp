
let url = 'https://asli-fun-fact-api.herokuapp.com/'

document.querySelector('button').addEventListener('click', randomFact)

function randomFact(){
    fetch(url)
    .then(res => res.json())
    .then(object => {
        console.log(object)
        document.querySelector('p').innerText=object.data.fact
        })
    .catch(err => {
        console.log(`error ${err}`)
    })
}
