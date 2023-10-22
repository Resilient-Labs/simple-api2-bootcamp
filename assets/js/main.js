// https://health.gov/our-work/national-health-initiatives/health-literacy/consumer-health-content/free-web-content/apis-developers/how-use-api

document.querySelector("button").addEventListener("click", logHealthInfo);


//ask why wasnt i able to get the fetch version to work
// only worked with the async function

async function logHealthInfo() {

  try {
      const userInput =  document.querySelector('#healthTopic').value
      document.querySelector('.load').id = ""
      document.querySelector('.alert').id = "hidden-alert"
      
      document.querySelector("#linkToArticle").innerText= "";
      document.querySelector("#imgArticle").src = "";
      document.querySelector("h2").innerText = "";
      document.getElementById("demo").innerHTML = "";

      const response = await fetch(
        `https://health.gov/myhealthfinder/api/v3/topicsearch.json?keyword=${userInput}`
      );

      document.querySelector(".load").id = "hidden-load";

      const health = await response.json();
      console.log("Resources: ");
      console.log(health.Result.Resources.Resource[0]);
      document.querySelector("h2").innerText =
        health.Result.Resources.Resource[0].Title;
      document.querySelector("#linkToArticle").href =
        health.Result.Resources.Resource[0].AccessibleVersion;
      document.querySelector("#linkToArticle").innerText= "Learn More";
      document.querySelector("#imgArticle").src =
        health.Result.Resources.Resource[0].ImageUrl;

      document.querySelector("#hidden-card").id = "";
  } catch (err) {

    console.log("err: ");
    console.log(err.name);
    console.log(err.message);
    
   
    document.querySelector('#hidden-alert').id =""
  }

}

