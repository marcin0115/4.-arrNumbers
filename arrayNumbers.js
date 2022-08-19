const randomNumber = (length, min, max) =>
  [...Array(length)].map(() =>
    Math.floor(Math.random() * (max - min + 1) + min)
  );

//a) Napisz funkcję, która zwróci tablicę o długości podanej jako „howManyNumbers”. Ta tablica musi zawierać w sobie losowe liczby z zakresu min i max:
const genArrayNumbers = (howManyNumbers = 10, min = 1, max = 10) => {
  randomNumber(howManyNumbers, min, max);
};
genArrayNumbers();

//b) Napisz funkcje, która wygeneruje array z 10 arrayami
const genNewArray = (howManyArrays = 10, length = 10, min = 1, max = 10) => {
  [...Array(howManyArrays)].map(() => randomNumber(length, min, max));
};
genNewArray();

//
// STARA WERSJA:
// const genArrayNumbers = (howManyNumbers = 10, min = 1, max = 10) => {
//   randomArray = (length, min, max) =>
//     [...Array(length)].map(() =>
//       Math.floor(Math.random() * (max - min + 1) + min)
//     );
//   // return randomArray(howManyNumbers, min, max);
// };
// genArrayNumbers();

// const genNewArray = (howManyArrays = 10, length = 10, min = 1, max = 10) => {
//   arrayWithArrays = [...Array(howManyArrays)].map(() =>
//     [...Array(length)].map(() =>
//       //dubluje sie, przeniesc na gore i uzyc w obydwu funkcjach:
//       Math.floor(Math.random() * (max - min + 1) + min)
//     )
//   );
//   // return arrayWithArrays;
// };
// genNewArray();
