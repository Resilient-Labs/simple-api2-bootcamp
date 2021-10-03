//Goal:  Get a random cat image when button is clicked.
document.querySelector('button').addEventListener('click', getImage)
function getImage(){
    const url = "https://api.thecatapi.com/v1/images/search"
    fetch(url, {
        headers:{
            "x-api-key": "6cfba53f-dfb0-4469-8145-37d15970c7b2"
        }
    })
    .then(res => res.json())
    .then(data => {
        document.querySelector('.genImg').src = data[0].url
        console.log(data)
    })
    .catch(err => console.log(err))
}
 //contributors: Shannon, David, Miriam, Alexa & Roxana 
