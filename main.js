document.querySelector('.input').addEventListener('click', getImg)


function getImg () {
  
  fetch(`https://api.thecatapi.com/v1/images/search?api_key=live_g0yr5EbkUqUp1uCHOa34stN6V9cMjdKJt7MUY5xnnsNXtTlKn3HH0pgNmCBnW6Jj`)
  
  .then (res => res.json())
  .then ( data => {
    
    console.log(data)
  
    
    document.querySelector('img').src = data[0].url
  }

  )

}


