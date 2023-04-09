document.querySelector('button').addEventListener('click', whatKanyeSaid)

function whatKanyeSaid() {
  // let getQuote = document.querySelector('h2').value
   
const url = (`https://api.kanye.rest/text=`)

fetch(url)
.then(res => res.json())
.then(data => {
  console.log(data.quote)
  document.querySelector('h3').innerText = data.quote
  
})
.catch(err => {
  console.log(`error ${err}`)
});
}
// found this api in Hayden House