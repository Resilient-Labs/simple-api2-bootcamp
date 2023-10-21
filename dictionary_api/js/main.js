document.querySelector('.search').addEventListener('click',dicionary)
function dicionary(){

    const selection = document.querySelector('#word-input').value  
    const url = `https://api.api-ninjas.com/v1/dictionary?word=${selection}`
    mode = 'cors'//??? hoste api allows
    method = 'GET'
    const headers = {
        headers:{
            'X-Api-Key': 'cKeJoFU1St6w3OKvQGZF5ND3wsj7bl5SOaloYeCf'
        }
       
    }
   
    fetch(url,headers) // the browers api method
    .then(res => res.json())
    .then(data => {
        console.log(data)
        document.querySelector('.word').innerText = data.word
        document.querySelector('.definition').innerText = data.definition
    })
    .catch(error => {
    console.log(`error : ${error}`)
});
}

/// get api key from website 
/// user types word
//  go into api get word
// go to api get definiton 
// show definition to user



// // Define the URL and headers
// const url = 'https://api.api-ninjas.com/v1/dictionary';
// const headers = new Headers({
//   'X-Api-Key': 'cKeJoFU1St6w3OKvQGZF5ND3wsj7bl5SOaloYeCf'
// });

// // Define the word to look up
// const word = 'example';

// // Make the request
// fetch(`${url}?word=${word}`, { headers })
//   .then(response => {
//     // Check for a valid response
//     if (!response.ok) {
//       throw new Error(`Network response was not ok ${response.statusText}`);
//     }
//     return response.json();
//   })
//   .then(data => {
//     console.log(data);
//   })
//   .catch(error => {
//     console.error('There has been a problem with your fetch operation:', error);
//   });
