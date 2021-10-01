document.getElementById('button').addEventListener('click',getPic)

function getPic(){


const url = 'https://api.thecatapi.com/v1/images/search'

fetch(url) 
    .then(res => res.json()) // parse response as JSON 
    .then(datafromArray => { 
      console.log(datafromArray[0])
      document.querySelector('img').src = datafromArray[0].url
    }) 
    .catch(err => { 
        console.log(`error ${err}`) 
    }); 
  }