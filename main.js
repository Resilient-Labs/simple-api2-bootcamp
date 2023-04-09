
document.querySelector(".btn").addEventListener("click", pokeMaster)
// document.querySelector(".btn2").addEventListener("click",nextPic)



// function pokeMaster(){
//     let selection = document.querySelector('input').value
//     const url = `https://api.pokemontcg.io/v2/cards?q=name:${selection}`
//   fetch(url)
//     .then(res => res.json()) // parse response as JSON
//     .then(data => {
//       console.log(data.data)
//       document.querySelector(".one").src = data.data[0].images.small
//       document.querySelector(".two").src = data.data[1].images.small
//       document.querySelector(".three").src = data.data[2].images.small
//       document.querySelector(".four").src = data.data[3].images.small
//       document.querySelector(".five").src = data.data[4].images.small
//       document.querySelector(".six").src = data.data[5].images.small
//       document.querySelector(".seven").src = data.data[6].images.small
//       document.querySelector(".eight").src = data.data[7].images.small
//       document.querySelector(".nine").src = data.data[8].images.small
//       document.querySelector(".ten").src = data.data[9].images.small
//       document.querySelector(".eleven").src = data.data[10].images.small
//       document.querySelector(".twelve").src = data.data[11].images.small
//     })
//     .catch(err => {
//         console.log(`error ${err}`)
// });
// }


let image = document.querySelector("img")

function pokeMaster() {
  document.querySelector("body").style.background="url('https://www.pngall.com/wp-content/uploads/4/Pokemon-Pokeball-PNG-Image-HD.png')"; 
  let selection = document.querySelector('input').value
  const url = `https://api.pokemontcg.io/v2/cards?q=name:${selection}`
  fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data.data)
      image.classList.remove("hidden")
      document.querySelector(".one").src = data.data[0].images.small
      document.querySelector(".two").src = data.data[1].images.small
      document.querySelector(".three").src = data.data[2].images.small
      document.querySelector(".four").src = data.data[3].images.small
      document.querySelector(".five").src = data.data[4].images.small
      document.querySelector(".six").src = data.data[5].images.small
      document.querySelector(".seven").src = data.data[6].images.small
      document.querySelector(".eight").src = data.data[7].images.small
      document.querySelector(".nine").src = data.data[8].images.small
      document.querySelector(".ten").src = data.data[9].images.small
      document.querySelector(".eleven").src = data.data[10].images.small
      document.querySelector(".twelve").src = data.data[11].images.small
      document.querySelector(".thirteen").src = data.data[12].images.small
      document.querySelector(".fourteen").src = data.data[13].images.small
      document.querySelector(".fifthteen").src = data.data[14].images.small



      const buttons = document.querySelectorAll("[data-carousel-button]")

      buttons.forEach(button => {
        button.addEventListener("click", () => {
          const offset = button.dataset.carouselButton === "next" ? 1 : -1
          const slides = button
            .closest("[data-carousel]")
            .querySelector("[data-slides]")

          const activeSlide = slides.querySelector("[data-active")
          let newIndex = [...slides.children].indexOf(activeSlide) + offset
          if (newIndex < 0) newIndex = slides.children.length - 1
          if (newIndex >= slides.children.length) newIndex = 0

          slides.children[newIndex].dataset.active = true
          delete activeSlide.dataset.active
        })
      })


    })
    .catch(err => {
      console.log(`error ${err}`)
    });
}


// const buttons = document.querySelectorAll("[data-carousel-button]")

// buttons.forEach(button => {
//   button.addEventListener("click", () => {
//     const offset = button.dataset.carouselButton === "next" ? 1 : -1
//     const slides = button
//         .closest("[data-carousel]")
//         .querySelector("[data-slides]")

//     const activeSlide = slides.querySelector("[data-active")
//     let newIndex = [...slides.children].indexOf(activeSlide) + offset 
//     if(newIndex < 0) newIndex = slides.children.length -1
//     if(newIndex >= slides.children.length) newIndex = 0

//     slides.children[newIndex].dataset.active = true
//     delete activeSlide.dataset.active
//   })
// })





