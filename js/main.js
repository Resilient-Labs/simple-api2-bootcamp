  
  function getAnime(){
  let name = document.querySelector('#name')
  let score = document.querySelector('#score')
  let image = document.querySelector('img')
  let check = document.querySelector('input').value
  let synopsis = document.querySelector('p')
  let url = `https://api.jikan.moe/v4/anime?q=${check}`
  let result = document.querySelector('#result')

  fetch(url) 
    .then(res => res.json()) 
    .then(anime => { 
      console.log(anime)
      name.innerText = `${anime.data[0].title_english} A.K.A ${anime.data[0].title_japanese}`
      score.innerText = anime.data[0].score
      synopsis.innerText = `Here is a quick overview : ${anime.data[0].synopsis}`
      if(anime.data[0].score <= 5.5){
        result.innerText = `You didn't actually want to  watch this...did you? SUPER mid 🤢`
      }else if(anime.data[0].score > 6.9){
        result.innerText = 'Oooh! nice pick, not mid at all 😃'
      }else{
        result.innerText = `Yeah it's mid,(mathematically 🤓),`
      }
      if(check === 'One Piece' || check === 'one piece'){
        result.innerText = 'Hint : Maybe if you knew the Japanese Name the score would be better🙄 '
      }
      //I created this conditional at first because I realized this API can be very finicky with it's spellings. When 'one piece' is searched it brings up the rating for one of the 'OVA' episodes that doesn't have a rating at all. A solution that was proposed was to loop through the the different series data to hopefully get a more accurate score. Due to the nature of the data  presented I would have to do this for several titles especially some of the newer titles like 'demon slayer'. In the future I hope to find a more concise api to work with.
      image.src= anime.data[0].images.webp.image_url
    }) 
    .catch(err => { 
        console.log(`error ${err}`) 
    });
  
  }


  const button = document.querySelector('button').addEventListener('click',getAnime)

 