'use strict';

  const bodyChild = document.body.childNodes;

  const ul = bodyChild[1];
  let sum = 0;

  for (let value of ul.childNodes) {
      console.log(value);
      sum += 1;
  }

  console.log(sum);

  const arr = Array.from(ul.childNodes);
  const filterArr = arr.filter((item) => item.nodeName === 'LI');
  const newArr = [];

  for (let text of filterArr) {
    newArr.push(text.textContent);
  }

  console.log(newArr);