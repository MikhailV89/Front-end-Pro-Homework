'use strict';
function greet() {
  console.log(`Hello, my name is ${this.name}!`);
}

function createUser(name, age) {

  const user = {
    name: name,
    age: age,
  };

  user.greet = greet;

  return user;
}

const user1 = createUser('Helen', 21);
const user2 = createUser('Nick', 35);
const user3 = createUser('Bobby', 30);

user1.greet(); 
user2.greet();
user3.greet();

