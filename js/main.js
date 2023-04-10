// // GLOBALS
// const url = `http://ddragon.leagueoflegends.com/cdn/6.24.1/data/en_US/champion.json`
// let userInput = document.querySelector('input').value
// let bttn = document.querySelector('button')
// let results = document.querySelector('ul')

// // CLICK
// bttn.addEventListener('click', () => {

//     // FETCH REQUEST
//     fetch(url)
//     .then (res => res.json())
//     .then(data => {
//         console.log(data)
//         for (let i = 0; i < data.length; i++)
//         {
//             if (userInput.charAt(0) == data.data[i].charAt(0))
//             {
//                 let li = document.createElement('li')
//                 li.innerText = data.data[i]
//                 results.appendChild(li)
//                 document.querySelector('span').innerText = userInput
//             }
//         }
//     })
// })

// // GLOBALS
// const url = `http://ddragon.leagueoflegends.com/cdn/6.24.1/data/en_US/champion.json`
// let bttn = document.querySelector('button')
// let results = document.querySelector('ul')

// // CLICK
// bttn.addEventListener('click', () => {
//   let userInput = document.querySelector('input').value

//   // FETCH REQUEST
//   fetch(url)
//     .then(res => res.json())
//     .then(data => {
//       console.log(data)
//       const champions = Object.keys(data.data)
//       for (let i = 0; i < champions.length; i++) {
//         if (userInput.charAt(0) == champions[i].charAt(0)) {
//           let li = document.createElement('li')
//           li.innerText = champions[i]
//           results.appendChild(li)
//           document.querySelector('span').innerText = userInput
//         }
//       }
//     })
// })

// GLOBALS
const url = `http://ddragon.leagueoflegends.com/cdn/6.24.1/data/en_US/champion.json`
let userInput = document.querySelector('input').value
let bttn = document.querySelector('button')
let results = document.querySelector('ul')

for (let i = 0; i < 5; i++)
{
    // CLICK
    bttn.addEventListener('click', () => {
        
        let userInput = document.querySelector('input').value
        if (userInput == '')
        {
          document.querySelector('span').innerText = 'Please enter a name, summoner'
          return
        }

        // FETCH REQUEST
        fetch(url)
          .then(res => res.json())
          .then(data => {
            const champions = Object.keys(data.data)
            let randomIndex = Math.floor(Math.random() * champions.length) // generate a random index
            
            let championName = champions[randomIndex] // get the name of the champion at the random index
            let li = document.createElement('li')
            li.innerText = championName
            results.appendChild(li)
          })
          results.innerText = ''
      })
}