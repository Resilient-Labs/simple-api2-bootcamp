// Goal: Display data returned from an api

// referenced my to do list, the work done on the complex nasa, javascript.info, and chat gpt while working on this

const seePokemonBtn = document.querySelector('#seeBtn')
// const dropdown = document.querySelector('#dropdown')
// const gen1 = document.querySelector('#gen1')
// const gen2 = document.querySelector('#gen2')
// const gen3 = document.querySelector('#gen3')


function getPokemon() {
    // let selectedGeneration = dropdown.value

    const url = `https://pokeapi.co/api/v2/generation/1/`

    fetch(url)
        .then(res => res.json()) // parse response as JSON
        .then(pokemon => {
            // creates a new UL that will contain each pokemon
            const pokemonList = document.createElement('ul');
            // pokemon.pokemon_species is the array that we're targeting -- using forEach method which loops through each individual item in an array, applies a function to them, and then spits out the results

            //forEach loops through each element in the pokemon_species array, applies a function which creates a new li element, and then spits that li element out 
            pokemon.pokemon_species.forEach(pokemon => {
                const pokemonName = document.createElement('li');
                //the content of each li element is the pokemon name 
                pokemonName.innerText = pokemon.name;
                pokemonList.appendChild(pokemonName);
            });
            // appends the pokemonList element to the end of the body of the HTML document
            document.body.appendChild(pokemonList);
            //created class for the li to apply styling in CSS
            pokemonList.classList.add('list');
        })
        .catch(err => {
            console.log(`error ${err}`)
        });
}

seePokemonBtn.addEventListener("click", getPokemon)