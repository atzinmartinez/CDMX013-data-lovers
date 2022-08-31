import { filterByDirector, filterByDate } from './data.js';
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
film.forEach(oneFilm => container.appendChild(generateHTML(oneFilm))) 



const filterDirector = document.getElementById("filterDirector")
filterDirector.addEventListener("click", function(director){
container.innerHTML = ""
filterByDirector (director.target.value).forEach(oneFilm => container.appendChild(generateHTML(oneFilm))) 
console.log (director.target.value)
 })


 // event target value
 //manejo de objetos JS como accesar a sus propiedades


 const filterDate = document.getElementById("filterDate")
 filterDate.addEventListener("click", function(realease){
  
 container.innerHTML = ""
 filterByDate (realease.target.value).forEach(oneFilm => container.appendChild(generateHTML(oneFilm))) 
 console.log (realease.target.value)
  })

 

