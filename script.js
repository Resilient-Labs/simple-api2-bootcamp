document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
      const choice = document.querySelector('input').value
      const url = 'https://pokeapi.co/api/v2/pokemon/'+choice

      fetch(url)
            .then(res => res.json()) // parse response as json
            .then(data => {


                  document.querySelector('h2').innerText = data.name    // assign objects 
                  document.querySelector('h3').innerText = data.abilities[0].ability.name   // assign objects 
                  
                  


                  console.log(data)
            })
      .catch(err => {
            console.log(`error ${err}`)
      });


}