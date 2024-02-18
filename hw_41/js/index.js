'use strict';
const parseJSON = (someText) => {
 
  try {
    return JSON.parse(someText);
  
  } catch (error) {
    return 'Invalid JSON string';
  }
};

console.log(parseJSON('{"name": "John", "age": 30}'));
console.log(parseJSON('{"name": "John", "age":'));