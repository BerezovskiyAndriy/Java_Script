// 1. Створити масив з:
//    - з 5 числових значень
//    - з 5 стічкових значень
//    - з 5 значень стрічкового, числового та булевого типу
//    - та вивести його в консоль

// for (let i = 0; i < 5; i++) {
//     console.log(i);
// }

// for (let i = 1; i <= 5; i++) {
//    console.log(i+' Hello');
// }

// let n;
// for (let i = 0; i < 5; i++) {
//     console.log('Hello world');
//     console.log(i);
//     console.log(n === i);
// }



// 2. Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

// let arr = [];
// arr[0] = 'start'
// arr[1] = 46;
// arr[2] = false;
// arr[3] = 0;
// arr[4] = 'end'
// for (const arrElement of arr) {
//     console.log(arrElement);
// }


// 3. За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
//    - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
//    - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
//    - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

// for (let i = 0; i < 10; i++) {
//     document.write('<div>Never get up</div>');
// }

// for (let i = 1; i <= 10; i++) {
//     document.write(`<div>${i + ' Always repeat'}</div>`);
// }

// let x = 0;
// while (x < 20) {
//     document.write('<h1>tittle</h1>');
//     x++;
// }

// let i = 1;
// while (i <= 20) {
//     document.write(`<h1>${i + ' title'}</h1>`);
//     i++;
// }



// 4. Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних
//    індексів. Вивести в консоль всі його елементи в циклі.
//    - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
//    - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
//    - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
//    - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
//    - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

// let array = [];
// array[0] = 'Range Rover';
// array[1] = true;
// array[2] = 25;
// array[3] = 35.45;
// array[4] = 'Hello';
// array[5] = -250;
// array[6] = false;
// array[7] = 'Okten'
// array[8] = 0;
// array[9] = 'end';
// for (const arrayElement of array) {
//     console.log(arrayElement);
// }

// for (let i = 1; i <= 10; i++) {
//     console.log(i);
//     document.write(`<div>${i}</div>`);
// }

// for (let i = 1; i <= 100; i++) {
//     console.log(i);
//     document.write(`<div>${i}</div>`);
// }

// for (let i = 1; i <= 100; i+=2) {
//     console.log(i);
//     document.write(`<div>${i}</div>`);
// }
// // Це також підходить під умову останнього підпункту завдання, оскільки таким чином ми вивели всі непарні числа в
// // діапазоні 1 - 100

// for (let i = 2; i <= 100; i+=2) {
//     console.log(i);
//     document.write(`<div>${i}</div>`);
// }