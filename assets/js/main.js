// https://health.gov/our-work/national-health-initiatives/health-literacy/consumer-health-content/free-web-content/apis-developers/how-use-api

document.querySelector("button").addEventListener("click", logHealthInfo);


//ask why wasnt i able to get the fetch version to work
// only worked with the async function

async function logHealthInfo() {

  try {
    //displaying load bar until card tiles displays
    document.querySelector(".load").id = "";

    //checker for previous iteration of user input
    //to make sure alert is not displayed from last user input
    document.querySelector(".alert").id = "hidden-alert";

    //hides template container that will be used for data
    //this is a checker to make sure card container is not displayed from last user input
    document.querySelector(".card-container").id = "hidden-card";

    //clears all previous cards from previous input
    document.querySelector(".card-container").innerHTML = "";


    //this is used to get health resource information from the api
    const userInput = document.querySelector("#healthTopic").value;
    const response = await fetch(
      `https://health.gov/myhealthfinder/api/v3/topicsearch.json?keyword=${userInput}`
    );
    const health = await response.json();

    // this is an array , used forEach() method to add card creation for all element in resoucre
    //in other words used article to assign article content to each card
    health.Result.Resources.Resource.forEach((article) => {
      // to add one card
      //img
      let cardImg = document.createElement("img");
      cardImg.className = "card-img-top rounded d-block";
      cardImg.id = "imgArticle";
      cardImg.src = article.ImageUrl;

      //h4
      let header = document.createElement("h4");
      header.className = "card-title";
      header.id = "title";
      header.innerText = article.Title;

      //a
      let cardText = document.createElement("a");
      cardText.className = "btn btn-primary";
      cardText.id = "linkToArticle";
      cardText.innerText = "Learn More";
      cardText.href = article.AccessibleVersion;

      //card-body
      let cardBody = document.createElement("div");
      cardBody.className = "card-body";
      cardBody.appendChild(header);
      cardBody.appendChild(cardText);

      //card
      let card = document.createElement("div");
      card.className = "card";

      //aedd img and body to card
      card.appendChild(cardImg);
      card.appendChild(cardBody);

      // add to whole container w/ all cards
      document.querySelector(".card-container").appendChild(card);
    });

    //this hides the load icon
    document.querySelector(".load").id = "hidden-load";

    //used to display card container after adding cards
    document.querySelector(".card-container").id = "";
  } catch (err) {

    console.log("err: ");
    console.log(err.name);
    console.log(err.message);
    
    //this hides the load icon
    document.querySelector(".load").id = "hidden-load";
    //this displays alert
    document.querySelector('#hidden-alert').id =""
  }

}

