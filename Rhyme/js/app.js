const butt = document.querySelector('#thebutt')

function Rhyme() {
  let word = document.querySelector('#word').value
  const rhymeUrl = (`https://rhymebrain.com/talk?function=getRhymes&word=${word}`)

  fetch(rhymeUrl)
  .then(res => res.json())
  .then(data => {
    let rhymeArray = []
    let rhymeList = ''

    for(let i = 0; i < 10; i++) {
      rhymeArray.push(data[i].word)
    }
    // console.log(rhymeArray)

    for(let i = 0; i < rhymeArray.length; i++) {
      rhymeList += rhymeArray[i] + '\n'
    }
    // console.log(rhymeList)
    document.querySelector('#rhymes').innerText = rhymeList
  })
  .catch(err => {
    console.log(`error ${err}`)
  })
};

butt.addEventListener('click', Rhyme)