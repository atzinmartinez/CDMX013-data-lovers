import { filterByDirector, filterByDate, orderByRanking } from './data.js';
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

    const rt_score = document.createElement("h5") //año pelicula
    rt_score.textContent = allFilms.rt_score
    div.append(poster, titleFilm, release_date, rt_score)
    return div
}

// nodos javascript // pantalla html


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
orderRanking.addEventListener("change", function (rt_score) {
    container.innerHTML = ""
    orderByRanking(rt_score.target.value, allFilms).forEach(oneFilm => container.appendChild(generateHTML(oneFilm)))
})




//[forEach] {se puede acceder con .}
const statistics = document.getElementById("statistics")
statistics.addEventListener("click", function () {
    container.innerHTML = `<div class="fondo"></div>`
    //container.innerHTML = `<p class="texto">"El promedio de edades es" ${redondeado} </p>`
    //console.log("div", "p"); // auiq poner crear nodos

    let sumage = 0;
    let personajes = 0;
    allFilms.forEach((film) => {
        personajes = personajes + film.people.length
        film.people.forEach((people) => {
            let numeroage = parseInt(people.age)
            if (isNaN(numeroage) == false) {
                sumage = numeroage + sumage
                console.log(numeroage)
            }
            // personajes = personajes ++
        })
    })
    console.log("suma", sumage, "numero", personajes);

    const division = sumage / personajes
    let resultado = Math.round(division); //25
    console.log(resultado);

    return resultado

})



//generar nodo div para poner imagen y mandarlo a la pantalla
/*
if (input.value == "mostrar") {
 personajes.style.visibility = "mostrar"
 const image = document.createElement(src)
 const personajes = allFilms.films.people.age
 container.innerHTML = personajes
 console.log(personajes);
}*/



