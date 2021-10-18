document.querySelector('button').addEventListener('click', translate)

function translate(){
    const language = document.querySelector('select').value
    const text = document.querySelector('textarea').value
    const url = `https://api.funtranslations.com/translate/${language}?text=${text}`
    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            document.querySelector('#newText').innerHTML = data.contents.translated
        })
        .catch(err => {
            console.error(err);
        });
}