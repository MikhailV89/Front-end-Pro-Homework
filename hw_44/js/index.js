'use strict';

const generateList = (array) => {
    const list = document.createElement("ul");

    array.forEach((value) => {
        const item = document.createElement("li");

        Array.isArray(value)
            ? item.appendChild(generateList(value))
            : (item.textContent = value);

        list.appendChild(item);
    });

    return list;
}

const array1 = [1, 2, 3];
const array2 = [1, 2, [1.1, 1.2, 1.3], 3, [1.1, 1.2]];

const list1 = generateList(array1);
const list2 = generateList(array2);

document.body.appendChild(list1);
document.body.appendChild(list2);