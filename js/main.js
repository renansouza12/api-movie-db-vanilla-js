const cardContainer = document.querySelector('.cards');
const searchInput = document.querySelector('.input_container');
const searchBtn = document.querySelector('.search_icon');
const title = document.querySelector('.mainTitle');
const cardAbout = document.querySelector('.card_about');

import { API_KEY } from "./config.js";

searchInput.addEventListener('submit', searchMovie);
searchBtn.addEventListener('click', searchMovie);
title.addEventListener('click',homeScreen);
window.addEventListener('click', closeCardInfo)

function homeScreen(){
    location.reload();
}

async function searchMovie(e){
    const inputMovie = document.querySelector('.input_movie').value;
    const erroMessage  = document.querySelector('.erro');
    cardContainer.innerHTML = "";
    inputMovie === "" ? erroMessage.style.display = 'block' : erroMessage.style.display = 'none';

    e.preventDefault();

    const url = `https://api.themoviedb.org/3/search/movie?query=${inputMovie}&api_key=${API_KEY}`;
        const response = await fetch(url);
        const data = await response.json();
        const {results} =  data;
        if(results.length > 0){
            results.forEach(result => {renderMovie(result)});
            return data; 
        }   
        erroMessage.style.display = 'block';
}

async function getMovies(){
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

window.onload = async function(){
    const movies = await getMovies();
    const {results} = movies;
    results.forEach(result =>{renderMovie(result)})
}

function renderMovie(movie){
    const {title, poster_path, popularity, overview} = movie;
    let  imageMovie = `https://image.tmdb.org/t/p/w500/${poster_path}`;

    if(!poster_path){
         imageMovie = 'https://img.freepik.com/free-vector/404-error-with-cone-signal_24908-77776.jpg?w=740&t=st=1686852991~exp=1686853591~hmac=7c24e1cd1d058b65a2c64c3641ac572fa2681b877334fe5ee89b2276128dfdbd';
    }
    

    cardContainer.innerHTML += `
    <div class="card">
        <img class="image_card" src="${imageMovie}" alt="image-movie" data-atropos-offset="5">
        <div class="info">
            <h2 data-atropos-offset="5">${title}</h2>
            <span class="popularity" >${formatNumber(popularity)} Views</span>
            <p class="description" data-atropos-offset="5">${overview}</p>
        </div>
    </div>
   
    `
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => card.addEventListener('click',cardInformation));
 }


function closeCardInfo(e){
    
    const target = e.target;

    if(!cardContainer.contains(target) && !cardAbout.contains(target)){
        cardAbout.style.display = "none";
    }
       
}
function cardInformation(){
    cardAbout.style.display = "flex";
    cardAbout.innerHTML = this.innerHTML;
}



function formatNumber(popularity){
    const numberViews = popularity.toString().replace(/\./g, "");
    
    if( numberViews >= 1000000){
        return (numberViews / 1000000).toFixed(2) + 'M';
    }else if(numberViews >= 1000){
        return (numberViews / 1000).toFixed(0) + 'K';
    }
    else{
        return numberViews.toString();
    }
}

