
// SIMPLE API PROJECT TWO - POKEMON







document.querySelector('button').addEventListener('click', getFetch)

const body = document.querySelector('body');
const h2 = document.querySelector('body h2');
const description = document.querySelector('body span')


function getFetch() {
    const userPokemon = document.querySelector('input').value

    let url = `https://pokeapi.glitch.me/v1/pokemon/${userPokemon}`
 

   

    console.log(url)
  

    fetch(url)
    .then(res => res.json())
    .then(info => {
        console.log(info)

        

        document.querySelector('img').src = info[0].sprite;
        document.querySelector('h2').innerHTML = info[0].name;
        document.querySelector('.description').innerHTML = info[0].description;
        document.querySelector('.pokedex').innerHTML = "Pokedex Entry # " + info[0].number;
        // span.innerHTML = info.data[0].description;
        

        // document.querySelector('img').src = info.data[0].appearances;
    
      
     
        // debugger
        

    })
    .catch(err => {
        console.log(`error ${err}`)
    });

}