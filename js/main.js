const catResult = document.querySelector('#catResult')
const dogResult = document.querySelector('#dogResult')
const foxBtn = document.querySelector('#foxBtn')
const dogBtn = document.querySelector('#dogBtn')



foxBtn.addEventListener('click', getRandomfox)
// dogBtn.addEventListener('click', getRandomdog)


function getRandomfox() {
  fetch("https://randomfox.ca/floof/")
      .then(res => res.json()) 
      .then(data => {
      foxResult.innerHTML = `<img src = "${data.image}"/>`

      fetch("https://random.dog/woof.json")
      .then(res => res.json()) 
      .then(data => {
        if(data.url.includes(".mp4")){
          getRandomdog()
        } else {
      dogResult.innerHTML = `<img src = "${data.url}"/>`
    }})
    })
  }
  
  function getRandomdog() {
  
    }

    // help and some code from Florin Pop