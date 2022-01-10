// Всі функції повинні бути описані стрілочним типом!!!!

// 1. Створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// let minNumber = (a,b,c) => {
//     if (a < b && a < c) {
//         document.write(a);
//     } else if (b < a && b < c) {
//         document.write(b);
//     } else if (c < a && c < b) {
//         document.write(c);
//     }
// }
// minNumber(34,25,100);

// 2. Створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// let maxNumber = (a,b,c) => {
//     if (a > b && a > c) {document.write(a);}
//     else if (b > a && b > c) {document.write(b);}
//     else if (c > a && c > b) {document.write(c);}
// }
// maxNumber(3,125,88);

// 3. Створити функцію яка повертає найбільше число з масиву
// let arr = [24,56,135,68578,235,1000,25,87];
// let maxNumber = (array) => Math.max(...array);
//
// document.write(`${maxNumber(arr)}`);

// 4. Створити функцію яка повертає найменьше число з масиву
// let arr = [24,6356,155,78,35,100,2500,87];
// let maxNumber = (array) => Math.min(...array);
//
// document.write(`${maxNumber(arr)}`);

// 5. Створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// let sum = (a,b,c) => a + b + c;
// sum(1,2,10);

// 6. Створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// let array = (...array) => {
//     let middleSum = 0;
//     for (let i = 0; i < array.length; i++){
//         middleSum += array[i] / array.length;
//     }
//     return middleSum;
// }
// document.write(`${array(2,31,4,3)}`);
//
// або:
// let arr = [2,31,4,3];
// let array = (array) => {
//     let middleSum = 0;
//     for (let i = 0; i < array.length; i++){
//         middleSum += array[i] / array.length;
//     }
//     return middleSum;
// }
// document.write(`${array(arr)}`);

// 7. Створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше
//    (Math використовувати заборонено);
// let number = (...arr) => {
//     let min = arr[0];
//     let max = arr[0];
//     for (const element of arr) {
//         if (element > max) {max = element}
//         else if (element < min) {min = element}
//     }
//     console.log('max: ',max);
//     return min;
// }
// number(255,25,4000,52,8,7,8,581);

// 8. Створити функцію яка заповнює масив рандомними числами
//    (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
// let random = (array) => {
//     for (let i = 0; i < array; i++){
//         console.log(Math.round(Math.random()*100));
//     }
// }
// random(10);

// 9. Створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент,
//    який характеризує кінцеве значення діапазону.
// let random = (array,limit) => {
//     for (let i = 0; i < array; i++){
//         console.log(Math.round(Math.random()*limit));
//     }
// }
// random(10, 100);

// 10. Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
// let array = [1,2,3];
// let arrayReverse = () => {
//     for (let i = array.length - 1; i >= 0; i--) {
//         const element = array[i];
//         console.log(element);
//     }
// }
// arrayReverse(array);

