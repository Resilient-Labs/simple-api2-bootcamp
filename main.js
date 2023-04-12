document.querySelector('button').addEventListener('click', digiFetch)

async function digiFetch(){
    const res = await fetch('https://digimon-api.vercel.app/api/digimon')
    const data = await res.json()
        return randomDigi((data[Math.round(Math.random() * (209 - 0) + 0)]))
    
}

function randomDigi(data){
    let html = `
        <h1>${data.name}</h1>
        <img src="${data.img}">
        <h2>${data.level}</h2>
    `
    document.querySelector('#render').innerHTML = html
}