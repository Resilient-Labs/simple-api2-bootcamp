document.querySelector('button').addEventListener('click', getCat)

function getCat(){
    const url = `https://api.thecatapi.com/v1/images/search`

    
    fetch(url)
    .then(res => res.json()) // parse response as JSON 
    .then(data => { 
      console.log(data)
      document.querySelector('img').src = data[0].url
        }) 
    .catch(err => { 
        console.log(`error ${err}`) 
    });
}