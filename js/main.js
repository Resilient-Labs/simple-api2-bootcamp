document.querySelector('button').addEventListener('click', getImage)
function getImage(){
    // const val = document.querySelector('input').value
    const url = "https://api.thecatapi.com/v1/images/search"
    fetch(url, {
        headers:{
            "x-api-key": "6cfba53f-dfb0-4469-8145-37d15970c7b2"
        }
    })
    .then(res => res.json())
    .then(data => {
        document.querySelector('img').src = data[0].url
         //data[0].url
        // document.querySelector('h3').innerHTML = data.data
        console.log(data)
    })
    .catch(err => console.log(err))
}
    // fetch(url)
    //     .then(res => res.json()) // parse response as JSON
    //     .then(data => {
    //     console.log(data)
    //     // document.querySelector('h2').textContent = data.title
    // })
        // .catch(err => {
        //     console.log(`error ${err}`)
        // });

 /*Contributors:

Miriam
Alexa
Roxana
David
Shannon
*/