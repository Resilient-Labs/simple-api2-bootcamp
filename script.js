const api = 'https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&amount=100'

const getJokes = () => {
    jokeArray = []
    fetch(api)
    .then(res => res.json())
    .then(data => {
        console.log(data.jokes)
        for (let i = 0; i < data.jokes.length; i++) {
            if (data.jokes[i].joke) {
               return document.querySelector('.jokez').innerText = data.jokes[i].joke 
            } else {
                (!data.jokes[i].joke)
                document.querySelector('.jokez').innerText = data.setup
                document.querySelector('.jokez').innerText = data.delivery
        }  
}})
} 
getJokes()