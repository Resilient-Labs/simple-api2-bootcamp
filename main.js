



function pickCard(e) {
    e.preventDefault()

    const url = 'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1'

    fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
    console.log(data.deck_id)

    const draw = `https://deckofcardsapi.com/api/deck/${data.deck_id}/draw/?count=52`
        fetch(draw)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
        console.log(data)
        console.log(data.cards[0])
            let cardTitle = document.querySelector('#cardName')
            let theCard = document.querySelector('img')

            theCard.style.display = 'block'
            cardTitle.innerText = `You picked the ${data.cards[0].value} of ${data.cards[0].suit}`
            theCard.src = data.cards[0].images.png

        })
        .catch(err => {
        console.log(`error ${err}`)
        });

    })
    .catch(err => {
    console.log(`error ${err}`)
    });

    
}

document.querySelector('button').addEventListener('click', pickCard)