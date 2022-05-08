document.querySelector('button').addEventListener('click', getInfo)

function getInfo(){
    let berryVal = document.querySelector('input').value
    let url = `https://pokeapi.co/api/v2/berry/${berryVal}`
        fetch(url)
            .then(res => res.json())
            //a fetch call will be responsed as an html
            // (res.json) takes the response and parses (translates) it to a json object
            //.json is a built in js method

            .then(data => {
                console.log(data)
                document.querySelector('.berryType').innerText = data.name

                document.querySelector('.flavorOne').innerText = data.flavors[0].flavor.name
                document.querySelector('.flavorTwo').innerText = data.flavors[1].flavor.name
                document.querySelector('.flavorThree').innerText = data.flavors[2].flavor.name
                document.querySelector('.flavorFour').innerText = data.flavors[3].flavor.name
                document.querySelector('.flavorFive').innerText = data.flavors[4].flavor.name


                document.querySelector('.potencyOne').innerText = data.flavors[0].potency
                document.querySelector('.potencyTwo').innerText = data.flavors[1].potency
                document.querySelector('.potencyThree').innerText = data.flavors[2].potency
                document.querySelector('.potencyFour').innerText = data.flavors[3].potency
                document.querySelector('.potencyFive').innerText = data.flavors[4].potency
            
        })
        .catch(err => {
            console.log(`error ${err}`)
    });
}