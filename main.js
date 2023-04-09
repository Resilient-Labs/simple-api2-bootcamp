const activity = document.querySelector('#activity')
const participants = document.querySelector('#participants')
const price = document.querySelector('#price')
const activityType = document.querySelector('#type')

function getActivity(){

  const url = (`http://www.boredapi.com/api/activity/`)
  fetch(url)
  .then(res => res.json()) // parse response as JSON
  .then(data => {
      console.log(data)
     activity.innerText = `Activity : ${data.activity}`
     participants.innerText = `Participants : ${data.participants}`
     price.innerText = `Price : ${data.price}`
     activityType.innerText = `Type : ${data.type}` 
    })

  .catch(err => {
      console.log(`error ${err}`)
  });
}

document.querySelector('button').addEventListener('click', getActivity)


