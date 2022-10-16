
function getBreed(){
fetch('https://api.thecatapi.com/v1/breeds')
.then(res => res.json())
.then(data => {
    for(let i = 0 ; i < data.length; i++){
        console.log(data[i].name)
    }

})
.catch(err => {
    console.log(`error ${err}`)
})
}
getBreed()