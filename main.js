//Goal:  Retrieve a random cat fact when button is clicked.
document.querySelector('button').addEventListener('click', getFact)
function getFact(){
    const url = `https://meowfacts.herokuapp.com/`
    fetch(url)
        .then(res => res.json())
        .then(data => {
            document.querySelector('h3').innerHTML = data.data
            console.log(data)
        })
        .catch(err => console.log(err))
}