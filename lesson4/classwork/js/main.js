// 1. Створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// function minNumber (a,b,c) {
//     if (a < b && a < c) {
//         document.write(`Найменше число ${a}`);
//     } else if (b < a && b < c) {
//         document.write(`Найменше число ${b}`);
//     } else if (c < a && c < b) {
//         document.write(`Найменше число ${c}`);
//     }
// }
// minNumber(+prompt('Введіть перше число'),
//           +prompt('Введіть друге число'),
//           +prompt('Введіть третє число'));

// 2. Створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// function maxNumber (a,b,c) {
//     if (a > b && a > c) {
//         document.write(`Найбільше число ${a}`);
//     } else if (b > a && b > c) {
//         document.write(`Найбільше число ${b}`);
//     } else if (c > a && c > b) {
//         document.write(`Найбільше число ${c}`);
//     }
// }
// maxNumber(+prompt('Введіть перше число'),
//           +prompt('Введіть друге число'),
//           +prompt('Введіть третє число'));

// 3. Створити функцію яка повертає найбільше число з масиву
// function maxArray (arr1, arr2, arr3, arr4) {
//     let array = [arr1, arr2, arr3, arr4];
//     let maxNumber = Math.max(array[0], array[1], array[2], array[3]);
//     document.write(`Найбільше число ${maxNumber}`);
// }
// maxArray(+prompt('Введіть перше число'),
//          +prompt('Введіть друге число'),
//          +prompt('Введіть третє число'),
//          +prompt('Введіть четверте число'));

// 4. Створити функцію яка повертає найменьше число з масиву
// function maxArray (arr1, arr2, arr3, arr4) {
//     let array = [arr1, arr2, arr3, arr4];
//     let maxNumber = Math.min(array[0], array[1], array[2], array[3]);
//     document.write(`Найбільше число ${maxNumber}`);
// }
// maxArray(+prompt('Введіть перше число'),
//          +prompt('Введіть друге число'),
//          +prompt('Введіть третє число'),
//          +prompt('Введіть четверте число'));

// 5. Створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// function sumArray (a, b, c) {
//     let array = [a, b, c];
//     let sum = array[0] + array[1] + array[2];
//         document.write(`Сума даного масиву чисел ${sum}`);
//     return sum;
// }
// sumArray(+prompt('Введіть перше число'),
//          +prompt('Введіть друге число'),
//          +prompt('Введіть третє число'));

// 6. Створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// function arithmeticMean (a, b, c) {
//     let array = [a, b, c];
//     let action = Math.floor((array[0] + array[1] + array[2]) / array.length);
//         document.write(`Середнє арефметичне даного масиву чисел ${action}`);
//     return action;
// }
// arithmeticMean(+prompt('Введіть перше число'),
//                +prompt('Введіть друге число'),
//                +prompt('Введіть третє число'));

// 7. Створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше
//    (Math використовувати заборонено);
// function number (a,b,c) {
//     let result1 = b > c ? `Найбільше число ${b}` : b < c ? `Найбільше число ${c}` : b === c ? 'Числа b і c рівні' : '';
//     let result2 = a > c ? `Найбільше число ${a}` : a < c ? `Найбільше число ${c}` : a === c ? 'Числа a і c рівні' : '';
//     let result3 = b > a ? `Найбільше число ${b}` : b < a ? `Найбільше число ${a}` : a === b ? 'Числа a і b рівні' : '';
//     if (a < b && a < c) {
//         return a && document.write(result1);
//     } else if (b < a && b < c) {
//         return b && document.write(result2);
//     } else if (c < a && c < b) {
//         return c && document.write(result3);
//     }
// }
// number (2,252,12);

// 8. Створити функцію яка заповнює масив рандомними числами
//    (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
// function random () {
//     for (let i = 0; i < 10; i++) {
//         let result = Math.round(Math.random()*100);
//         document.write(`<div>${result}</div>`);
//     }
// }
// random();

// 9. Створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент,
//    який характеризує кінцеве значення діапазону.
// function random (limit) {
//     for (let i = 0; i < 10; i++) {
//         let result = Math.round(Math.random()*limit);
//         document.write(`<div>${result}</div>`);
//     }
// }
// random(250);

// 10. Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
// function numbers (num1, num2, num3) {
//     let result = [num1, num2, num3];
//     for (let i = result.length - 1; i >= 0; i--) {
//         const numElement = result[i];
//         document.write(`<div>${numElement}</div>`);
//     }
// }
// numbers(25,1,548);
