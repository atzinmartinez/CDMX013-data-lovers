

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

