document.querySelector('button').addEventListener('click', press)

function press(){
const url = `https://random-data-api.com/api/v2/beers`

let drink = document.querySelector('.drink')

fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data)
      drink.innerText = data.name
      

    })
    .catch(err => {
        console.log(`error ${err}`)
});
}