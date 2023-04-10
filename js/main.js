const button = document
  .querySelector("button")
  .addEventListener("click", getPopulation);
let stateName = document.querySelector(".stateName");
let population = document.querySelector(".population");

function getPopulation() {
  let state = document.querySelector("#state").value;

  if (state === "") {
    alert("Empty String. Try Again.");
  } else {
    let capitalizedState = state.charAt(0).toUpperCase() + state.slice(1);
    let checker = false;

    const apiKey = "45b9a9f084a03929ce2dd1199904a4cc8e03b3e3";
    let url = `https://api.census.gov/data/2019/pep/charagegroups?get=NAME,POP&for=state:*&key=${apiKey}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        data.forEach((arr) => {
          if (arr[0] == `${capitalizedState}`) {
            stateName.innerText = arr[0];
            population.innerText = arr[1];
            checker = true;
            return;
          }
        });
        if (!checker) {
          alert("Invalid State, Try Again.");
        }
      })
      .catch((err) => {
        console.log(`error ${err}`);
      });
  }
}
