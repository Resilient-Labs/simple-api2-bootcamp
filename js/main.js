document.querySelector('button').addEventListener('click', getActivity)

function getActivity() {

    fetch(`https://www.boredapi.com/api/activity?type=busywork`)
        .then(res => res.json())
        .then(data => {
            document.querySelector('h2').innerText = data.activity
            document.querySelector('h3').innerText = `Participants: ${data.participants}`
        })
        .catch(err => {
            console.log('error')
        })
}