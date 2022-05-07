document.querySelector('button').addEventListener('click',getMeme)

function getMeme(){

    fetch(`https://www.boredapi.com/api/activity/`)
    .then(res => res.json())
    .then(joke =>{
        console.log(joke)
       document.querySelector('h2').innerText = joke.activity
    })
    .catch(err => {
        console.log(`error ${err}`)
    })
}