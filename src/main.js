import { filterByDirector, filterByDate, } from './data.js';
import allData from './data/ghibli/ghibli.js';


const container = document.getElementById("container")
container.classList = "filmStyle"
const allFilms = allData.films


const generateHTML = (allFilms) => {     //arrow function
    const div = document.createElement("div")
    div.classList.add('poster'); //contenedor padre
    const titleFilm = document.createElement("h2") // nombre pelicula
    titleFilm.textContent = allFilms.title
    const poster = document.createElement("img") // imagen pelicula
    poster.setAttribute("src", allFilms.poster)
    poster.classList.add('imagen');
    const release_date = document.createElement("h4") //año pelicula
    release_date.textContent = allFilms.release_date
    div.append(poster, titleFilm, release_date)
    return div
}
allFilms.forEach(oneFilm => container.appendChild(generateHTML(oneFilm)))


const filterDirector = document.getElementById("filterDirector")
filterDirector.addEventListener("change", function (director) {
    container.innerHTML = ""
    filterByDirector(director.target.value, allFilms).forEach(oneFilm => container.appendChild(generateHTML(oneFilm)))

})

const filterDate = document.getElementById("filterDate")
filterDate.addEventListener("change", function (releaseDate) {
    container.innerHTML = ""
    filterByDate(releaseDate.target.value, allFilms).forEach(oneFilm => container.appendChild(generateHTML(oneFilm)))
})

 
const orderRanking = document.getElementById("orderRanking")
orderRanking.addEventListener("change",function() {
    container.innerHTML = ""
    //orderByRanking(rt_score.target.value, allFilms).forEach(oneFilm => container.appendChild(generateHTML(oneFilm)))
   // console.log(allFilms.rt_score)
 //  this.carros.sort(((a, b) => a.modelo - b.modelo));
 //console.log(allFilms.sort(((a,b)=> a.rt_score - b.rt_score)))//menor a mayor
 console.log(allFilms.sort(((a,b)=> b.rt_score - a.rt_score)))//mayor a menor
})

// event target value
 //manejo de objetos JS como accesar a sus propiedades