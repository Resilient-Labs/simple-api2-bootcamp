//create an event that will listen for the click of the button
document.querySelector('button').addEventListener('click', getDefinition)


//create a function that will produce the definition
function getDefinition(){
    const selection = document.querySelector('input').value
    const apiKey = '61d6c1b9-95ca-4b66-b8ef-2203f9669bdf'
    const url = `https://www.dictionaryapi.com/api/v3/references/collegiate/json/${selection}?key=${apiKey}`

    fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
        console.log(data[0])
        document.querySelector('#definition').innerText = ` ${data[0].fl} -  ${data[0].shortdef}`
        
    })
    .catch(err => {
        console.log(`error ${err}`)
});

}