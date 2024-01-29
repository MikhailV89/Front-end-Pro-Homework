'use strict';

  const generateUniqueRandomNumber = function () {
    const arrWithNumbers = [];
  
    const generate = function () {
      const randomNumber = Math.floor(Math.random() * 100) + 1;
  
      if (arrWithNumbers.includes(randomNumber)) {
        return generate();
      }
  
      arrWithNumbers.push(randomNumber);
      return randomNumber;
    };
  
    return generate;
  }();
  
  for (let i = 0; i < 100; i++) {
    console.log(generateUniqueRandomNumber());
  }