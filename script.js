//
//Connect NASA API so that when the user enters a date it returns an image or video from that specific date.
document.querySelector("button").addEventListener("click", search)

//Here we add a border once the data is received from the search function.
function borderChange(){
  document.getElementById("movieInfo").style.border = "10px double yellow"
}

// This function allows you to get the input the user put in the text box.
function search() {
  const title = document.querySelector("input").value
  const url = `http://www.omdbapi.com/?i=tt3896198&apikey=7af87d47&t=${title}`


  fetch(url)
  .then(res => res.json()) // parse response as JSON
  .then(data => {
    console.log(data)

    document.querySelector("img").src = data.Poster

    const title = `Title: ${data.Title}`
    document.getElementById("title").innerText = title

    const year = `Year: ${data.Year}`
    document.getElementById("year").innerText = year

    const rated = `Rated: ${data.Rated}`
    document.getElementById("rated").innerText = rated

    const actors = `Actors: ${data.Actors}`
    document.getElementById("actors").innerText = actors

    const source = data.Ratings[1].Source
    const value = data.Ratings[1].Value
    const ratings = `Ratings: ${source} ${value}`
    document.getElementById("ratings").innerText = ratings

    const plot = `Plot: ${data.Plot}`
    document.getElementById("plot").innerText = plot

    borderChange()
  })
  .catch(err => {
    console.log(`error ${err}`)
  });
}
