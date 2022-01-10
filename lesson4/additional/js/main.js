// 1. Створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або
//    конкатенує їх між собою.
// function value(item1, item2) {
//     let result1 = +[item1] || [item1];
//     let result2 = +[item2] || [item2];
//     let sum = `${result1} ${result2}`;
//         if (result1 && !result2) {
//             document.write(item1);
//         } else if (result1 && result2) {
//             document.write(`${sum}`);
//         }
// }
// value(54,'okten');

// 2. Створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає
//    новий результуючий масив.
//    EXAMPLE: [1,2,3,4]    результат: [3,5,7,9]
//             [2,3,4,5]
// function array (arr1, arr2, arr3, arr4, arr5, arr6, arr7, arr8) {
//     let array1 = [arr1, arr2, arr3, arr4];
//     let array2 = [arr5, arr6, arr7, arr8];
//     for (let i = 0;i < array1.length && i < array2.length; i++) {
//         let sumArray = array1[i] + array2[i];
//         document.write(`<div>${sumArray}</div>`);
//     }
// }
// array(1,2,3,4,2,3,4,5);

// 3. Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
// function arrayObject (name, age, model) {
//     let array = [{name: name, age: age},{model: model}];
//     let newArray = [];
//     for (const arrayElement of array) {
//         for (const key in arrayElement) {
//             newArray.push(key);
//         }
//     }
//     return newArray;
// }
// arrayObject('Dima',13,'Camry');

// 4. Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]
// function arrayObject (name, age, model) {
//     let array = [{name: name, age: age},{model: model}];
//     let newArray = [];
//     for (const arrayElement of array) {
//         for (const element of arrayElement) {
//             newArray.push(element);
//         }
//     }
//     return newArray;
// }
// arrayObject('Dima',13,'Camry');





