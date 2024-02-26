'use strict';
const user = {
  name: 'John',
  age: 30,
};

function greet(greeting) {
  console.log(`${greeting}, ${this.name}!`);
}

function myBind(func, context, ...args) {
  return function (...innerArgs) {
      return func.apply(context, args.concat(innerArgs));
  };
}


const greetUser = myBind(greet, user, 'Hello');
greetUser();