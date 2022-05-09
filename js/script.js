document.querySelector('button').addEventListener('click', btn)

let url = 'https://www.thecolorapi.com/id?hex=&rgb='

function btn(){
    let change = document.querySelector('input').value
    url = `https://www.thecolorapi.com/id?hex=${change}`

    fetch(url)
        .then(res=> res.json())
        .then(data => {
            console.log(data)
            document.querySelector('img').src = data.image.bare
            
        })
        .catch(err => {
            console.log(`error ${err}`)
        })

    
}