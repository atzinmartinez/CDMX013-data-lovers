
export const filterByDirector = (nameDirector, allFilms)=>{
  if (nameDirector == "allDirector") { 
  return allFilms

  } else {
  return allFilms.filter(oneDirector=>oneDirector.director === nameDirector)
  
}

}

export const filterByDate = (date, allYears)=> {
  if (date == "allDate") { 
    return allYears
  } else {
return allYears.filter (oneDecade => oneDecade.release_date <= date && oneDecade.release_date >= (date - 9) )
} }


export const orderByRanking= (allFilms)=>{
  if(allFilms == "menor"){
    return allFilms.sort(((a,b)=> a.rt_score - b.rt_score))
  } else if(allFilms=="mayor"){
    return allFilms.sort(((a,b)=> b.rt_score + a.rt_score))
  }
  
} 




 /* declarar una constante con un nuevo array para no modificar el original .map
 ya declarada se hace el ordenamiento de menor a mayor ranking

/*export const orderRanking = (rankingOne,rankingTwo) => {
  if (rankingOne== "boton"){
    return film ""
  } else {
    return film.sort (film.rt_score>rankingOne)
  }
}
*/

//film.sort((a,b) => a.rt_score>b.rt_score ? 1 : -1 )









