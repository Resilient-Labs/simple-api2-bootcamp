let btn = document.querySelector("button");
let character = document.querySelector("p");
let quotes = document.querySelector("h1");
let url = `https://animechan.vercel.app/api/random`;

btn.addEventListener("click", getQuote);

function getQuote() {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      quotes.innerText = `"${data.quote}"`;
      character.innerText = `- ${data.character}`;
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}
