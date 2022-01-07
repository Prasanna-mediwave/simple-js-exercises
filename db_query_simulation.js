// Table of movies

const movies = [
  { id: 10, name: "Matrix", year: 1998 },
  { id: 20, name: "Dr Doolittle", year: 1997 },
  { id: 30, name: "The Mask", year: 1994 },
  { id: 40, name: "The Lord of the rings", year: 2003 },
];

// how many?
// console.log("Movies count", movies.length);

// just 3 items
// for (let i = 0; i < 3; i++) {
//   console.log(i, " :: ", movies[i]);
// }

// filtering - READ
// const newMovies = [];
// for (let i = 0; i < movies.length; i++) {
//   const movie = movies[i];
//   if (movie.year > 1998) {
//     newMovies.push(movie);
//   }
// }

// for (const movie of movies) {
//   if (movie.year > 1998) {
//     newMovies.push(movie);
//   }
// }
// console.log(newMovies);

// delete element - 20 - DELETE
// for (let i = 0; i < movies.length; i++) {
//   const movie = movies[i];
//   if (movie.id == 20) {
//     movies.splice(i, 1);
//   }
// }
// console.log(movies);

// update element - 30 - UPDATE year 1995
// for (let i = 0; i < movies.length; i++) {
//   const movie = movies[i];
//   if (movie.id == 30) {
//     movie.year = 1995;
//   }
// }
// console.log(movies);

// adding an element - CREATE
// const movie = {
//   id: 50,
//   name: "Presist",
//   year: "2021",
// };
// movies.push(movie);
// console.log(movies);

const movie = {
  id: 25,
  name: "Presist",
  year: "2021",
};
const newMovies = [];
for (let i = 0; i < movies.length; i++) {
  const tempMovie = movies[i];
  if (tempMovie.id == 30) {
    newMovies.push(movie);
    newMovies.push(tempMovie);
  } else {
    newMovies.push(tempMovie);
  }
}
console.log(newMovies);
