// First Question
const filteredPeople = (people) => {
  const filtered = people.filter((person) => person.gender === "female");
  const mapped = filtered.map((person) => person.name);
  console.log(mapped);
  return mapped;
};

// Second Question
const bookTitles = (books) => {
  const titles = books.map((book) => book.title);
  console.log(titles);
  return titles;
};

// Third Question
const square = (number) => number * number;
const double = (number) => number * 2;
const add5 = (number) => number + 5;

const squareDoubleAdd5 = (number) => {
  const squared = square(number);
  const doubled = double(squared);
  const added = add5(doubled);
  console.log(added);
  return added;
};

// Fourth Question
const sortByYear = (cars) => {
  cars.sort((a, b) => a.year - b.year);
  console.log(cars);
  return cars;
};

// Fifth Question
const sumOfEvenNumbers = (numbers) => {
  const evenNumbers = numbers.filter((number) => number % 2 === 0);
  const sum = evenNumbers.reduce((total, number) => total + number, 0);
  console.log(sum);
  return sum;
};
