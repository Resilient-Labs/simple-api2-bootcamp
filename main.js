const selectButt = document.querySelector('button');

function getAnime() {
  const pickAnime = document.getElementById('anime');
  const pickCharacter = document.getElementById('character');
  const pickQuote = document.getElementById('quote');

  const url = "https://animechan.vercel.app/api/random";

  fetch(url)
    .then((res) => res.json())
    .then((animeData) => {
      console.log(animeData);

      pickAnime.textContent = animeData.anime;
      pickCharacter.textContent = animeData.character;
      pickQuote.textContent = animeData.quote;
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}

selectButt.addEventListener('click', getAnime);
