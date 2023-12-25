'use strict';
// 1. **Створення та Модифікація Об'єктів:**

//   - Створити об'єкт `student` з властивостями `name`, `age`, та `grade`.

//   - Змінити властивість `grade` об'єкта `student`.

//   - Додати нову властивість `course` до об'єкта `student`.

const student = {
    name: 'Mike',
    age: 20,
    grade: 75
};

student.grade = 95;
student.course = 'Chemistry';

console.log(student);

// 2. **Робота з Вкладеними Об'єктами:**

//   - Створити об'єкт `book` з властивостями `title`, `author`, та `year`.

//   - Додати вкладений об'єкт `publisher` з властивостями `name` та `location`.

const book = {
    title: 'Lord of the Rings',
    author: 'Tolkien',
    year: 1954,
    publisher: {
        name: 'Allen & Unwin',
        location: 'London',
    }
};

console.log(book);

// 3. **Перебір Властивостей Об'єкта:**

//   - Створити об'єкт `movie` з декількома властивостями, наприклад, `title`, `director`, `year`, та `genre`.

//   - Використати цикл `for...in` для виведення назв та значень всіх властивостей об'єкта `movie`.

const movie = {
    title: 'Lord of the Rings',
    director: 'Christopher Nolan',
    year: 2001,
    genre: 'Fantasy'
  };
  
  for (let key in movie) {
    console.log(`${key}: ${movie[key]}`);
  }

// 4. **Співставлення Об'єктів:**

//   - Створити два різні об'єкти `person1` та `person2` з однаковими властивостями.

//   - Порівняти ці об'єкти, визначити чи вони однакові за структурою (однакові ключі та значення).

const person1 = {
    name: 'John',
    age: 25,
    city: 'New York'
  };
  
const person2 = {
    name: 'John',
    age: 25,
    city: 'New York'
  };

  function areObjectsEqual(obj1, obj2) {
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
  
    if (keys1.length !== keys2.length) {
      return false;
    }
  
    for (var i = 0; i < keys1.length; i++) {
      var key = keys1[i];
      if (obj1[key] !== obj2[key]) {
        return false;
      }
    }
  
    return true;
  }
  const areEqual = areObjectsEqual(person1, person2);

  console.log(areEqual);

// 5. **Робота з Масивом Об'єктів:**

//   - Створити масив `animals`, де кожен елемент є об'єктом з властивостями `type` та `name`.

//   - Додати новий об'єкт до масиву `animals`.

const animals = [
    { type: 'cat', name: 'Bonya' },
    { type: "Tiger", name: 'Simba' },
    { type: 'Snake', name: 'Lesya' }
];

const newAnimal = { type: 'Rabbit', name: 'noname' };
animals.push(newAnimal);

console.log(animals);