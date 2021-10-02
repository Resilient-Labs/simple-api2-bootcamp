document.getElementById('button').addEventListener('click', button)
const url = 'https://api.coindesk.com/v1/bpi/currentprice.json'
function button(){
    fetch(url)
     .then(res=>res.json())
     .then(data=>{
      console.log(data)
      document.querySelector('.description').innerText = data.bpi.USD.description
      document.querySelector('.rate').innerText = data.bpi.USD.rate
      document.querySelector('.time').innerText = data.time.updated
      document.querySelector('.Edescription').innerText = data.bpi.EUR.description
      document.querySelector('.Erate').innerText = data.bpi.EUR.rate
      document.querySelector('.Etime').innerText = data.time.updated
      document.querySelector('p').innerText=data.disclaimer
    })
        .catch(err=>{
         console.log("error" + err)
    })
}
