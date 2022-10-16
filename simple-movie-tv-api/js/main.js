//Instructions: Enter in any movie or TV show title to be returned the release date and plot 

document.querySelector('button').addEventListener('click', runFunction)

let showSpan = false 
document.querySelector('span').style.display = 'none'

function runFunction(){
    let mediaTitle = document.querySelector('input').value

    showSpan = true
    if(showSpan){
        document.querySelector('span').style.display = 'block'
    }

    fetch(`http://www.omdbapi.com/?apikey=499a04b4&t=${mediaTitle}`)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
    console.log(data)

    document.querySelector('h2').innerText = data.Title
    document.querySelector('h4').innerText = data.Released
    document.querySelector('img').src = data.Poster
    document.querySelector('h3').innerText = data.Plot

    })
    .catch(err => {
    console.log(`error ${err}`)
    }); 

}






















/* 
fetch("https://dog.ceo/api/breeds/image/random")
.then(res => res.json()) // parse response as JSON
.then(data => {
console.log(data)
})
.catch(err => {
console.log(`error ${err}`)
}); 

*/