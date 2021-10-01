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
    if (pokeType.length > 1) {
      const html = `
        <div class='name'>${data.name}</div>
        <img src=${data.sprites.front_default}>
        <div class='details'>
            <span>height: ${data.height}</span>
            <span>type: ${data.types[0].type.name}, ${data.types[1].type.name} </span>
        </div>
        `;
      const pokemonDiv = document.querySelector(".pokemon");
      pokemonDiv.innerHTML = html;
    } else{
      const html = `
        <div class='name'>${data.name}</div>
        <img src=${data.sprites.front_default}>
        <div class='details'>
            <span>height: ${data.height}</span>
            <span>type: ${data.types[0].type.name}</span>
        </div>
        `;
      const pokemonDiv = document.querySelector(".pokemon");
      pokemonDiv.innerHTML = html;
    }
    //line 31-issue with placing multiple properties
    let url2 = `https://pokeapi.co/api/v2/type/${data.types[0].type.name}/`;
    fetch(url2)
      .then((res) => res.json())
      .then((typeMatches) => generateHtml2(typeMatches));

    const generateHtml2 = (res) => {
      console.log(res);
      const html2 = `
        <div class='details'>
          <p> weak to: ${res.damage_relations.double_damage_from[0].name}</p>
          <p> strong against: ${res.damage_relations.double_damage_to[0].name}</p>
        </div>`;
      const pokemonDiv = document.querySelector(".pokeTypeChart");
      pokemonDiv.innerHTML = html2;
    };
  };
}

//best time to ask what's in the input? after they click the function*******
//is the deconstructed version of this

// const apiUrl = `${apiData.url}${apiData.type}${apiData.id}`
// console.log(apiUrl)
//   const apiData = {
//     url: "https://pokeapi.co/api/v2/",
//     type: "pokemon", //make this one a function that puts in a random number?
//   };
//a function that takes a pokemon's type and returns an object has two properties, one is weak [array of types]and strong [array of types]

// let pokemonTyping = {
//     water: {
//         weak: ['grass', 'electric'],
//         strong: []
//     }
// }
