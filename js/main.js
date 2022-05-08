document.querySelector('.submitBtn').addEventListener('click', translatePhrase)


function translatePhrase() {

    const text = document.querySelector('#userInput').value.toLowerCase()

    const url = `https://api.funtranslations.com/translate/yoda.json?text=${text}`

    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            console.log(data.contents.translated)
            document.querySelector('.results').innerText = data.contents.translated
        })
        .catch(err => {
            console.log(`error ${err}`)
        })
}