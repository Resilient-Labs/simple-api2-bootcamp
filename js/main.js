//SITE: https://breakingbadapi.com/documentation

document.querySelector('button').addEventListener('click', getCharacter)
function getCharacter(){
fetch('https://www.breakingbadapi.com/api/character/random')
.then(res => res.json())
.then(data => {
    
    document.querySelector('h1').innerText = data[0].name
    document.querySelector('img').src = data[0].img 
})
.catch(err => {
    console.log(`error ${err}`)
})
}
