// Goal: Display data returned from an api

document.querySelector("button").addEventListener("click", getMeme)

function getMeme() {

    const url = 'https://api.doge-meme.lol/v1/memes/?skip=0&limit=800'


    fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(resData => {
        const meme = Math.floor(Math.random() * 800)

        document.querySelector('img').src = resData.data[meme].submission_url

        console.log(`memeReturned:${resData.data[meme].submission_url}`)
    
    })

   .catch(err => {
    console.log(`error ${err}`)
    }) 

}

/* fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(resData => {
        // The regular expression describes a pattern (inside the '/') - '$' is the end.
        const re = /.jpg$/
        // The value is returned and chosen at random
        let memeUrl = chooseSubmissionUrl(resData);
        // Keep looping while there's not a JPG at the end of the link - choose another one
        while(!memeUrl.match(re)) {
        console.log(`notAJpg: ${memeUrl}`)
        memeUrl = chooseSubmissionUrl(resData)
        }
        document.querySelector('img').src = url

        console.log(`memeReturned:${url}`)
    
    })

   .catch(err => {
    console.log(`error ${err}`)
    }) 

}

function chooseSubmissionUrl(memeData) {
    const index = Math.floor(Math.random() * 100);
    return memeData.data[index].submission_url
} */