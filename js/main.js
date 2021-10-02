document.querySelector('button').addEventListener('click', getDogPic)

function getDogPic(){
  const rand = document.querySelector('input').value
  const value = rand.toLowerCase();
  const link = `https://dog.ceo/api/breed/${value}/images?api_key = noneofyourownf-3985-4131-9e27-308d4cb7f03e`

  fetch(link)
  .then(res => res.json())
  .then(data => {
    document.querySelector('img').src = data.message[0]
})
  .catch((err) => {
    console.log(`error ${err}`)
  })
}
