//User will enter a city's name and get the weather for that area

//need event listener that runs user's input
document.querySelector('button').addEventListener('click', getPoem)

function getPoem() {
    let keyword = document.querySelector('input').value
    let poemURL = `https://poetrydb.org/title/${keyword}/lines.json`
    fetch(poemURL)
    .then(response => response.json())
    .then(poem => {
        document.querySelector('#poemList').innerText = ''
        console.log(poem)
        //I want to show the entire length of poem to the DOM use loop
        const poemList = document.querySelector('#poemList')
        // Loop through each line of the poem
        for (let i = 0; i < poem[0].lines.length; i++) {
          // Create a new list item for each line
        const li = document.createElement('li')
          // Set the text of the list item to the current line
        li.innerText = poem[0].lines[i]
          // Append the list item to the poem list
        poemList.appendChild(li)
        }
        })
    .catch(err => {  
        console.log(`error ${err}`)
    });
}

// //Condition if word enterd doesn't have poem
// if (poem.status == '404') {
//     document.querySelector('p').innerText = "Sorry, no poem available with that word. Please try again!"
