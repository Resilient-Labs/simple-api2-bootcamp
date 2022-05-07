//Random Activity API - Bored? Refresh to see a new activity to do! 
fetch("https://www.boredapi.com/api/activity")
    .then(res => res.json()) 
    .then(data =>{
        console.log(data.activity)
        // returns the message property off object which is the link/image url. 
        document.querySelector('h3').innerText = data.activity
    })

    .catch(err =>{
        console.log(`error ${err}`)
    });

