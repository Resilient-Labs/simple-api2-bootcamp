////Goal: Display data returned from an api
document.querySelector('button').addEventListener('click', getArt)


function getArt(){
    let objNumber = Math.round(Math.random() * (482317-0) + 0)
    console.log(objNumber)
    let url = `https://collectionapi.metmuseum.org/public/collection/v1/objects/${objNumber}`

    fetch(url)
            .then(res => res.json()) // parse response as JSON
            .then(data => {
                console.log(data)
                if(data.title === undefined && data.artistDisplayName === undefined && data.primaryImageSmall === undefined){
                    document.querySelector('h2').innerText = 'try again'
                    document.querySelector('h3').innerText = ''
                    document.querySelector('img').src = ''
                }else if(data.title !== undefined && data.artistDisplayName !== undefined && data.primaryImageSmall === ''){
                    document.querySelector('h2').innerText = 'try again'
                    document.querySelector('h3').innerText = ''
                    document.querySelector('img').src = ''
                }else if(data.title !== undefined && data.artistDisplayName === ''){
                    document.querySelector('h2').innerText = data.title
                    document.querySelector('h3').innerText = `No artist listed, ${data.objectDate}`
                    document.querySelector('img').src = data.primaryImageSmall
                }else{
                    document.querySelector('h2').innerText = data.title
                    document.querySelector('h3').innerText = `${data.artistDisplayName}, ${data.objectDate}`
                    document.querySelector('img').src = data.primaryImageSmall
                }
                
        })
            .catch(err => {
                console.log(`error ${err}`)
        });
}