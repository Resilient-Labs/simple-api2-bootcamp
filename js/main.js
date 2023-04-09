fetch("https://randomfox.ca/floof/")// create a fetch with picture of random fox
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data)
      document.querySelector("img").src = data.image // get the data drom the picture

    })
    .catch(err => {
        console.log(`error ${err}`)// incase we get an error in the data is gonna show
});


// create a function to reload the window so is gonna show a new fox
function foxUwu(){
  window.location.reload()
}
document.querySelector('button').addEventListener('click', foxUwu)