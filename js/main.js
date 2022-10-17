
//https://www.omdbapi.com/
//listener
document.querySelector("#submit").addEventListener("click", userInput);
//
let title = document.querySelector(".title")
let rated = document.querySelector(".rated")
let poster = document.querySelector(".poster")
let genre = document.querySelector(".genre")
let description = document.querySelector(".description")

//gets date and 
function userInput(event) {
    //stops refreshing on submit, Shout on Leon
    event.preventDefault()
    //I am grabbing the user input date
    movie = document.getElementById("movie-name").value
    console.log(movie)

    if (movie === "" | movie === "undefined") {
        alert("enter a movie")
    }

    //refuses to work with ext object 
    //return 401 error code
    //works with key inside fetch or main.js
    let key = config.MY_API_TOKEN
    //fetch api
    fetch(`http://www.omdbapi.com/?apikey=${key}=${movie}`)
    .then((response) => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error("NETWORK RESPONSE ERROR");
        }
    })
    .then(data => {
        console.log(data);
        title.innerHTML = data.Title
        rated.innerHTML = data.Rated
        poster.src = data.Poster
        genre.innerHTML = data.Genre
        description.innerHTML =  data.Plot

        // document.querySelector(".director") = data.director
        
        // displayPicture(data)
    })


}