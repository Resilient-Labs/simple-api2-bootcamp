
//collabarted with Team hayden to succesfully complete team projects 
document.querySelector('button').addEventListener('click', generate)

function generate() {
	let park = document.querySelector('input').value
	const url = (`https://developer.nps.gov/api/v1/parks?q=${park}&api_key=()
	`)

	fetch(url)
		.then(res => res.json())
		.then(parkData => {
			console.log(parkData)
			let entranceFee = parkData.data[0].entranceFees[0]
			console.log(entranceFee)
			document.querySelector('#fee').innerText = 'Entrance Fee:' + ' $' + entranceFee.cost
			document.querySelector('#feeDescription').innerText = entranceFee.description
		})
		.catch(err => {
			alert("Error - couldn't find results, sorry!")
		})
}
//collabarted with Team hayden to succesfully complete team projects 
