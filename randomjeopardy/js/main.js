document.querySelector('#question').addEventListener('click', getQuestion)


function getQuestion() {
    const url = (`http://jservice.io/api/clues?`);

    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            const randomNum = Math.floor(Math.random() * 99) + 1;
            const valueText = "💰VALUE $" + data[randomNum].value;
            document.querySelector('h5').innerText = valueText
            document.querySelector('p').innerText = data[randomNum].question
            document.querySelector('#answer').addEventListener('click', getAnswer)
            function getAnswer() {
                document.querySelector('h3').innerText = data[randomNum].answer
            }

        })

    // .catch(err => {
    //     console.log(`error ${err}`)
    // });


}




