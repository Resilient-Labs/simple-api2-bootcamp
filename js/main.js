

const selectElement = document.querySelector('select');
const dropElement = document.querySelector('.drop');
let select = document.getElementById('lista')
let characters 

function pickOneCharacter() {
  const selectedIndex = selectElement.selectedIndex;
  const selectedValue = selectElement.options[selectedIndex].value;
  const url = (`https://hp-api.onrender.com/api/characters`);

  fetch(url)
    .then(res => res.json())
    .then(charactersFetch => {
      characters = charactersFetch
      console.log(charactersFetch) // receiving an object with multiple arrays
      // let randomCharacter = characters[Math.floor(Math.random() * data.length)];
      for (let i = 0; i < charactersFetch.length; i++){
        let studentsFaculty = charactersFetch[i].name
        console.log(studentsFaculty)
       
        let option = document.createElement('option')
        const textNode = document.createTextNode(studentsFaculty)
        option.appendChild(textNode)
        select.appendChild(option)
        option.innerText = studentsFaculty
      }

    

    // dropElement.innerText = randomCharacter.name
      // let selectedCharacter = characters.find(character => character.name === selectedValue);
      
      // dropElement.innerText = selectedCharacter.name;
    })
    .catch(error => console.log(error));
}
pickOneCharacter()
// selectElement.addEventListener('change', pickOneCharacter)
function getMoreInfo (e){
  console.log(characters[select.selectedIndex - 2].image)
  document.getElementById('description').innerText = characters[0].name.house
  document.querySelector('img').src = characters[select.selectedIndex - 2].image

  //try sizing images since they come in any size they want from the data 
  // const imageSize = document.querySelector('img').src
  // imageSize.width = 200;
  // imageSize.height  = 150;
  
  // Include path for Ancestry

  let familyTree = characters[select.selectedIndex - 2].ancestry
  document.querySelector('h3').innerText =`Ancestry: ${familyTree}`

  //include path for house with template literals 
  let hogwartsHouse = characters[select.selectedIndex - 2].house
  document.querySelector('#description').innerText = `House: ${hogwartsHouse}`
  // console.log(getMoreInfo)

  //path for name
  document.querySelector('h2').innerText = characters[select.selectedIndex - 2].name


  // include patronus with template literals
  let patronus = characters[select.selectedIndex - 2].patronus
  document.querySelector('.patronus').innerText = `Patronus: ${patronus}`
  
}
selectElement.addEventListener('change', getMoreInfo)









