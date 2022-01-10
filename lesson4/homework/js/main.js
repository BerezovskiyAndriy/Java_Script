// 1. Створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// function areaOfRectangle (a, b) {
//     let result = a * b;
//     console.log(result);
//     return result;
// }
// areaOfRectangle (9, 5);

// 2. Створити функцію яка обчислює та повертає площу кола з радіусом r
// function areaOfCircle (r) {
//     let result = Math.PI  * Math.pow(r, 2);
//     console.log(result.toFixed(2));
//     return result;
// }
// areaOfCircle(7);

// 3. Створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// function areaOfCylinder (r,h) {
//     let result = 2 * Math.PI * r * (r + h);
//     console.log(result.toFixed(2));
//     return result;
// }
// areaOfCylinder(5, 4);

// 4. Створити функцію яка приймає масив та виводить кожен його елемент
// function array (a,b,c,d,e) {
//     let arr = [a, b, c, d, e];
//     for (const arrElement of arr) {
//         console.log(arrElement);
//     }
// }
// array(24,456,0,-13,27.2);

// 5. Створити функцію яка створює параграф з текстом. Текст задати через аргумент
// function article (text) {
//     let result = (`<p>${text}</p>`)
//     document.write(result);
// }
// article('hello');

// 6. Створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// function ul (text1) {
//     let result = (`<ul>
//                     <li>${text1}</li>
//                     <li>${text1}</li>
//                     <li>${text1}</li>
//                     </ul>`)
//     document.write(result);
// }
// ul('Range Rover');

// 7. Створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
//    Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// function ul (text, li) {
//     document.write(`<ul>`);
//         for (let i = 0; i < li; i++) {
//             let result = (`<li>${text}</li>`);
//             document.write(result);
//         }
//     document.write(`</ul>`);
// }
// ul('Hello okten', 3);

// 8. Створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// function array (arr1, arr2, arr3, arr4) {
//     let result = [arr1, arr2, arr3, arr4];
//     document.write(`<ul>`);
//     for (let i = 0; i < result.length; i++) {
//         let li = (`<li>${result[i]}</li>`)
//         document.write(li);
//     }
//     document.write(`</ul>`);
// }
// array(34,true, 'hello', 0);

// 9. Створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для
//    кожного об'єкту окремий блок.
// function array (id, name, age) {
//     let result = [
//                     {
//                         id: id,
//                         name: name,
//                         age: age
//                     }
//                 ];
//
//         for (let resultElement of result) {
//             let id = resultElement.id;
//             let name = resultElement.name;
//             let age = resultElement.age;
//             document.write(`<div>ID - ${id} І'мя - ${name} Вік - ${age}</div>`);}
//         return result;
// }
//
// document.write('<h2>Дані першого користувача:</h2>');
// array(prompt('Введіть ID користувача'), prompt("Введіть ім'я користувача"),
//       prompt('Введіть вік користувача'));
//
// document.write('<h2>Дані другого користувача:</h2>');
// array(prompt('Введіть ID другого користувача'), prompt("Введіть ім'я другого користувача"),
//       prompt('Введіть вік другого користувача'));
//
// document.write('<h2>Дані третього користувача:</h2>');
// array(prompt('Введіть ID третього користувача'), prompt("Введіть ім'я третього користувача"),
//     prompt('Введіть вік третього користувача'));


