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


// elementos mayores a 1980 un if 1980 else 1990 > 1980
// elementos mayores a 1990 un if 2000 else 2010
// elementos mayores a 2000
// elementos mayores a 2010


//recibe un año y nos regresa peliculas 
export const filterByDate = (date)=> {
  if (date == "escogerFecha") { 
    return film
  } else {
return film.filter (film => film.release_date <= date && film.release_date >= (date - 10) )
} }








