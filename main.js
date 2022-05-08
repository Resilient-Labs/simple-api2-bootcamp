document.querySelector('button').addEventListener('click', getQuote)

function getQuote() {
    let motivate= document.querySelector('#input').value


    const options = {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'X-RapidAPI-Host': 'quotel-quotes.p.rapidapi.com',
            'X-RapidAPI-Key': 'adcb157487mshbfd65850fc06260p18d6ecjsnbd845fcb0ea1'
        },
        body: `{
        "pageSize": 25,
        "page": 0,
        "searchString": "${motivate}"
    }`
    };

    fetch('https://quotel-quotes.p.rapidapi.com/search/quotes', options)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            document.querySelector('#author1').innerText = data[0].name
            document.querySelector('#q1').innerText = data[0].quote
            document.querySelector('#profess1').innerText = data[0].profession
            document.querySelector('#author2').innerText = data[1].name
            document.querySelector('#q2').innerText = data[1].quote
            document.querySelector('#profess2').innerText = data[1].profession
            document.querySelector('#author3').innerText = data[2].name
            document.querySelector('#q3').innerText = data[2].quote
            document.querySelector('#profess3').innerText = data[2].profession
            document.querySelector('#author4').innerText = data[3].name
            document.querySelector('#q4').innerText = data[3].quote
            document.querySelector('#profess4').innerText = data[3].profession
            document.querySelector('#author5').innerText = data[4].name
            document.querySelector('#q5').innerText = data[4].quote
            document.querySelector('#profess5').innerText = data[4].profession
            document.querySelector('#author6').innerText = data[5].name
            document.querySelector('#q6').innerText = data[5].quote
            document.querySelector('#profess6').innerText = data[5].profession

            

            /*document.querySelector('#h21').innerText = data.hits[0].recipe.label
            document.querySelector('#img1').src = data.hits[0].recipe.image
            document.querySelector('#h21').innerText = data.hits[0].recipe.ingredientLines
            document.querySelector('#h22').innerText = data.hits[1].recipe.label
            document.querySelector('#img2').src = data.hits[1].recipe.image
            document.querySelector('#h22').innerText = data.hits[1].recipe.ingredientLines
            document.querySelector('#h23').innerText = data.hits[2].recipe.label
            document.querySelector('#img3').src = data.hits[2].recipe.image
            document.querySelector('#h23').innerText = data.hits[2].recipe.ingredientLines*/


        })


        .catch(err => console.error(err));
}









        
