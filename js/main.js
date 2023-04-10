document.querySelector(".wordSearch").addEventListener("click", getDefinition)

function getDefinition(){
    let selection = document.querySelector("input").value.toUpperCase()
    fetch(`https://www.dictionaryapi.com/api/v3/references/collegiate/json/${selection}?key=8e34da58-10bc-4c38-8e4a-9d4689835551`)
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            document.querySelector("h2").innerText = `${selection} (${data[0].fl}) - ${data[0].shortdef[0]}`


        })
    }