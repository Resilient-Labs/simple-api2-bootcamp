document.querySelector('button').addEventListener('click', getActivity)

function getActivity() {
  let url = `https://www.boredapi.com/api/activity`

  fetch(url)
    .then(res => res.json())
    .then(data => {
      document.querySelector('#activityName').innerText = " " + data.activity
      document.querySelector('#type').innerText = " " + data.type
      document.querySelector('#participants').innerText = " " + data.participants

      console.log(data.activity);
    })
}