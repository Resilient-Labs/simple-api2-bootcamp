document.querySelector('#btn').addEventListener('click', myApi)

function myApi(){
let userInput = document.querySelector('#search').value

fetch(`https://www.dictionaryapi.com/api/v3/references/collegiate/json/${userInput}?key=3d2faf5b-7dea-4207-b472-c506f726d3e6`)
     .then(response => response.json())
     .then(data => {
        console.log(data[0].shortdef)
        let result = document.querySelector('#result')
        result.innerHTML = ''
        data[0].shortdef.forEach(item=> {
               result.innerHTML += `<p>${item}</p>`
          })
     })

}


