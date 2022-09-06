import { filterByDirector, filterByDate } from '../src/data.js';

describe('filterByDirector', () => {
  const data= [
    {director:"Hayao Miyazaki"}, {director:"Hiromasa Yonebayashi"} ]
  it('is a function', () => {
    expect(typeof filterByDirector).toBe('function');
  });

  it('returns `peliculas por director seleccionado`', () => {
      expect(filterByDirector ("Hayao Miyazaki", data)).toEqual([{director:"Hayao Miyazaki"}]); 
      expect (filterByDirector("Hiromasa Yonebayashi", data)).toEqual([{director:"Hiromasa Yonebayashi"}]);
  });
  it ("return allData", () => {
    expect (filterByDirector ("Todos", data)).toHaveLength(2); // esperamos un 2
    expect (filterByDirector ("Todos", data)).not.toHaveLength(3); // no esperamos un 3

  })});
  
  describe ('filterByDate', () => {
    const decade = [ {release_date: "1989"}]
    it ('is a function', () =>{
      expect (typeof filterByDate).toBe("function");
  });

    it ("return peliculas dentro decada de los 80s", () => {
    expect (filterByDate("1989", decade)).not.toEqual(["2010"]);
      })
  });
    //esperamos que filterByDate devuelva 1 decada 
   
  // como configurar eslint para formatear en visual studio code
  
  



    //film.release_date >= (date - 9)


