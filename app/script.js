const movies = [
  { id: 10, name: "Matrix", year: 1998 },
  { id: 20, name: "Dr Doolittle", year: 1997 },
  { id: 30, name: "The Mask", year: 1994 },
  { id: 40, name: "The Lord of the rings", year: 2003 },
];

// how many?
// console.log("Movies count", movies.length);

for (let i = 0; i < 3; i++) {
  console.log(i, " :: ", movies[i]);
}
