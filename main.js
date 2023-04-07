document.querySelector('button').addEventListener('click', digiFetch)

function digiFetch(){
    fetch('https://digimon-api.vercel.app/api/digimon')
    .then (res => res.json())
    .then(data =>{
        return randomDigi((data[Math.round(Math.random() * (209 - 0) + 0)]))
    })
}

function randomDigi(data){
    let html = `
        <h1>${data.name}</h1>
        <img src="${data.img}">
        <h2>${data.level}</h2>
    `
    document.querySelector('#render').innerHTML = html
}