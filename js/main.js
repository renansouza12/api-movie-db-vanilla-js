const cardContainer = document.querySelector('.cards');

import { API_KEY } from "./config.js";

async function getMovies(){
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
}
window.onload = async function(){
    const movies = await getMovies();

    const {results} = movies;
    
    results.forEach(result =>{
        const {title, poster_path} = result;
        const imageMovie = `https://image.tmdb.org/t/p/w500/${poster_path}`;

        cardContainer.innerHTML += `
        <div class="card">
            <img class="image_card" src="${imageMovie}" alt="image-movie">
            <div class="info">
                <h2>${title}</h2>
                <span class="popularity">2M</span>
            </div>
      </div>
        `
    })
}
