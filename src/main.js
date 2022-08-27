

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
    const release_date = document.createElement("h4") //año pelicula
    release_date.textContent = film.release_date
    div.append(poster, titleFilm, release_date)
    return div
}
film.forEach(oneFilm => container.appendChild(generateHTML(oneFilm))) //con la misma logica
//empaquetar una funcion


//film.forEach(filterDirector => history.appendChild(generateHTML(filterDirector)))


const filterDirector = document.getElementById("filterDirector")
filterDirector.addEventListener("click", function(e){
const firstDirector= film.filter(item=>item.director === e.target.value);
console.log(firstDirector);


container.innerHTML= generateHTML

console.log(container.innerHTML);

firstDirector.filter(onefilter => container.appendChild(generateHTML (onefilter)))


//return firstDirector.forEach(onefilter => container.appendChild(generateHTML (onefilter)))



// container.generateHTML = ""

 //como pintar en la interfaz

 




  console.log(firstDirector)
  console.log(e.target.value)
  
// crear un contenedor para arrojar el filtrado containerCards.innerHTML =""
  //const filterRanking = (director, data ) => data.filter (films => films.director == director);
   

//console.log(firstDirector)

  })



  // ranking


  //export const filterDirector = (director, data ) => data.filter (films => films.director == director);
  // let= "Hayao Miyazaki"
//let hayaoMiyazaki = arreglo.filter(element => element > 10);
   /*
   let director = [films[director]];
   arrayofObjetcts.forEach(object=>{
    console.log(object)
   })
   
     var currentNumber = numbers[i];
   
     if (currentNumber > 10) {
   
       greaterTen.push(currentNumber)
   
     }
   
   }
   
   
   console.log(greaterTen); 



const btnDirector = document.getElementById ("director")

btnDirector.addEventListener("click", function showDirector) // Escucha click (evento)

  function showDirector (){

        const director = document.createElement ("h1")
    director.textContent = film.director
    console.log(director)
}9 */