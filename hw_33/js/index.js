'use strict';
// Task 1
const getFactorial = function (number) {
  let factorial;
  if (number === 0) {
    factorial = 1;
  } else {
    factorial = number * getFactorial(number - 1);
  }

  return factorial;
};

console.log(getFactorial(5));

// Task 2
const pow = function (num, degree) {
  let result;
  if (degree === 0) {
    result = 1;
  } else {
    result = num * pow(num, degree - 1);
  }

  return result;
};

console.log(pow(3, 7));

// Task 3
const recSum = function (num, counter) {
  let result;
  if (counter === 0) {
    result = 1;
  } else {
    result = num + recSum(num + 1, counter - 1);
  }

  return result;
};

console.log(recSum(10, 15));