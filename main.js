document.querySelector('button').addEventListener('click',getEvent)

function getEvent(){
    // let getEvent = document.querySelector('input').value
    let url = `https://api.seatgeek.com/2/events?client_id=MjY4ODA5NTJ8MTY1MTk3NDAwNi43NDI5NjE`

    fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
    console.log(data.events)
    document.querySelector('h2').innerText = data.events[0].short_title
    document.querySelector('span').innerText = data.events[0].datetime_utc
    document.querySelector('p').innerText = data.events[0].venue.name
    document.getElementById('endTime').innerText = data.events[0].enddatetime_utc
    })
    .catch(err => {
    console.log(`error ${err}`)
    })
}