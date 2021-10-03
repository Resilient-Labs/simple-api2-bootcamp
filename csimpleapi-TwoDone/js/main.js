// random chuck norris joke generator
fetch(`https://api.chucknorris.io/jokes/random`)
        .then(res => res.json())
        .then(data => {
        console.log(data)
        console.log()
        document.querySelector('h1').innerText = data.value
        
        
       
        
    })
        .catch(err => {
            console.log(`error ${err}`);
            });
