// estas funciones son de ejemplo
import allData from './data/ghibli/ghibli.js';
const film = allData.films
export const filterByDirector = (nameDirector)=>{
  if (nameDirector == "Todos") { 
  return film

  } else {
  return film.filter(item=>item.director === nameDirector)
}
}

export const filterDate = (filterDate)=>{
  if (filterDate == "Escoger Fecha") { 
  return film

  } else {
  return film.filter(item=>item.release_date == "1989")
  
}

}
console.log (filterDate)

// funciones

