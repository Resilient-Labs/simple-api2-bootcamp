document.querySelector("button").addEventListener("click", getMon);

let pokeInput = document.querySelector("#pokemonSearch");

function getMon() {
  let name = pokeInput.value.toLowerCase();
  const apiUrl = `https://pokeapi.co/api/v2/pokemon/${name}`;
  console.log(apiUrl);

  fetch(apiUrl)
    .then((data) => data.json())
    .then((pokemon) => generateHtml(pokemon));

  const generateHtml = (data) => {
      console.log(data);
      let pokeType = data.types;
      document.querySelector("img").src = data.sprites.front_default

      let thisType = ''
      for(let x in pokeType){
        thisType += pokeType[x].type.name + "  \ "
      }
      document.querySelector('.pokeTypeChart').innerText = thisType

      let url2 = `https://pokeapi.co/api/v2/type/${data.types[0].type.name}/`
      fetch(url2)
      .then((res) => res.json())
      .then((typeMatches) => {
        console.log(typeMatches)

        let weaknesses = typeMatches.damage_relations.double_damage_from
        let weakText = ''
        for (let ele of weaknesses){
          weakText += ele.name + "   "
        }
        document.querySelector('#weakTo').innerText = weakText

        let strongText = ''
        let strength = typeMatches.damage_relations.double_damage_to
        for (let ele of strength){
          strongText += ele.name + "    "
        }
        document.querySelector('#strongAgainst').innerText = strongText
        

      }); 
  };
}

