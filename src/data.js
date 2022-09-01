// estas funciones son de ejemplo

export const filterByDirector = (nameDirector, films)=>{
  if (nameDirector == "Todos") { 
  return films

  } else {
  return films.filter(item=>item.director === nameDirector)
  
}

}



// elementos mayores a 1980 un if 1980 else 1990 > 1980
// elementos mayores a 1990 un if 2000 else 2010
// elementos mayores a 2000
// elementos mayores a 2010


//recibe un año y nos regresa peliculas 
export const filterByDate = (date, films)=> {
  if (date == "escogerFecha") { 
    return films
  } else {
return films.filter (film => film.release_date <= date && film.release_date >= (date - 9) )
} }








