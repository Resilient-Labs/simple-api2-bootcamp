fetch('https://api.api-ninjas.com/v1/randomword?apiKey=mXeqiEZ2ofoExvDnCJBTsg==0CWPHF3Rxw4vZWBe')
    .then(res => res.json())
    .then (data => {
        console.log(data)
        document.querySelector('h2').innerText = data.word
    })