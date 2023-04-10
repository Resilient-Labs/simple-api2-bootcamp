document.querySelector('button').addEventListener('click', withRon)


function withRon(){
    
fetch(`https://ron-swanson-quotes.herokuapp.com/v2/quotes`)
    .then(res => res.json())
    .then(data => {
        console.log(data)//checks to see if API data shows up
        document.querySelector('h2').innerText = data[0]
    })
    .catch(err => {
        console.log('error ${err}')
    })

}