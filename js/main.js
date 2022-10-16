




//




document.querySelector('button').addEventListener('click', getRecipe)





function getRecipe() {

    const food = document.querySelector('#food').value

    //const numToSearch = document.querySelector('#numberInput').value
    //const triviaType = document.querySelector('#triviaType').value


    //Use this for the user entering a city
    //http://numbersapi.com/${numToSearch}/${triviaType}
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${food}`)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
            console.log(data)
            console.log(data.meals[0].strYoutube)

            document.querySelector("#videoLink").href = data.meals[0].strYoutube



        })
        .catch(err => {
            console.log(`error ${err}`)

        });

}

