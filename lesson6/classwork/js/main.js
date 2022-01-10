// 1. Дано список імен.
//         let n1 = 'Harry..Potter'
//         let n2 = 'Ron---Whisley'
//         let n3 = 'Hermione__Granger'
//         Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
//         let n1 = 'Harry Potter'
//         let n2 = 'Ron Whisley'
//         let n3 = 'Hermione Granger'
//     let n1 = 'Harry..Potter'
//     let n2 = 'Ron---Whisley'
//     let n3 = 'Hermione__Granger'
// let variableName = (name) => {
//     let x = name
//         .replaceAll('..', ' ')
//         .replaceAll('---', ' ')
//         .replaceAll('__', ' ');
//     console.log(x);
// }
// variableName(n2);

// 2. Створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
// let random = (size) => {
//     let array = [];
//     for (let i = 0; i < size; i++){
//         let result = Math.round(Math.random()*100);
//         array.push(result);
//         console.log(array[i]);
//     }
// }
// random(10);

// 3. Створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
//    Відсортувати його за допомоги sort
// let random = (size) => {
//     let array = [];
//     for (let i = 0; i < size; i++){
//         let result = Math.round(Math.random()*100);
//         array.push(result);
//         console.log(array.sort((a, b) => a - b)[i]);
//     }
// }
// random(10);

// 4. Створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
//    Відфільтрувати  його за допомоги filter, залишивши тільки парні числа
// let random = (size) => {
//     let array = [];
//     for (let i = 0; i < size; i++){
//         let result = Math.round(Math.random()*100);
//         array.push(result);
//         array.sort((a, b) => a - b);
//         console.log(array.filter(element => element % 2 === 0)[i]);
//     }
// }
// random(10);

// 5. Створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) .
//    За допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
// let random = (size) => {
//     let array = [];
//     for (let i = 0; i < size; i++){
//         let result = Math.round(Math.random()*100);
//         array.push(result);
//         let newArray = (array.map(() => array[i]).join(' '))
//         console.log(newArray);
//     }
// }
// random(10);

// 6. Створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
//    або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
//     sortNums('ascending') // [3,11,21]
//     sortNums('descending') // [21,11,3]
// let nums = [21,3,13];
// let sortNums = (numbers, direction) => {
//     if (direction === 'ascending') {
//         return numbers.sort((a, b) => a - b)
//     } else if (direction === 'descending' ) {
//         return numbers.sort((a, b) => b - a)
//     }
// }
// console.log(sortNums(nums, 'descending'));

// 7. Є масив
// -- відсортувати його за спаданням за monthDuration
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// console.log(coursesAndDurationArray.sort((a, b) => a.monthDuration - b.monthDuration));
//
// --відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// coursesAndDurationArray.filter(value => value.monthDuration > 5)
