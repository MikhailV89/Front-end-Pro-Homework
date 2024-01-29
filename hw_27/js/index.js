'use strict';
//1
console.log(a);
 var a = 10; 

 //Результат: undefined
 //Переменные обЪявленные с помощью var, обрабатываются до выполнения любого кода,
 // поднимаются вверх контекста, но значение остается undefined до фактического присвоения.

 //2
 myFunction(); 

function myFunction() { 
    console.log('Hello, world!'); 
 } 

  //Результат: Hello world
  //Функция объявлена через function declaration, а значит она исполняется перед выполнением любого кода в скрипте.
  //Значит функцию можно вызвать в любом месте кода.

  //3
  console.log(b); 
  let b = 5; 
    //Результат: ReferenceError
    //Т.к переменная объявлена через let, то она не поднимается вверх контекста. обращения к ним до их объявления приведет к ошибке. 
    //Таким образом, код вызовет ошибку.

 //4
 const myArrowFunction = () => { 
    console.log('Hello from arrow function'); 
    }
    
     myArrowFunction(); 
   
     //Результат: Hello from arrow function
     //Стрелочные функция, использующая метод Function Expression не поднимают свои объявления. 
     //Вызов происходит после обьявления функции. Поэтому выходит результат который в console.log.

    
    
     // Example 1 
    // (Dont work).Переменная объявлена с помощью var,ей присвоено функциональное значение.Т.к функцию вызвали перед var,
    // поэтому она не поднимается вверх. Будет в результате ошибка TypeError.
     randomFuction();

     var randomFuction = function() {
      console.log('Hello world');
     }

   // Example 2
   // Work

   userName();

   function userName() {
      console.log('Somename');
   }