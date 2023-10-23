document.querySelector('#hat').addEventListener('click', yerAWizard)

function yerAWizard() {
    document.querySelector('#askName').classList.add('hidden')

    let name = document.querySelector('input').value
    document.querySelector('#yerAWizard').innerText = `Yer a wizard, ${name}`

    document.querySelector('#spellPt1').classList.remove('hidden')
}

document.querySelector('#wand').addEventListener('click', getSpell)

function getSpell() {
    document.querySelector('#spellPt2').classList.remove('hidden')
    fetch (`https://hp-api.onrender.com/api/spells`)
    .then(res => res.json())
    .then(data => {
        let spellIndex = Math.floor(Math.random() * 77)
        document.querySelector('#spellName').innerText = `${data[spellIndex].name}!`
        document.querySelector('#spellInfo').innerText = data[spellIndex].description
    })
    
    .catch(err => {
        console.log(`error ${err}`)
    })
}