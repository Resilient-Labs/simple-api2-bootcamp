document.querySelector('button').addEventListener('click', getFood)



function getFood(){
  const url = `https://api.openbrewerydb.org/breweries`
  fetch(url)
  .then((res) => res.json())
  .then((data) => {
    console.log(data[0])
    document.querySelector('h2').innerText = data[0].name;
  })
  .catch((err) => console.log(err))
}
