class Player {
    constructor(firstName, lastName) {
        this._firstName = firstName;
        this._lastName = lastName;

    }

    // Getter method
    get firstName() {
        return this._firstName;
    }

    get lastName() {
        return this._lastName;
    }

    // Setter method
    set firstName(value) {
        this._firstName = value;
    }

    set lastName(value) {
        this._lastName = value;
    }

    // Get value from the DOM
    valueFromDom(id) {
        return document.querySelector(id).value
    }

    // Method uses fetch to make a request to the server
    retriveInfo() {

        fetch("http://data.nba.net/10s/prod/v1/2016/players.json")
            .then(res => res.json()) // parse response as JSON
            .then(data => {
                console.log(data)

                // Look through all the data returned and find a property that matches the first and last name the user entered.  
                for(let i = 0; i < data.league.standard.length; i++) {
                    if(data.league.standard[i].firstName == this._firstName && data.league.standard[i].lastName == this._lastName) {
                        var locationNum = i // If names match, keep track of the index. This will tell us the location the player is located within the array
                    }
                }

                // Place data onto the DOM
                document.querySelector("#draft").innerText = `Round: ${data.league.standard[locationNum].draft.roundNum} Pick: ${data.league.standard[locationNum].draft.pickNum} Year: ${data.league.standard[locationNum].draft.seasonYear}`
                document.querySelector("#college").innerText = data.league.standard[locationNum].collegeName
                document.querySelector("#dob").innerText = data.league.standard[locationNum].dateOfBirthUTC
                
                
            })
            .catch(err => {
                console.log(`error ${err}`)
                alert("Sorry player not avaliable in API. Make sure first letter of first and last name are capitalized")
            });
    }
}

document.querySelector("#btn").addEventListener("click", () => {

    // Create a new instance of Player
    let player = new Player;

    // Call valueFromDom method that will return the value of the input
    let playerValue = player.valueFromDom("#input")
    // Split the string into an array. [0] will have the first namd and [1] will have the second name
    let playerStr = playerValue.split(" ")

    // First name
    firstName = playerStr[0]
    // Second name
    lastName = playerStr[1]

    // Call the setter method to set the players first name
    player.firstName = firstName
    //Set the last name
    player.lastName = lastName

    // Call the fetch
    player.retriveInfo()
    
})