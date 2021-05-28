// 2.3. Analyses de données //
// 2.3.1. Startup Nation //


const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
]
// nés dans les années 1970 //
const filteredEntrepreneurs = entrepreneurs.filter((entrepreneur) => {
  if (entrepreneur.year > 1969 && entrepreneur.year < 1980 )
  return entrepreneur.year
})

console.log(filteredEntrepreneurs);


// Faire une array des noms & prénoms //
const entrepreneursFirst = entrepreneurs.map((entrepreneur) => {
  return entrepreneur.first 
})

console.log(entrepreneursFirst);

const entrepreneursLast = entrepreneurs.map((entrepreneur) => {
  return entrepreneur.last
})
console.log(entrepreneursLast);

const combinedFirstLast = entrepreneursFirst.concat(entrepreneursLast);

console.log(combinedFirstLast);

// Quel âge aurait chaque inventeur aujourd'hui ? //
entrepreneurs.forEach((entrepreneur) => {
  age = 2021 - entrepreneur.year
 console.log(age)
  
})

// Tri par ordre alphabétique des LastNames //
entrepreneurs.sort(function(a, b) {
  if (a.last.toLowerCase() < b.last.toLowerCase()
  ) return -1;
  if (a.last.toLowerCase() > b.last.toLowerCase()
  ) return 1;
  return 0;

});

console.log(entrepreneurs)