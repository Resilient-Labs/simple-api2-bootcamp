document.getElementById('button').addEventListener('click', giphy)
const pokemonURL = 'https://pokeapi.co/api/v2/pokemon/'
function giphy() {
  let randomNum = Math.floor(Math.random() * 899)

  fetch(pokemonURL + randomNum)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      //pull name from HTML
      document.querySelector('h2').innerText = data.name

      const giphyURL = `https://api.giphy.com/v1/gifs/search?api_key=w94bOb6Hp2xOUFfFyLIRaTptkse1mgGM&q=${data.name}`

      fetch(giphyURL)
        .then(res => res.json()) // parse response as JSON
        .then(data => {

          let secondRandomNum = Math.floor(Math.random() * data.data.length)


          document.querySelector('iframe').src = data.data[0].embed_url
        })
        .catch(err => {
          console.log(`error ${err}`)
        });

    })
    .catch(err => {
      console.log(`error ${err}`)
    });

  //Credit to House Gardner
}