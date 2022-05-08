//https://api.dictionaryapi.dev/api/v2/entries/en/hello


document.querySelector('button').addEventListener('click', findDefinition)

function findDefinition(e){
    e.preventDefault
    let word = document.querySelector('input').value

    let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`

    fetch(url) 
    .then(res => res.json()) // parse response as JSON 
    .then(data => { 
     console.log(data) 
     //word that was searched
     //console.log(data[0].word)
     document.getElementsByName('word').innerText = data[0].word

     //audio of word
     //console.log(data[0].phonetics[0].audio)
     document.querySelector('audio').src = data[0].phonetics[0].audio

     //phonetic spelling of word
     //console.log(data[0].phonetics[1].text)
     document.getElementById('pronounce').innerText = data[0].phonetics[1].text

     //noun and definition
     //console.log(data[0].meanings[0].partOfSpeech)
     //console.log(data[0].meanings[0].definitions[0].definition)
     document.getElementById('noun').innerText = data[0].meanings[0].partOfSpeech
     document.getElementById('nounExample').innerText = data[0].meanings[0].definitions[0].definition

     //verb and definition
     //console.log(data[0].meanings[1].partOfSpeech)
     //console.log(data[0].meanings[1].definitions[0].definition)
     document.getElementById('verb').innerText = data[0].meanings[1].partOfSpeech
     document.getElementById('verbExample').innerText = data[0].meanings[1].definitions[0].definition

     
      
    //   document.querySelector('h2').innerText = data.title
    //   document.querySelector('img').src = data.url
    //   document.querySelector('h3').innerText = data.explanation

    }) 
    .catch(err => { 
        console.log(`error ${err}`) 
    }); 
}


