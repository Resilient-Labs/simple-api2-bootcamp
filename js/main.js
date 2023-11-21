document.querySelector('#factBtn').addEventListener('click', fetchUselessFact)

function fetchUselessFact() {
    const url = 'https://uselessfacts.jsph.pl/api/v2/facts/random?language=en'
    fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
        const result = document.querySelector('#result')
        result.innerHTML = ''

        const fact = result.appendChild(document.createElement('p'))
        fact.innerText = data.text

        const source = result.appendChild(document.createElement('p'))
        source.innerHTML = `Source: <a href="${data.source_url}" target="_blank">${data.source}</a>`
    })

    .catch(err => {
        console.log(`error ${err}`)
    })
}