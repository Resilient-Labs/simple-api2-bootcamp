document.querySelector('button').addEventListener('click', getRiddle)



function getRiddle() {
  let url = 'https://riddles-api.vercel.app/random'

  fetch(url)
    .then(res => res.json())
    .then(data => {
      console.log(data);

      // Set the riddle text
      document.querySelector('h3').innerText = data.riddle;

      // Set the answer text
      document.querySelector('.answer').addEventListener('click', getAnswer)

      function getAnswer() {
        document.querySelector('h4').innerText = data.answer;
      }
    })




    .catch(err => {
      console.log(`error ${err}`);
    });
}

