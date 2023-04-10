let button = document.querySelector('button').addEventListener('click', anime)

function anime(){
  let userInput = document.querySelector('input').value
  let url = `https://api.jikan.moe/v4/anime?q=${userInput}&sfw`

  fetch(url) 
  .then(res => res.json()) 
  .then(data => { 
    console.log(data)
    document.querySelector('h2').innerText = data.data[0].title
    document.querySelector('h3').innerText = data.data[0].title_japanese 
    document.querySelector('h4').innerText = data.data[0].synopsis 
    document.querySelector('img').src = data.data[0].images.jpg.image_url
    document.querySelector('iframe').src = data.data[0].trailer.embed_url
  })

  .catch(err => { 
      console.log(`error ${err}`) 
  })
}
