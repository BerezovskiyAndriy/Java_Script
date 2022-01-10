// 1.  Створити пустий масив та :

//     a. заповнити його 50 парними числами за допомоги циклу.
// let array = [];
// for (let i = 0; i < 50; i++)  {
//     array[i] = Math.floor(Math.random()*100)
//     for (const arrayElement of array) {
//         if (arrayElement % 2 === 0 && arrayElement !== 0){
//             document.write(`<div>${arrayElement}</div>`);
//         }
//     }
// }

//     b. заповнити його 50 непарними числами за допомоги циклу.
// let array = [];
// for (let i = 0; i < 50; i++)  {
//     array[i] = Math.floor(Math.random()*100)
//     for (const arrayElement of array) {
//         if (arrayElement % 2 !== 0 && arrayElement !== 0){
//             document.write(`<div>${arrayElement}</div>`);
//         }
//     }
// }

//     c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
// let array = [];
// for (let i = 0; i < 20; i++)  {
//     array[i] = Math.floor(Math.random()*100)
//     document.write(`<div>${array[i]}</div>`);
// }

//     d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)
// let array = [];
// for (let i = 0; i < 20; i++)  {
//      array[i] = Math.floor(Math.random() * (732 - 8 + 1)) + 8;
//      document.write(`<div>${array[i]}</div>`);
// }



// 2. Вивести за допомогою console.log кожен третій елемен

// let array = [];
// for (let i = 0; i < 100; i+=3)  {
//      array[i] = i;
//      console.log(array[i]);
// }



// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.

// let array = [];
// for (let i = 0; i < 100; i+=3)  {
//      array[i] = i;
//      if (array[i] % 2 === 0) {
//           console.log(array[i]);
//      }
// }



// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив

// let array = [];
// for (let i = 0; i < 100; i+=3)  {
//      array[i] = i;
//      if (array[i] % 2 === 0) {
//           let arrayNew = array[i];
//           console.log(arrayNew);
//      }
// }



// 5. Вивести кожен елемент масиву, сусід справа якого є парним
// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56

// let array = [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ];
// for (let i = 0; i < array.length; i++) {
//   if (array[i+1] % 2 === 0) {
//       document.write(`<div>${array[i]}</div>`);
//   }
// }



// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати
//    середній чек.

// let numberArray = [100,250,50,168,120,345,188];
// let sum = 0
//     for (let i = 0; i < numberArray.length; i++) {
//         sum += numberArray[i];
//     }
//     document.write(`${(sum/numberArray.length).toFixed(2)}`);



// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.

// let array = [23,45,3,47,124];
// let newArray =[];
// for (const arrayElement of array) {
//     newArray.push(arrayElement*5);
// }



// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому,
//    і якщо елемент є числом - додати його в інший масив.

// let array = [35, 'hello', true, 4, 'car', false, 21, 42];
// let newArray = [];
//     for (const arrayElement of array) {
//         if (typeof arrayElement === "number") {
//             newArray.push(arrayElement);
//         }
//     }



// 9. Дано 2 масиви з рівною кількістю об'єктів.
//    З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//    Записати цей об'єкт в новий масив
//    Example:
//             let usersWithCities = [
//                 {
//                     id: 1, // <===
//                     name: 'vasya',
//                     age: 31,
//                     status: false,
//                     address: {
//                         user_id: 1, // <===
//                         country: 'Ukraine',
//                         city: 'Ternopil'
//                     }
//                 },
//                 // TO BE CONTINUED .....
//             ]

//     let usersWithId = [
//         {id: 1, name: 'vasya', age: 31, status: false},
//         {id: 2, name: 'petya', age: 30, status: true},
//         {id: 3, name: 'kolya', age: 29, status: true},
//         {id: 4, name: 'olya', age: 28, status: false}
//     ];
//
//     let citiesWithId = [
//         {user_id: 3, country: 'USA', city: 'Portland'},
//         {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//         {user_id: 2, country: 'Poland', city: 'Krakow'},
//         {user_id: 4, country: 'USA', city: 'Miami'}
//     ];
//
// let usersWithCities = Object.assign(usersWithId);
// for (const usersWithCityElement of usersWithCities) {
//     for (const citiesWithIdElement of citiesWithId) {
//         if (usersWithCityElement.id === citiesWithIdElement.user_id) {
//             usersWithCityElement.address = citiesWithIdElement;
//         }
//     }
// }
//
// console.log(usersWithCities);



// 10. Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.

// let array = [1, 24, 2, 33, 45, 10, 228, 47, 1001, 2020];
// for (let i = 0; i < array.length; i++) {
//     if (array[i] % 2 === 0) {
//         document.write(`<div>${array[i]}</div>`);
//     }
// }



// 11. Взяти масив з 10 чисел або створити його. Створити 2й порожній масив.
//     За допомогою будь-якого циклу скопіювати значення одного масиву в інший.

// let array = [24, 4, 457, 1899, 0, 20, 79, 30, 1, 125];
// let newArray = [];
// for (const arrayElement of array) {
//     newArray.push(arrayElement);
// }



// 12. Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.

// let array = [ 'a', 'b', 'c'];
// for (let i = 0; i < array.length; i++) {
//     document.write(array[i]);
// }

let array = [ 'a', 'b', 'c'];
let str = '';
for (let i = 0; i < array.length; i++) {
    str = array[i];
    console.log(str);
}



// 13. Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.

// let array = [ 'a', 'b', 'c'];
// let i = 0;
// while (i < array.length) {
//     document.write(array[i]);
//     i++;
// }



// 14. Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.

// let array = [ 'a', 'b', 'c'];
// for (const element of array) {
//     document.write(element);
// }















