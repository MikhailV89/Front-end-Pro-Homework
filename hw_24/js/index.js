'use strict';
const generateUniqueRandomNumber = function() {
    const arrWithNumbers = [];
    return function() {
      let randomNumber;

      do {
        randomNumber = Math.floor(Math.random() * 100) + 1;
      } while (arrWithNumbers.includes(randomNumber));
  
      arrWithNumbers.push(randomNumber);
  
      return randomNumber;
    };
  }();
  
  for (let i = 0; i < 100; i++) {
    console.log(generateUniqueRandomNumber());
  }

