import { filterByDirector, filterDate } from './data.js';
import allData from './data/ghibli/ghibli.js';

//import {firstDirector} from './data.js'
let hmtl =""
const container = document.getElementById("container")
container.classList = "filmStyle"
const film = allData.films
const generateHTML = (film) => {     //arrow function
    const div = document.createElement("div")
    div.classList.add('poster'); //contenedor padre
    const titleFilm = document.createElement("h2") // nombre pelicula
    titleFilm.textContent = film.title
    const poster = document.createElement("img") // imagen pelicula
    poster.setAttribute("src", film.poster)
    poster.classList.add('imagen');

    const ranking = document.createElement ("h1")
    ranking.textContent = film.rt_score


    const release_date = document.createElement("h4") //año pelicula
    release_date.textContent = film.release_date
    div.append(poster, titleFilm, release_date)
    return div
}
film.forEach(oneFilm => container.appendChild(generateHTML(oneFilm))) //con la misma logica
//empaquetar una funcion


const filterDirector = document.getElementById("filterDirector")
filterDirector.addEventListener("click", function(director){
container.innerHTML = ""
filterByDirector (director.target.value).forEach(oneFilm => container.appendChild(generateHTML(oneFilm))) 
 })

 /*const ranking = document.createElement ("h1")
 ranking.textContent = film.rt_score */

 const filterDate = document.getElementById("filterDate")
 filterDate.addEventListener("click", function(ranking){
  //console.log ("Hola");
 container.innerHTML = ""
 filterByRanking (ranking.target.value).forEach(oneFilm => container.appendChild(generateHTML(oneFilm))) 
 
  })

 // DOM
 //rt_score