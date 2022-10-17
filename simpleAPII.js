
document.querySelector("button").addEventListener("click", getJokes);

function getJokes() {

fetch(`https://official-joke-api.appspot.com/random_joke`)
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      console.log(data);
      // document.querySelector("img").src = data.photos[0].img_src;

      document.querySelector("h2").innerText = data.setup;
      document.querySelector('h3').innerText = data.punchline;
    //   document.querySelector('h2').innerText = data.title;
    //   document.querySelector('h3').innerText = data.explanation;

      //   complex fetch is fetch inside of a fetch so one runs before the other
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}
