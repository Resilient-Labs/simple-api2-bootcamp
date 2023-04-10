document.querySelector('button').addEventListener('click', getDefinition)


function getDefinition(){
  let userFavNum = document.querySelector('input').value
  let url = `http://numbersapi.com/${userFavNum}/math?json`
   
  fetch(url) 
    
  //converting url in a way to read script
    .then(res => res.json())
    .then(data => { 
      console.log(data)
      document.querySelector('h2').innerText = `${data.number}`
      document.querySelector('h3').innerText = `${data.text}`
    
    })
  .catch(err => { 
    console.log(`error ${err}`) 
  }); 

}