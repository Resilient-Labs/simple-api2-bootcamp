
document.querySelector('button').addEventListener('click', getArt)

function getArt(){
    let baseUrl = `https://collectionapi.metmuseum.org/public/collection/v1/`
    
    let departmentsApi = 'departments'
    const selectElement = document.querySelector('select')
    let input = selectElement.options[selectElement.selectedIndex].value
    fetch(`${baseUrl}${departmentsApi}`)
    .then(res => res.json())
    .then(data => {
        let deptObject = `search?departmentId=${data.departments[input].departmentId}&q=cat`
        // console.log(data.departments[input].departmentId)
        fetch(`${baseUrl}${deptObject}`)
        .then(res => res.json())
        .then(data => {
            let randomIndex = Math.floor(Math.random() * data.total)
            let objectId = `objects/${data.objectIDs[randomIndex]}` 

            fetch(`${baseUrl}${objectId}`)
            .then(res => res.json())
            .then(data => {
                document.querySelector('.title').innerText = data.title
                document.querySelector('.startEnd').innerText = `Start and End Year: ${data.artistBeginDate} - ${data.artistEndDate}`
                notApplicable('.period', data.period, 'Period')
                notApplicable('.artist', data.artistDisplayName, 'Artist')
                notApplicable('.gallery', data.GalleryNumber, 'Gallery')
                if (data.primaryImageSmall === ''){
                    document.querySelector('img').src =  'img/no-image-available.jpeg'
                }else{
                    document.querySelector('img').src = data.primaryImageSmall
                }
            })
            .catch(err => {
                console.log(`error ${err}`)
            })
        })
        .catch(err => {
            console.log(`error ${err}`)
        })
    })
    .catch(err => {
        console.log(`error ${err}`)
    })
}

function notApplicable(place, data, string){
    if (data === ''){
        document.querySelector(place).innerText = `${string}: n/a`
    } else{
        document.querySelector(place).innerText = `${string}: ${data}`
    }
}