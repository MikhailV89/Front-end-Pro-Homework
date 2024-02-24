'use strict';
const user = {
  name: 'Mike',
  age: 34,
  city: 'Odessa',
};

const greetings = function (prefix) {
  return `${prefix} ${this.name}`;
};


const myApply = function (func, context, args) {
  context.func = func;
  const result = context.func(...args);
  delete context.func;
  return result;
};

console.log(myApply(greetings, user, ['Hello']));