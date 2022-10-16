// simple #2: random cat generator

document.querySelector('button').addEventListener('click', getKitty)

function getKitty() {
        fetch('https://api.thecatapi.com/v1/images/search')
        .then(res => res.json())
        .then(data => {
            console.log(data[0].url)
            document.querySelector('img').src = data[0].url
    
        })
        .catch(err => {
            console.log(`error ${err}`)
        })
    }
