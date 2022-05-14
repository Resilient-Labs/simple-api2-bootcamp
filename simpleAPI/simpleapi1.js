
document.querySelector('button').addEventListener('click',getLyrics)

function getLyrics() {

    let artist = document.querySelector('#artist').value
    let song = document.querySelector('#song').value
    const url = `https://api.lyrics.ovh/v1/${artist}/${song}`

    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(!data.lyrics){
                return document.querySelector('h2').innerText = 'No lyrics found.'
            }
            document.querySelector('h2').innerText = data.lyrics
        })
        .catch(err => {
            console.log(`error ${err}`)
        });
    }