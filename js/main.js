




document.querySelector('button').addEventListener('click', getInfo)




function getInfo (){
    
    const url = 'https://api.kanye.rest'
    

    

    fetch(url) 
        
        .then(res => res.json()) // parse response as JSON 
        .then(data => { 
        console.log(data.url) 
        console.log(data)

        document.querySelector('h2').innerText = ` '${data.quote}'` 
        
        
        
        }) 
        .catch(err => { 
            console.log(`error ${err}`) 
        }); 
}