'use strict';

const bodyChild = document.body.childNodes;
const ul = bodyChild[1];

const arrLi = Array.from(ul.childNodes);
console.log(arrLi);

const attributeArr = arrLi.filter((item) => item.nodeName === 'LI');
console.log(attributeArr);

const textArr = [];
for (const node of attributeArr) {
    textArr.push(node.textContent);
}

textArr[9] = 'Привет меня зовут Mike';
console.log(textArr);

const firstLi = document.getElementById('firstLi');
firstLi.setAttribute('data-my-name', 'Mike');
console.log(firstLi);

const ulRemoveAtt = document.getElementById('ulId');
ulRemoveAtt.removeAttribute('data-dog-tail');
console.log(ulRemoveAtt);

