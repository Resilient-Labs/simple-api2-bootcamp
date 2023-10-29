// create simple API where user will click and pictures of pictures will appear

function grabDrink() {
  const url = `https:api.spoonacular.com/food/wine/recommendation?apiKey=e09294d6a07c4f0887039a175640d3ce&wine=pinot_noir&number=50`
  fetch(url)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      let wine = Math.floor(Math.random() * 50)
      document.querySelector('#picture').src = data.recommendedWines[wine].imageUrl
      document.querySelector('#title').innerText = data.recommendedWines
      [wine].title
      document.querySelector('#describe').innerText = data.recommendedWines
      [wine].description
      document.querySelector('#price').innerText = data.recommendedWines
      [wine].price
      document.querySelector('#rating').innerText = data.recommendedWines
      [wine].ratingCount


    })




    .catch(err => {
      console.log(`error ${err}`)
    })

}


document.querySelector('button').addEventListener('click', grabDrink)

