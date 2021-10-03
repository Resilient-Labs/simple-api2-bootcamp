document.querySelector('button').addEventListener('click', getFetch)
document.querySelector('button').addEventListener('click', hide)

function hide(){
    let message = document.querySelector('.welcomeMessage')
        message.style.display = "none"
}

function getFetch(){
    const poke1 = document.querySelector('input').value.toLowerCase()
    const url1 = 'https://pokeapi.co/api/v2/pokemon/'+ poke1
    const url2 = 'https://pokeapi.co/api/v2/pokemon-species/'+ poke1
    let pokeStore = []
    let pokeImg = []
  
    fetch(url1)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
            console.log(data)

            let pokeName = data.name
            let pokeDex = data.id
            let pokeRegSprite = data.sprites.front_default
            let pokeShinySprite = data.sprites.front_shiny
            let pokeType = data.types[0].type.name
            
            pokeStore.push(pokeName)
            pokeStore.push(pokeDex)
            pokeImg.push(pokeRegSprite)
            pokeImg.push(pokeShinySprite)
            pokeStore.push(pokeType)
            
            document.querySelector('.name').innerText = `${pokeName}`
            document.querySelector('.pokedex').innerText = `POKEDEX #${pokeDex}`
            document.querySelector('.picOne').src = pokeImg[0]
            document.querySelector('.picTwo').src = pokeImg[1]
            document.querySelector('.types').innerText = `TYPE: ${pokeType}`
        })
        .catch(err => {
            console.log(`error ${err}`)
        });

    fetch(url2)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
            console.log(data)
        

            let pokeDes = data.flavor_text_entries[0].flavor_text

            pokeStore.push(pokeDes)

            document.querySelector('.information').innerText = `${pokeDes}`
        })
        .catch(err => {
            console.log(`error ${err}`)
        });
  }
