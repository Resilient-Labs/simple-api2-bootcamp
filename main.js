// EXAMPLE
// fetch("https://dog.ceo/api/breeds/image/random")
//  .then(res => res.json()) // parse response as JSON
//  .then(data => {
//  console.log(data)
//  })
//  .catch(err => {
//  console.log(`error ${err}`)
//  });

// Worked with Oscar, house garnder


document.querySelector('.button').addEventListener('click', getCatPhoto)

function getCatPhoto(){
  fetch(`https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=REPLACE_ME`)
  .then(res => res.json())
  .then(data => {
    console.log(data)
    document.querySelector('img').src = data[0].url
  })
  .catch(err => {
    console.log(`error ${err}`)
  })
}





























// document.querySelector('.button').addEventListener('click', getVideo)


// function getVideo(){

// fetch(`https://apimeme.com/meme?meme=10-Guy&top=Top+text&bottom=Bottom+text`)
// .then(res => res.json()) // parse response as JSON
//  .then(data => {
//   console.log(data)
//   })
//   .catch(err => {
//   console.log(`error ${err}`)
//   })
// }







































// document.querySelector('.button').addEventListener('click', searchWord)

// function searchWord(){
//   let word = document.querySelector('.text').value
//   fetch(`https://dictionaryapi.com/api/v3/references/collegiate/json/test?key=9621c1f3-35c3-46b1-8602-f1a01a05327d${word}`)
// .then(res => res.json())
// .then(data => {
//   console.log(data)
//   console.log(word)
//   document.querySelector('h1').innerHTML = data.url
// })
// // .catch(err => {
// //   console.log(`error ${err}`)
// // })
// console.log(word)
// }



// function searchWord(){
//   let trivia = document.querySelector('.text').value
//   fetch(`https://opentdb.com/api.php?amount=10&type=multiple$`)
//   .then(res => res.json())
//   .then(data => {
//     console.log(data)
//     document.querySelector('h1').innerHTML = data.question
//   })
//   .catch (err => {
//     console.log(`err ${err}`)
//   })
// }








  //  document.querySelector('img').src = data.url
  //  document.querySelector('p').innerText = data.explanation