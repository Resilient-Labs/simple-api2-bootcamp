function getGOT(){
    let selection= document.querySelector('#user').value 
    const url = `https://api.funtranslations.com/translate/dothraki.json?text=${selection}`
    fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data)
      document.getElementById('userInput').innerText = `${data.contents.text}`
      document.getElementById('yodaOutput').innerText = `${data.contents.translated}`
    })
    .catch(err => {
        console.log(`error ${err}`)
});
}
document.querySelector('#translate').addEventListener('click', getGOT)
