//goal is to get a currency and covert it into another currency for the crypto space.

//create event listeners
document.querySelector('button').addEventListener('click', triggeredEventListener)


//create functing to fire when event listener triggers
function triggeredEventListener ( ){

    // grabs input value
    let selectedState = document.querySelector('input').value

    //API KEY
    let api_Key = process.env.API_KEY

    //create fetch syntax
    fetch(`https://api.covidactnow.org/v2/state/${selectedState}.json?apiKey=${api_Key}`)
    .then( res => res.json())
    .then(data => {
        //console.log(data)
        let newCases = data.actuals.newCases
        
        document.querySelector('#covidResults').innerHTML = newCases
        
    })
    .catch(err =>{
        console.log(`Error: ${err}`)
    })

}

//--------------------fetch syntax testing 

