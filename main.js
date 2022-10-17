document.querySelector("button").addEventListener("click", QueLok);

const url = "https://www.boredapi.com/api/activity/";

function QueLok() {
  fetch(url)
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      console.log(data);
      document.querySelector("#active").innerText = data.activity
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}
