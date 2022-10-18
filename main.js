fetch('https://binaryjazz.us/wp-json/genrenator/v1/genre/')
    .then(res => res.json())
    .then (data => {
        document.querySelector('h2').innerText = data
    })