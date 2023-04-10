function boredAtHome(){
    const url = `https://www.boredapi.com/api/activity?participants=1`
    console.log(url)

    fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data.activity)
        document.querySelector('h3').innerText = data.activity

    })
}
document.querySelector('button').addEventListener('click', boredAtHome);