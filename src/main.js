
import allData from './data/ghibli/ghibli.js';
const history = document.getElementById("history")
history.classList = "filmStyle"
const film = allData.films
const generateHTML = (film) => {     //arrow function
    const div = document.createElement("div") //?
    const titleFilm = document.createElement("h2") // nombre pelicula
    titleFilm.textContent = film.title
    const poster = document.createElement("img") // imagen pelicula
    poster.setAttribute("src", film.poster)
    const release_date = document.createElement("h4") //año pelicula
    release_date.textContent = film.release_date
    div.append(poster, titleFilm, release_date)
    return div
}
film.forEach(oneFilm => history.appendChild(generateHTML(oneFilm)))

console.log(film[0].title);
