'use strict';
// Task 1
const runCallbacks = function (callback, value) {
    return callback.reduce(
      (accumulator, currentCallback) => currentCallback(accumulator),
      value,
    );
  };
  
  const addOne = (x) => x + 1;
  const square = (x) => x * x;
  const callbacks = [addOne, square];
  const result = runCallbacks(callbacks, 2);
  console.log(result);
  
  // Task 2
  const composeFunctions = function (...funcs) {
    return function (value) {
      return funcs.reduceRight((currentValue, currentFunc) => {
        return currentFunc(currentValue);
      }, value);
    };
  }
  const double = (x) => x * 2;
  const squar = (x) => x * x;
  const negate = (x) => -x;
  const composedFunction = composeFunctions(negate, squar, double);
  console.log(composedFunction(2));




 