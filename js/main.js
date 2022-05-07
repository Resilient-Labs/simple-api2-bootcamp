fetch("https://randomfox.ca/floof/")                             //request to take object from url 
.then(res => res.json())      //turn object into json for legibility
.then(data => {                         //take data 
console.log(data)     //log value of object's message key 
document.querySelector('img').classList.add("disp")
document.querySelector("img").src = data.image
})
.catch(err => {                         //catch the error (err is a variable)
console.log(`error ${err}`)       //and log the error 
});
