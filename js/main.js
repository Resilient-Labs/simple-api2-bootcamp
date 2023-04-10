//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/



document.querySelector('button').addEventListener('click', getRecipe)
let ul = document.querySelector('ul')

function getRecipe(){
ul.innerHTML = ''
let url = 'https://api.spoonacular.com/recipes/random?apiKey=6abeeda700984e08b28603ec3813f954'

  fetch(url) 
    .then(res => res.json()) // parse response as JSON 
    .then(data => { 
      console.log(data) 
      document.querySelector('h2').innerText = data.recipes[0].title
      document.querySelector('img').src = data.recipes[0].image
      document.querySelector('#recipe').innerHTML = data.recipes[0].instructions
      document.querySelector('a').href = data.recipes[0].spoonacularSourceUrl
      let items = data.recipes[0].extendedIngredients
      for (let i = 0; i < items.length; i++){
        console.log(items[i].original)
        let li = document.createElement('li')
        li.innerText = items[i].original
        ul.appendChild(li)
      }


      


    }) 
    .catch(err => { 
        console.log(`error ${err}`) 
    });

}
