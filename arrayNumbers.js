//a) Napisz funkcję, która zwróci tablicę o długości podanej jako „howManyNumbers”. Ta tablica musi zawierać w sobie losowe liczby z zakresu min i max:

const randomNumber = (length, min, max) =>
  [...Array(length)].map(() =>
    Math.floor(Math.random() * (max - min + 1) + min)
  );

const genArrayNumbers = (howManyNumbers = 10, min = 1, max = 10) => {
  return randomNumber(howManyNumbers, min, max);
};
// console.log(genArrayNumbers());
genArrayNumbers();

//b) Napisz funkcje, która wygeneruje array z 10 arrayami
const genNewArray = (howManyArrays = 10, length = 10, min = 1, max = 10) => {
  return [...Array(howManyArrays)].map(() => randomNumber(length, min, max));
};
// console.log(genNewArray());
genNewArray();
