document.querySelector('button').addEventListener('click', getNews)

URL = `https://api.publicapis.org/entries`

function getNews(){
    let num = document.querySelector('input').value
    fetch(URL)
    .then(res => res.json())
    .then(data => {
        console.log(data.entries[num])
        document.querySelector('.name').innerText = data.entries[num].API
        document.querySelector('.desc').innerText = data.entries[num].Description
        document.querySelector('.link').innerText = data.entries[num].Link
        
    })
    .catch(err => {
        console.log(`error ${err}`)
        
    });
}