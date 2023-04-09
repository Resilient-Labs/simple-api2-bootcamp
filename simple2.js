//Goal: Display data returned from an api

document.querySelector('button').addEventListener('click', getCoffee)

function getCoffee() {
  let selection = document.querySelector('input').value
  const url = `https://api.sampleapis.com/coffee/iced`
  fetch(url) //api request to server, server sends back json object with 2 properties, message and status
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      if (selection === "Frappuccino" && data[1].title === "Frappuccino" || selection === "frappuccino" && data[1].title === "Frappuccino") {
        document.querySelector('h2').innerText = data[1].title
        document.querySelector('h3').innerText = data[1].ingredients
        document.querySelector('h4').innerText = data[1].description
        document.querySelector('img').src = data[1].image
        // console.log(data[1].title)
        // console.log(data[1].image)
        // console.log(data[1].ingredients)
      } else if (selection === "Cold Brew" && data[0].title === "Cold Brew" || selection === "cold brew" && data[0].title === "Cold Brew") {
        document.querySelector('h2').innerText = data[0].title
        document.querySelector('h3').innerText = data[0].ingredients
        document.querySelector('h4').innerText = data[0].description
        document.querySelector('img').src = data[0].image
        // console.log(data[0].title)
        // console.log(data[0].image)
        // console.log(data[0].ingredients)
      } else if (selection === "Nitro" && data[2].title === "Nitro" || selection === "nitro" && data[2].title === "Nitro") {
        document.querySelector('h2').innerText = data[2].title
        document.querySelector('h3').innerText = data[2].ingredients
        document.querySelector('h4').innerText = data[2].description
        document.querySelector('img').src = data[2].image
        // console.log(data[2].title)
        // console.log(data[2].image)
        // console.log(data[2].ingredients)
      } else if (selection === "Mazagran" && data[3].title === "Mazagran"|| selection === "mazagran" && data[3].title === "Mazagran") {
        document.querySelector('h2').innerText = data[3].title
        document.querySelector('h3').innerText = data[3].ingredients
        document.querySelector('h4').innerText = data[3].description
        document.querySelector('img').src = data[3].image
        // console.log(data[3].title)
        // console.log(data[3].image)
        // console.log(data[3].ingredients)
      }

      
    })
    .catch(err => {
      console.log(`error ${err}`)
    });

}













