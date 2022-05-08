document.querySelector('button').addEventListener('click', getChampionInfo)
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'league-of-legends-champions.p.rapidapi.com',
		'X-RapidAPI-Key': 'b789b2c408msh5fd26b2f70ddca0p16bf13jsnb25cac59113f'
	}
};
function getChampionInfo(){
let championName = document.querySelector('input').value
fetch(`https://league-of-legends-champions.p.rapidapi.com/champions/en-us/${championName}`, options)
	.then(response => response.json())
	.then(response => {
        console.log(response)
		document.querySelector('h2').innerText = response.champion[0].champion_name
		document.querySelector('h3').innerText = response.champion[0].champion_title
		document.querySelector('h4').innerText = response.champion[0].lore
		document.querySelector('img').src = response.champion[0].champion_splash
    })
	.catch(err => console.error(err));


}