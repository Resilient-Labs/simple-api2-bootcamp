document.querySelector('button').addEventListener('click', getCards)

function getCards(){
  // let film = document.querySelector('input').value
  let url = `https://protected-taiga-89091.herokuapp.com/api/card?pageSize=40&page=1`
  
  fetch(url) 
    .then(res => res.json()) // parse response as JSON 
    .then(data => { 
      console.log(data.data) 
      let cardDetails = data.data
      cardDetails.forEach(element =>{
        
       let ul = document.querySelector('ul')
       const li = document.createElement('li')
       ul.appendChild(li)
       let h2 = document.createElement('h2')
       h2.innerText = element.spanishName
       li.appendChild(h2)
       let h3 = document.createElement('h3')
       li.appendChild(h3)
       h3.innerText = element.englishName
       let h4 = document.createElement('h4')
       li.appendChild(h4)
       h4.innerText = element.kanji
       let h5 = document.createElement('h5')
       li.appendChild(h5)
       h5.innerText = element.Rōmaji

       let img = document.createElement('img')
       li.appendChild(img)
       img.src = element.sakuraCard
       let p = document.createElement('p')
       li.appendChild(p) 
       p.innerText = element.meaning

       
      
      } );
      // document.querySelector('img').src = data.image
    }) 
    .catch(err => { 
        console.log(`error ${err}`) 
    }); 
}






// cards https://protected-taiga-89091.herokuapp.com/api/card