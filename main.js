
document.querySelector('#start').addEventListener('click', riddleSearch);

function riddleSearch() {
    console.log('riddleSearch runs')
    document.querySelector('.intro').classList.toggle('hidden')

    const url1 =`https://riddles-api.vercel.app/random`
    fetch(url1)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
            console.log(data);
            
            document.querySelector('.riddle').classList.toggle('hidden')
            document.querySelector('#riddle').innerHTML=data.riddle

            document.querySelector('#show').addEventListener('click', revealAnswer);
            function revealAnswer(){
                document.querySelector('.answer').classList.toggle('hidden')
                document.querySelector('#answer').innerHTML=data.answer
            }
        })
        .catch(err => {
            console.log(`error ${err}`);
        });
    
}
