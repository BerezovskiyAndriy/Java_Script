// Всі функції повинні бути описані стрілочним типом!!!!

// 1. Створити функцію яка обчислює та повертає площу прямокутника висотою
// let areaRectangle = (a,b) => a * b;
// areaRectangle(10,15);

// 2. Створити функцію яка обчислює та повертає площу кола
// let areaCircle = (r) => (Math.PI * Math.pow(r, 2)).toFixed(2);
// areaCircle(10);

// 3. Створити функцію яка обчислює та повертає площу циліндру
// let  areaCylinder = (r,h) => (2 * Math.PI * r * (h + r)).toFixed(2);
// areaCylinder(5,10);

// 4. Створити функцію яка приймає масив та виводить кожен його елемент
// let array = (...arr) => console.log(arr);
// array(1, 25, 'hello', true, 100);

// 5. Створити функцію яка  створює параграф з текстом. Текст задати через аргумент
// let paragraph = (text) => `<p>${text}</p>`;
// paragraph('hello okten');

// 6. Створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// let ul = (text) => {
//     document.write(`<ul>
//         <li>${text}</li>
//         <li>${text}</li>
//         <li>${text}</li>
//     </ul>`)
// }
// ul('hello okten');

// 7. Створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
//    Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// let list = (text, li) => {
//     document.write(`<ul>`);
//     for (let i = 0; i < li; i++) {
//         document.write(`<li>
//             ${text}
//         </li>`);
//     }
//     document.write(`</ul>`);
// }
// list('hello world',3);

// 8. Створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// let list = (...array) => {
//     document.write(`<ul>`);
//     for (const element of array) {
//         document.write(`<li>${element}</li>`);
//     }
//     document.write(`</ul>`);
// }
// list(25, 'hello', true, 1000, false, 'okten');

// 9. Створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
//    Для кожного об'єкту окремий блок.
// let array = [ {id: 1, name: 'Andriy', age: 29}, {id: 2, name: 'Kristina', age: 24} ];
// let users = (array) => {
//     let result = '';
//     for (const element of array) {
//         document.write(`<div>`);
//         for (const key in element) {
//            result = `${key} : ${element[key]} `
//            document.write(result);
//         }
//         document.write(`</div>`);
//     }
// }
// users(array);




