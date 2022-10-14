// worked on this with william


document.querySelector('button').addEventListener('click', getPokemon)

function getPokemon() {
  let pokemon = document.querySelector('input').value.toLowerCase()
  let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`

  fetch(url)
    .then(res => res.json()) 
    .then(data => {
      console.log(data)
      document.querySelector('img').src = data.sprites.front_default
      document.querySelector('h2').innerText = data.species.name
      document.querySelector('h3').innerText = data.id
      console.log(data.species.url)
    })
    .catch(err => {
      console.log(`error ${err}`)
    })
}
