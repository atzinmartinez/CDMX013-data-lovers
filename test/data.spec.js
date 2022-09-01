import { filterByDirector, filterByDate } from '../src/data.js';

describe('filterByDirector', () => {
  const data= [
    {director:"Hayao Miyazaki"}, {director:"Hiromasa Yonebayashi"} ]
  it('is a function', () => {
    expect(typeof filterByDirector).toBe('function');
  });

  it('returns `peliculas con de cada director`', () => {
    
     
      expect(filterByDirector ("Hayao Miyazaki", data)).toEqual([{director:"Hayao Miyazaki"}]); 
      expect (filterByDirector("Hiromasa Yonebayashi", data)).toEqual([{director:"Hiromasa Yonebayashi"}]);
  });
    
  it ("return allData", () => {
    expect (filterByDirector ("Todos", data)).toHaveLength(2); // esperamos un 2
    expect (filterByDirector ("Todos", data)).not.toHaveLength(3); // no esperamos un 3

   

  })});


  


  
 
  describe ('filterByDate', () => {
    //const decade = [ {release_date: "1986"}]
    it ('is a function', () =>{
      expect (typeof filterByDate).toBe("function");
    })});
  
  
  



  


