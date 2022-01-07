const userName = "Prasanna"; // string
const age = 22; // number
const favorites = ["ice-cream", "cake", "books", "cars"]; // array
const contact = {
  phone: "+91 7878767871",
  email: "prasanna@mail.com",
}; // object

// console.log(contact.email); // prasanna@mail.com
// console.log(favorites[1]); // cake

// if (age > 24) {
//   console.log("You are legally able to drive");
// } else {
//   console.log("You should not drive");
// }
//// You should not drive

// console.log(contact.location); // undefined

// contact = "prasanna@mail.com";
// console.log(contact);
//// will error

const movies = [
  { id: 10, name: "Matrix", year: 1998 },
  { id: 20, name: "Dr Doolittle", year: 1997 }, // 2nd elem => 1 index
  { id: 30, name: "The Mask", year: 1994 },
  { id: 40, name: "The Lord of the rings", year: 2003 },
];

// console.log(movies[3]["year"]);
// console.log(movies[3].year);
// const key = "year";
// console.log(movies[3][key]);

// last
// const length = movies.length;
// console.log(movies[length - 1]["year"]);

// changing values
// console.log("Before ", contact.phone);

// contact = {
//   phone: "+91 7878367871",
//   email: "prasanna@mailer.com",
// };
// error

// contact.phone = "+001234567890";
// console.log("After ", contact.phone);

// console.log("Contact ", contact);
// delete contact.phone;
// console.log("After delete ", contact);

// contact.address = "13 street";
// console.log("Adding address", contact);

// console.log(favorites);
// favorites.push("books");
// favorites.push(24);
// console.log(favorites);
// favorites.pop();
// console.log(favorites);

// console.log(favorites);
// favorites.splice(2, 1); // index, how many elements
// console.log(favorites);
