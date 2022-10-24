// Display data returned from an api 


document.querySelector("button").addEventListener("click", randomizeMeme);



function randomizeMeme() {
  fetch(`https://api.imgflip.com/get_memes`)
    .then((res) => res.json())
    .then((data) => {
        let randomNum = Math.floor(Math.random()*data.data.memes.length)
        document.querySelector('img').src = data.data.memes[randomNum].url
    
    })
    .catch((err) => {
        console.log(`err ${err}`)
    });

}


randomizeMeme() 