
document.querySelector('button').addEventListener('click', INVOKE)

function INVOKE() {
let anime = document.querySelector('input').value

fetch(`https://api.jikan.moe/v4/anime?q=${anime}&sfw`) 
.then(res => res.json())
.then(data => {

    /*this class is creating a search result object.  This search engine API is very imprecise (the first result of "Naruto", THEIR OWN EXAMPLE, is not the series) 
    so hopefully the user can find what they're looking for in the top 8 results.*/

    class Entry {
        constructor(number) {
            this.number = number 
        }
            sectionBehavior() {
                document.querySelector(`#name${this.number}`).innerText = data.data[this.number-1].title
                document.querySelector(`#poster${this.number}`).src = data.data[this.number-1].images.jpg.image_url
                document.querySelector(`#poster${this.number}`).addEventListener('click', () => Narrow(this.number-1)) //https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
            }
        }
        function Narrow(x) {
            document.querySelector('#chosenTitle').innerText = data.data[x].title
            document.querySelector('#chosenPoster').src = data.data[x].images.jpg.large_image_url
        
            //some pages don't have synopses yet so made a quick placeholder
        
            if (data.data[x].synopsis == null) {
                document.querySelector('h3').innerText = "Synopsis to be written."
            }
        
            else {
            document.querySelector('h3').innerText = data.data[x].synopsis
            }
           }

    let first = new Entry(1)
    first.sectionBehavior()
    
    let second = new Entry(2)
    second.sectionBehavior()

    let third = new Entry(3)
    third.sectionBehavior()

    let fourth = new Entry(4)
    fourth.sectionBehavior()

    let fifth = new Entry(5)
    fifth.sectionBehavior()

    let sixth = new Entry(6)
    sixth.sectionBehavior()

    let seventh = new Entry(7)
    seventh.sectionBehavior()

    let eighth = new Entry(8)
    eighth.sectionBehavior()

    } 

)

.catch(err => {
    console.log(`error${err}`)
})
}