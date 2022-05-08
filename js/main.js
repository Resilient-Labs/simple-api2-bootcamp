document.querySelector('button').addEventListener('click', getMakeup)

function getMakeup(){
	let makeUp = document.querySelector('input').value
	let url = `http://makeup-api.herokuapp.com/api/v1/products.json?brand=covergirl&product_type=${makeUp}`

	fetch(url) 
    .then(res => res.json()) // parse response as JSON 
    .then(data => { 
      let random = 2
      console.log(data) 
			document.querySelector('img').src = data[0].image_link
			document.querySelector('h2').innerText = data[0].name
			document.querySelector('h3').innerText = data[0].price
    }) 
    .catch(err => { 
        console.log(`error ${err}`) 
    }); 
}