//low effort css rn will be updated later


document.querySelector('button').addEventListener('click', getPoem)

function getPoem(){
    let url = `https://poetrydb.org/random`

fetch(url)
.then(res => res.json())
.then(poetry => {
        console.log(poetry[0].lines[0])
        document.querySelector('h2').innerText = poetry[0].author
        document.querySelector('h3').innerText = poetry[0].title
        document.querySelector(".one").innerText = poetry[0].lines[0]
        document.querySelector(".two").innerText = poetry[0].lines[1]
        document.querySelector(".three").innerText = poetry[0].lines[2]
        document.querySelector(".four").innerText = poetry[0].lines[3]
        document.querySelector(".five").innerText = poetry[0].lines[4]
        document.querySelector(".six").innerText = poetry[0].lines[5]
        document.querySelector(".seven").innerText = poetry[0].lines[6]
        document.querySelector(".eight").innerText = poetry[0].lines[7]
        document.querySelector(".nine").innerText = poetry[0].lines[8]
        document.querySelector(".ten").innerText = poetry[0].lines[9]
})
.catch(err => {
    console.log(`error ${err}`)
});
}