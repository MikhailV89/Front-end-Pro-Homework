'use strict';

function funcArray(arr) {
    const exampleArr = [];

    if (arr.lenght === 0) return 'Данний масив порожнiй';

    for (let i = 0; i < arr.length; i++ ) {
        if (arr[i] > 0) exampleArr.push(arr[i]);
    }
      return exampleArr.length !== 0 ? exampleArr : null;
}

  const arr = [1, 2, 3, -1, -2, -3];
  console.log(funcArray(arr));
 

