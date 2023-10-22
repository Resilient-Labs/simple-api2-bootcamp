//create varibles to store the individual search buttons for each game 
const botw = document.querySelector('#buttonBOTW')
const totk = document.querySelector('#buttonTOTK')
const master = document.querySelector('#buttonMaster')

//add an event listener to each button so when clicked they run their specified functions 
botw.addEventListener('click', searchBOTW)
totk.addEventListener('click', searchTOTK)
master.addEventListener('click', searchMaster)

//create event listeners on the input boxes so if the user want to press enter to submit their item search instead of clicking on the button it will also run the fucntion
document.querySelector("#searchBOTW").addEventListener('keypress', (e) => {
    if (e.key === "Enter") {
        searchBOTW()
    }

})

document.querySelector("#searchTOTK").addEventListener('keypress', (e) => {
    if (e.key === "Enter") {
        searchTOTK()
    }

})

document.querySelector("#searchMaster").addEventListener('keypress', (e) => {
    if (e.key === "Enter") {
        searchMaster()
    }

})

//create the first function to search the BOTW database of the LOZ api
function searchBOTW() {

    //store the user's input into a variable 
    let hyruleBOTW = document.querySelector('#searchBOTW').value

    //store the LOZ api url in a variable, the api url should have a query parameter of that searches for the users' input value and should only search through BOTW
    const url = `https://botw-compendium.herokuapp.com/api/v3/compendium/entry/${hyruleBOTW}?game=botw`
   
    //create variables for all the elements in which I want to have data from the api show in the DOM.
    const botwDrops = document.querySelector('#BOTW-drops')
    const botwAtt = document.querySelector('#BOTW-att')
    const botwDef = document.querySelector('#BOTW-def')
    const botwEff = document.querySelector('#BOTW-eff')
    const botwWType = document.querySelector('#BOTW-wtype')
    const botwCookEff = document.querySelector('#BOTW-cookeff')
    const botwHeartRec = document.querySelector('#BOTW-heartrec')
    const botwCL = document.querySelector('#BOTW-cl')
    const botwCLTitle = document.querySelector('#BOTW-cltitle')
    const botwDTitle = document.querySelector('#BOTW-dtitle')
    const botwSearch = document.querySelector('#searchBOTW')


    //call the fetch with the BOTW api url. 
    fetch(url)
        .then(res => res.json())
        .then(dataA => {
            console.log(dataA)

            //add the name, image, description of the items searched to the DOM
            document.querySelector('#BOTW-item').innerText = dataA.data.name
            document.querySelector('#BOTW-pic').src = dataA.data.image
            document.querySelector('#BOTW-desc').innerText = dataA.data.description


            //store the item's category in a variable
            let category = dataA.data.category

            //add the category of the items searched to the DOM
            document.querySelector('#BOTW-type').innerText = `Category: ${category}`


            //date received from the api changes based on the category that an item is under. Create a condition to check for the categoery and return to the DOM the data related to that category.
            if ((category === 'monsters') || (category === 'treasure')) {
                dataA.data.drops.forEach(el => {
                    botwDTitle.innerText = `Item Drops`
                    let li = document.createElement('li')
                    let text = document.createTextNode(el)
                    li.appendChild(text)
                    botwDrops.appendChild(li)
                });
                if (dataA.data.common_locations !== null) {
                    botwCLTitle.innerText = `Common Locations`
                    dataA.data.common_locations.forEach(el => {
                        let li = document.createElement('li')
                        let text = document.createTextNode(el)
                        li.appendChild(text)
                        botwCL.appendChild(li)
                    });
                }
            } else if (category === 'equipment') {
                if (dataA.data.properties.attack !== '') {
                    botwAtt.innerText = `ATK: ${dataA.data.properties.attack}`
                } else {
                    botwAtt.innerText = ''
                }
                if (dataA.data.properties.defense !== '') {
                    botwDef.innerText = `DEF: ${dataA.data.properties.defense}`
                } else {
                    botwDef.innerText = ''
                }
                if (dataA.data.properties.effect) {
                    botwEff.innerText = `EFF: ${dataA.data.properties.effect}`
                } else {
                    botwEff.innerText = ''
                }
                if (dataA.data.properties.type) {
                    botwWType.innerText = `Type: ${dataA.data.properties.type}`
                } else {
                    botwWType.innerText = ''
                }
                if (dataA.data.common_locations !== null) {
                    dataA.data.common_locations.forEach(el => {
                        botwCLTitle.innerText = `Common Locations`

                        let li = document.createElement('li')
                        let text = document.createTextNode(el)
                        li.appendChild(text)
                        botwCL.appendChild(li)

                    });
                }
            } else if (category === 'creatures') {
                dataA.data.drops.forEach(el => {
                    botwDTitle.innerText = `Item Drops`
                    let li = document.createElement('li')
                    let text = document.createTextNode(el)
                    li.appendChild(text)
                    botwDrops.appendChild(li)
                });
                if (dataA.data.common_locations !== null) {
                    dataA.data.common_locations.forEach(el => {
                        botwCLTitle.innerText = `Common Locations`

                        let li = document.createElement('li')
                        let text = document.createTextNode(el)
                        li.appendChild(text)
                        botwCL.appendChild(li)
                    });
                }
            } else if (category === 'materials') {
                botwCookEff.innerText = `Cooking EFF: ${dataA.data.cooking_effect}`
                botwHeartRec.innerText = `Hearts Recovered: ${dataA.data.hearts_recovered}`
                if (dataA.data.common_locations !== null) {
                    dataA.data.common_locations.forEach(el => {
                        botwCLTitle.innerText = `Common Locations`

                        let li = document.createElement('li')
                        let text = document.createTextNode(el)
                        li.appendChild(text)
                        botwCL.appendChild(li)
                    });
                }
            }


        })

        //catch errors
        .catch(err => {
            console.log(`error${err}`)
        })


    //clear the elements that hold the item information whenever a the user enters a new item input
    botwAtt.innerText = ''
    botwCL.innerHTML = ''
    botwCookEff.innerText = ''
    botwDef.innerText = ''
    botwEff.innerText = ''
    botwDrops.innerHTML = ''
    botwWType.innerText = ''
    botwHeartRec.innerText = ''
    botwCLTitle.innerText = ''
    botwDTitle.innerText = ''
    botwSearch.value = ''


}

//create the second function to search the TOTK database of the LOZ api

function searchTOTK() {

    //store the user's input into a variable 
    let hyruleTOTK = document.querySelector('#searchTOTK').value

    //store the LOZ api url in a variable, the api url should have a query parameter of that searches for the users' input value and should only search through TOTK
    const url = `https://botw-compendium.herokuapp.com/api/v3/compendium/entry/${hyruleTOTK}?game=totk`
   
    //create variables for all the elements in which I want to have data from the api show in the DOM.
    const totkDrops = document.querySelector('#TOTK-drops')
    const totkAtt = document.querySelector('#TOTK-att')
    const totkDef = document.querySelector('#TOTK-def')
    const totkEff = document.querySelector('#TOTK-eff')
    const totkWType = document.querySelector('#TOTK-wtype')
    const totkCookEff = document.querySelector('#TOTK-cookeff')
    const totkHeartRec = document.querySelector('#TOTK-heartrec')
    const totkCL = document.querySelector('#TOTK-cl')
    const totkCLTitle = document.querySelector('#TOTK-cltitle')
    const totkDTitle = document.querySelector('#TOTK-dtitle')
    const totkSearch = document.querySelector('#searchTOTK')


    //call the fetch with the TOTK api url. 
    fetch(url)
        .then(res => res.json())
        .then(dataB => {
            console.log(dataB)

            //add the name, image, description of the items searched to the DOM
            document.querySelector('#TOTK-item').innerText = dataB.data.name
            document.querySelector('#TOTK-pic').src = dataB.data.image
            document.querySelector('#TOTK-desc').innerText = dataB.data.description

            
            //store the item's category in a variable
            let category = dataB.data.category

            //add the category of the items searched to the DOM
            document.querySelector('#TOTK-type').innerText = `Category: ${category}`

            //date received from the api changes based on the category that an item is under. Create a condition to check for the categoery and return to the DOM the data related to that category.
            if ((category === 'monsters') || (category === 'treasure')) {
                dataB.data.drops.forEach(el => {
                    totkDTitle.innerText = `Item Drops`
                    let li = document.createElement('li')
                    let text = document.createTextNode(el)
                    li.appendChild(text)
                    totkDrops.appendChild(li)
                });
                if (dataB.data.common_locations !== null) {
                    dataB.data.common_locations.forEach(el => {
                        totkCLTitle.innerText = `Common Locations`
                        let li = document.createElement('li')
                        let text = document.createTextNode(el)
                        li.appendChild(text)
                        totkCL.appendChild(li)
                    });
                }
            } else if (category === 'equipment') {
                if (dataB.data.properties.attack !== '') {
                    totkAtt.innerText = `ATK: ${dataB.data.properties.attack}`
                } else {
                    totkAtt.innerText = ''
                }
                if (dataB.data.properties.defense !== '') {
                    totkDef.innerText = `DEF: ${dataB.data.properties.defense}`
                } else {
                    totkDef.innerText = ''
                }
                if (dataB.data.properties.effect) {
                    totkEff.innerText = `EFF: ${dataB.data.properties.effect}`
                } else {
                    totkEff.innerText = ''
                }
                if (dataB.data.properties.type) {
                    totkWType.innerText = `Type: ${dataB.data.properties.type}`
                } else {
                    totkWType.innerText = ''
                }
                if (dataB.data.common_locations !== null) {
                    dataB.data.common_locations.forEach(el => {
                        totkCLTitle.innerText = `Common Locations`

                        let li = document.createElement('li')
                        let text = document.createTextNode(el)
                        li.appendChild(text)
                        totkCL.appendChild(li)

                    });
                }
            } else if (category === 'creatures') {
                dataB.data.drops.forEach(el => {
                    totkDTitle.innerText = `Item Drops`
                    let li = document.createElement('li')
                    let text = document.createTextNode(el)
                    li.appendChild(text)
                    totkDrops.appendChild(li)
                });
                if (dataB.data.common_locations !== null) {
                    dataB.data.common_locations.forEach(el => {
                        totkCLTitle.innerText = `Common Locations`

                        let li = document.createElement('li')
                        let text = document.createTextNode(el)
                        li.appendChild(text)
                        totkCL.appendChild(li)
                    });
                }
            } else if (category === 'materials') {
                totkCookEff.innerText = `Cooking EFF: ${dataB.data.cooking_effect}`
                totkHeartRec.innerText = `Hearts Recovered: ${dataB.data.hearts_recovered}`
                if (dataB.data.common_locations !== null) {
                    dataB.data.common_locations.forEach(el => {
                        totkCLTitle.innerText = `Common Locations`

                        let li = document.createElement('li')
                        let text = document.createTextNode(el)
                        li.appendChild(text)
                        totkCL.appendChild(li)
                    });
                }
            }

        })
        //catch errors
        .catch(err => {
            console.log(`error${err}`)
        })


    //clear the elements that hold the item information whenever a the user enters a new item input
    totkAtt.innerText = ''
    totkCL.innerHTML = ''
    totkCookEff.innerText = ''
    totkDef.innerText = ''
    totkEff.innerText = ''
    totkDrops.innerHTML = ''
    totkWType.innerText = ''
    totkHeartRec.innerText = ''
    totkDTitle.innerText = ''
    totkCLTitle.innerText = ''
    totkSearch.value = ''


}

//create the third function to search the Master Mode database of the LOZ api

function searchMaster() {

    //store the user's input into a variable 
    let hyruleMaster = document.querySelector('#searchMaster').value

    //store the LOZ api url in a variable, the api url should have a query parameter of that searches for the users' input value and should only search through Master Mode
    const url = `https://botw-compendium.herokuapp.com/api/v3/compendium/master_mode/entry/${hyruleMaster}`

    //create variables for all the elements in which I want to have data from the api show in the DOM.
    const mmDrops = document.querySelector('#MM-drops')
    const mmCL = document.querySelector('#MM-cl')
    const mmCLTitle = document.querySelector('#MM-cltitle')
    const mmDTitle = document.querySelector('#MM-dtitle')
    const mmSearch = document.querySelector('#searchMaster')

    //call the fetch with the Master Mode api url. 
    fetch(url)
        .then(res => res.json())
        .then(dataC => {
            console.log(dataC)

            //add the name, image, description of the items searched to the DOM
            document.querySelector('#MM-item').innerText = dataC.data.name
            document.querySelector('#MM-pic').src = dataC.data.image
            document.querySelector('#MM-desc').innerText = dataC.data.description

            //store the item's category in a variable
            let category = dataC.data.category

            //add the category of the items searched to the DOM
            document.querySelector('#MM-type').innerText = `Category: ${category}`

            //date received from the api changes based on the category that an item is under. Create a condition to check for the categoery and return to the DOM the data related to that category.
            if ((category === 'monsters') || (category === 'treasure')) {
                dataC.data.drops.forEach(el => {
                    mmDTitle.innerText = `Item Drops`
                    let li = document.createElement('li')
                    let text = document.createTextNode(el)
                    li.appendChild(text)
                    mmDrops.appendChild(li)
                });
                if (dataC.data.common_locations !== null) {
                    dataC.data.common_locations.forEach(el => {
                        mmCLTitle.innerText = `Common Locations`
                        let li = document.createElement('li')
                        let text = document.createTextNode(el)
                        li.appendChild(text)
                        mmCL.appendChild(li)
                    });
                }
            }

        })
        //catch errors
        .catch(err => {
            console.log(`error${err}`)
        })


    //clear the elements that hold the item information whenever a the user enters a new item input
    mmCL.innerHTML = ''
    mmDrops.innerHTML = ''
    mmDTitle.innerText = ''
    mmCLTitle.innerText = ''
    mmSearch.value = ''


}
