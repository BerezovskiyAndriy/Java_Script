// 1.  Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
//     document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]
// let cutString = (str, n) => {
//     const array = [];
//     while (str.length) {
//         array.push(str.substr(0, n))
//         str = str.slice(n)
//     }
//     console.log(array)
//     return array
// };
// cutString('наслаждение', 3)

// 2. Створити функцію-валідатор для адрес електронної пошти. Перевірка повинна включати в себе :
//    данні до знака равлика(@), наявність равлика, крапку яка знаходиться не меньше ніж на 2 символ далі після равлика,
//    функція не чутлива до регістру (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)
//    Протестувати на значеннях
// someemail@gmail.com
// someeMAIL@gmail.com
// someeMAIL@i.ua
// some.email@gmail.com
// let correctEmail = (str) => {
//     let firstPartEmail = str.slice(0,str.indexOf('@'));
//     let lastPartEmail = str.slice(str.indexOf('@'),str.length)
//     let partToPoint = lastPartEmail.indexOf('.')
//
//     if (firstPartEmail.length > 2  && str.includes('@') && partToPoint >= 3) {
//         console.log('good Email');
//     } else  {
//         console.log('bad Email');
//     }
// }
// correctEmail('someeMAIL@i.ua');
//
// 3.  Є масив, відсортувати його в спадаючому порядку за кількістю елементів в полі modules
// let coursesArray = [
//     {
//         title: 'JavaScript Complex',
//         monthDuration: 5,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//     },
//     {
//         title: 'Java Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'java core',
//             'java advanced']
//     },
//     {
//         title: 'Python Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'python core',
//             'python advanced']
//     },
//     {
//         title: 'QA Complex',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//     },
//     {
//         title: 'FullStack',
//         monthDuration: 7,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'node.js',
//             'python',
//             'java']
//     },
//     {
//         title: 'Frontend',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//     }
// ];
// //
// let sortArray = coursesArray.sort((a, b) => b.modules.length - a.modules.length);

// 4. Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.
//    let symb = "о", str = "Астрономия это наука о небесных объектах";
//    document.writeln(count(str, symb)) // 5
// let str = "Астрономия это наука о небесных объектах";
// let count = (str, symb) => {
//     let stringSearch = [];
//     str.split('');
//     for (const element of str) {
//         if (element === symb) {
//             stringSearch.push(element);
//             return stringSearch.length;
//         }
//     }
// }
// count(str,'о');

// 5. Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
//     let str = "Сила тяжести приложена к центру масс тела";
//     document.writeln(cutString(str, 5)) // 'Сила тяжести приложена к центру'
// let str = "Сила тяжести приложена к центру масс тела";
// let cutString = (str, n) => {
//     return  str.split(' ').slice(0,n).join(' ')
// }
// console.log(cutString(str, 5));




