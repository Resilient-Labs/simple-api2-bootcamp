let Btn = document.querySelector('.btn').addEventListener('click', getInfo)
let input = document.querySelector('input')
let result = document.querySelector('.result')


function getInfo() {

    let url = `https://restcountries.com/v3.1/name/${input.value}`
    console.log('This is the input value', input.value)
    fetch(url)
        .then(res => res.json())
        .then(data => {
            result.innerText = ` Country Name: ${data[0].name.common} | Captial: ${data[0].capital[0]} | Population: ${data[0].population}`
        })
        .catch(err => {
            console.error(`error ${err}`)
        });
    //console.error 
}
