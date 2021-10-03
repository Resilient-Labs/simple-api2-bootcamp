document.querySelector('button').addEventListener('click', getCats)

function getCats(){
    fetch('https://anime-facts-rest-api.herokuapp.com/api/v1')
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            document.querySelector('img').src = data.data[5].anime_img
            document.querySelector('img').style.display = 'inline-block'
        })
        .catch(err =>{
            console.log(err);
        })
}