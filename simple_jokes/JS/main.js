document.querySelector("button").addEventListener("click", getJoke) //global variables to reach inner fetches
const h2 = document.querySelector("h2")
const h3 = document.querySelector("h3")

const baseURL = "https://v2.jokeapi.dev";
const categories = ["Programming", "Misc", "Pun", "Spooky", "Christmas"]; //specifies structure taken from api to ensure proper url
const params = [
    "blacklistFlags=nsfw,religious,racist,sexist",
    "idRange=0-100"
];
function getJoke() {
    const url = baseURL + "/joke/" + categories.join(",") + "?" + params.join("&");
    fetch(url)
        .then(res => res.json())
        .then(data => {
            document.querySelector("h2").innerText = ""
            document.querySelector("h3").innerText = ""
            document.querySelector("span").innerText = ""

            if (data.type == "single") { //conditional to check if the returned data is single line or "setup - punchline"
                document.querySelector("h2").innerText = data.joke;
                h2.classList.add("visible")
            } else {
                document.querySelector("h2").innerText = data.setup;
                setTimeout(() => { document.querySelector("span").innerText = "Wait for it..."; }, 2500);
                setTimeout(() => { document.querySelector("h3").innerText = data.delivery; }, 4500);
            }
        })
        .catch(err => {
            console.log(`error ${err}`)
        });
}
