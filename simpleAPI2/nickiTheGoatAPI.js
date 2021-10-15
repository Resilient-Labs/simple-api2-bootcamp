const button = document.querySelector('button')
const goatGifs = document.querySelector('#results')
const apikey = 'S8ABMUFEL5NL'


button.addEventListener('click', ()=>{
  fetch(`https://api.tenor.com/v1/search?tag=nickiminaj&key=${apikey}&limit=40`)
    .then(res => res.json())
    .then(response => {
      //console.log(response.results)
      document.getElementById('barbieGoinBad').innerHTML = '"You asked for the GOAT so they sent me, sleaze."'
      let credit = document.getElementById('credit')
      let p = document.createElement('p')
      p.innerHTML= '- Nicki Minaj, "Barbie Goin Bad"'
      credit.appendChild(p)

      let iframe = document.createElement('iframe')
      iframe.src = 'https://audiomack.com/embed/song/nicki-minaj/barbie-goin-bad?background=1&color=ff66c5'
      iframe.setAttribute('width', '35%')
      iframe.setAttribute('height', '100')
      iframe.setAttribute('allow',"autoplay")
      credit.appendChild(iframe)
      let goatArray = response.results
      goatArray.forEach(el =>{
        let url = el.media[0].gif.url
        let img = document.createElement('img')
        img.src = url
        goatGifs.appendChild(img)
      })

    })
})
