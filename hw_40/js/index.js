'use strict';
//Task 1
const products = [
  { item: 'Juice', price: 35 },
  { item: 'Gum', price: 20 },
  { item: 'Apple', price: 15 },
  { item: 'Carrot', price: 15 },
  { item: 'Potato', price: 25 },
];

const objDiscount = (obj) => {
  const newPrice = obj.map((object) => 
  ({
    ...object,
    price: object.price * 0.9,
  }));

  return newPrice;
};
console.log(objDiscount(products));

//Task 2

const students = [
  {name: 'Alice', grade: 92},
  {name: 'Bob', grade: 100},
  {name: 'Jack', grade: 23},
  {name: 'Dasha', grade: 75},
  {name: 'Alex', grade: 40},
];

const bestStudents = students.filter(person => person.grade > 90);
console.log(bestStudents);
 