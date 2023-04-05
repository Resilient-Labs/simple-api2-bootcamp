document.querySelector('button').addEventListener('click', getCat)
const url = "https://api.thecatapi.com/v1/images/search?api_key=live_WAw3RxeAIUZW7SmpkOP2v0lzSuUExpoF9yhpE4FO7WwjsZfRCBjBEz2PgYula5hY"


//To obtain information from the Cat API
function getCat(){
  fetch(url
)
  .then((res) => res.json()) // parse response as JSON
  .then((data) => {
    console.log(data); // console log the array/object

    //display the picture to the DOM
    document.querySelector("img").src = data[0].url;
  })

  //in case of errors
  .catch((err) => {
    console.log(`error ${err}`);
  });
}

//audio when button is pressed.
const audio = new Audio ('img/meow.wav')
const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    button.addEventListener("click", () => {
      audio.play();
    });
  });