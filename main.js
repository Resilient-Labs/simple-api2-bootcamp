document.querySelector('button').addEventListener('click', getFact)
function getFact(){
    fetch("https://meowfacts.herokuapp.com/")
        .then(res => res.json())
        .then(data => {
            document.querySelector('h3').innerHTML = data.data
            console.log(data)
        })
        .catch(err => console.log(err))
}