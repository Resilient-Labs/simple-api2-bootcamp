const getWord = document.getElementById('getRandom');
const word = document.getElementById('word');
const definition = document.getElementById('definition')


getWord.addEventListener('click',dictionary)


function dictionary() {
     fetch(`https://www.dictionaryapi.com/api/v3/references/collegiate/json/${word.value}?key=KEY`) 
     .then(res => res.json())
     .then(data => {    
          data[0].shortdef !== undefined ? definition.innerHTML = `<b>${word.value}:</b> ${data[0].shortdef}` :  alert(`Not a Word In the dataionary`)
})
.catch(err => {
     alert(`Not a Word In the dictionary`)
   
 });
}
