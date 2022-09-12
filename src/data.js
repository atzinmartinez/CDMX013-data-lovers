

export const filterByDirector = (nameDirector, allFilms) => {
  if (nameDirector == "allDirector") {
    return allFilms
  } else {
    return allFilms.filter(oneDirector => oneDirector.director === nameDirector)
  }
}
export const filterByDate = (date, allYears) => {
  if (date == "allDate") {
    return allYears
  } else {
    return allYears.filter(oneDecade => oneDecade.release_date <= date && oneDecade.release_date >= (date - 9))
  }
}
export const orderByRanking = (allRanking, allFilms) => {
  if (allRanking == "ordenar") {
    return allFilms
  }
  if (allRanking == "menor") {
    return allFilms.sort(((a, b) => a.rt_score - b.rt_score))
  }
  if (allRanking == "mayor") {
    return allFilms.sort(((a, b) => b.rt_score - a.rt_score))
  }
}



export const statistics = (allFilms) => {
  let sumage = 0;
  let personajes = 0;
  allFilms.forEach((film) => {
    personajes = personajes + film.people.length
    film.people.forEach((people) => {
      let numeroage = parseInt(people.age)
      if (isNaN(numeroage) == false) {
        sumage = numeroage + sumage
        //console.log(numeroage)
      }
      // personajes = personajes ++
    })
  })
  //console.log("suma", sumage, "numero", personajes);

  const division = sumage / personajes
  let resultado = Math.round(division); //25
  //console.log(resultado);
  return resultado
}





// estadistica de edad promedio de personajes
//acceder al array films>people>age


//entrar a la propiedad del objetoi y sacar el array age
// pasar a numero y despues hacer filtro

/*const initialValue = 0;
const sumWithInitial = array1.reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  initialValue
);*/

