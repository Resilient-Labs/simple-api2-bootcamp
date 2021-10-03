document.querySelector('#question').addEventListener('click', randomNum)
document.querySelector('#answer').addEventListener('click', getAnswer)



function randomNum() {
   let num = Math.floor(Math.random() * 100)
   console.log(num)
   const url = 'http://jservice.io/api/clues'
   fetch(url)
    .then(res => res.json())
    .then(data => {
        
        for(let i=0; i<data.length; i++){
            // console.log(data[i].id)
            if(num === data[i].id) {
                document.querySelector('h2').innerHTML = `<h2>Question: ${data[i].question}</h2><br><h3 class='hidden'>Answer: ${data[i].answer}</h3>`
                // console.log(data[i].question)
            }
            
        }
        

        
    })
    .catch(err => {
        console.log(`error ${res.error}`)
    })

}



function getAnswer() {
    document.querySelector('h3').style.display = 'block' 
    
} 