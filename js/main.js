const API_KEY = 'api_key=7132674401e689d6e8b1e63648063cd8'
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&' + API_KEY;
const IMG_URL = 'https://image.tmdb.org/t/p/w500';
const searchURL = BASE_URL + '/search/movie?' + API_KEY;

const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');


getMovies(API_URL);

function getMovies(url) {
    fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data.results);
        showMovies(data.results);
    })
}

function showMovies(data) {
    main.innerHTML = '';

    data.forEach(movie => {
        const {title, poster_path, vote_average, overview} = movie;
        const movieData = document.createElement('div');
        movieData.classList.add('movie');
        movieData.innerHTML = `
        
            <img src="${IMG_URL+poster_path}" alt="${title}">
            
            <div class="movie-info">
                <h3>${title}</h3>
                <span class="${getColor(vote_average)}">${vote_average}</span>
            </div>

            <div class="overview">
                <h3>Overview</h3>
                ${overview}
            </div>
        `

        main.appendChild(movieData);
    })

}

function getColor(vote){
    if (vote>=8){
        return 'green'
    } else if (vote >= 5){
        return 'orange'
    }else{
        return 'red'
    }
}

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const searchQuery = search.value;

    if(searchQuery) {
        getMovies(searchURL+'&query='+searchQuery)
    }else{
        getMovies(API_URL);
    }
})