

document.querySelector('button').addEventListener('click', getAnimal)


function getAnimal(){
  let animalVal = document.querySelector('input').value
  let url = `https://zoo-animal-api.herokuapp.com/animals/rand?=${animalVal}`



  fetch(url)
  .then(res => res.json())
  .then(data => {
    document.querySelector('h2').innerText = data.name
    document.querySelector('h3').innerText = data.lifespan
    document.querySelector('img').src = data.image_link
   
    console.log(data)
    
  }) 
  .catch(err => {
    console.log(`error ${err}`)
  })









}