
document.querySelector("#getFact").addEventListener('click', getFact);

function getFact() {
    fetch('https://uselessfacts.jsph.pl/random.json?language=en')
        .then(response => response.json())
        .then(data => {
            document.querySelector("#fact").innerHTML = data.text;
        })
        .catch(error => {
            console.log(error);
        }
        )
}
