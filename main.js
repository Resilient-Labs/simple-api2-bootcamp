// document.querySelector('.riddle').addEventListener('click',getEmoji)



// function getEmoji() {

//     let url =  'https://riddles-api.vercel.app/random'

//     //'https://emojihub.yurace.pro/api/all'
    
//     fetch(url) 
    
//     .then(res => res.json()) // parse response as JSON 
//     .then(data => { 
//       console.log(data) 


       
//        document.querySelector('h3').innerText = data.riddle
//        document.querySelector('.answer').addEventListener('click' getAnswer).innertext=data.answer

//        //document.querySelector('h4').innerText = data.answer
          
         



//     }) 
//     .catch(err => { 
//        console.log(`error ${err}`) 
//     });




// Add an event listener to the button
document.querySelector('.riddle').addEventListener('click', getRiddle);

function getRiddle() {
  let url = 'https://riddles-api.vercel.app/random';

  fetch(url)
    .then(res => res.json())
    .then(data => {
      console.log(data);

      // Set the riddle text
      document.querySelector('h3').innerText = data.riddle;

      // Set the answer text
      const answerElement = document.querySelector('.answer-text');
      answerElement.innerText = data.answer;
      answerElement.classList.add('hidden');
      answerElement.addEventListener('click', toggleAnswer);
    })
    .catch(err => {
      console.log(`error ${err}`);
    });
}

function toggleAnswer() {
  const answerElement = document.querySelector('.answer-text');
  answerElement.classList.toggle('hidden');

  // Get the button element
  const buttonElement = document.querySelector('.answer-btn');

  // Update the text of the button
  if (answerElement.classList.contains('hidden')) {
    buttonElement.innerText = 'Show Answer';
  } else {
    buttonElement.innerText = 'Hide Answer';
  }
}

