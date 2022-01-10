// 1. Знайти та вивести довижину настипних стрінгових значень
//    'hello world', 'lorem ipsum', 'javascript is cool'
// let str1 = 'hello world';
// let str2 = 'lorem ipsum';
// let str3 = 'javascript is cool';
// console.log(str1.length, str2.length, str3.length);

// 2. Перевести до великого регістру наступні стрінгові значення
//    'hello world', 'lorem ipsum', 'javascript is cool'
// let str1 = 'hello world';
// let str2 = 'lorem ipsum';
// let str3 = 'javascript is cool';
// console.log(str1.toUpperCase(), str2.toUpperCase(), str3.toUpperCase());

// 3. Перевести до нижнього регістру настипні стрінгові значення
//   'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
// let str1 = 'HELLO WORLD';
// let str2 = 'LOREM IPSUM';
// let str3 = 'JAVASCRIPT IS COOL';
// console.log(str1.toLowerCase(), str2.toLowerCase(), str3.toLowerCase());

// 4. Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
// let str = ' dirty string   ';
// console.log(str.trim());

// 5. Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//    let str = 'Каждый охотник желает знать';
//    let arr = stringToarray(str);
//    document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']
// let str = 'Каждый охотник желает знать';
// let stringToArray = () => str.split(' ');
// console.log(stringToArray(str));

// 6.  Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
//     document.writeln(delete_characters(str, 7)); // Каждый
// let str = 'Каждый охотник желает знать';
// delete_characters = (str,end) => {
//     let newString = str.slice(0,end);
//     console.log(newString);
// }
// delete_characters(str,7);

// 7.  Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами.
//     При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
//     document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'
// let str1 = "HTML JavaScript PHP";
// let insert_dash = (str) => {
//     let newString = str.replaceAll(' ', '-').toUpperCase();
//     console.log(newString);
// }
// insert_dash(str1)

// 8. Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка
//    з нижнього регістру у верхній.
// let str1 = 'каждый охотник желает знать';
// let upperCase = (str) => {
//     let newString = str.split(' ');
//     let k = newString[0].toUpperCase() + ' ' + newString.slice(1).join(' ');
//     console.log(k);
// }
// upperCase(str1);

// 9. Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.
// let str1 = 'каждый охотник желает знать';
// let capitalize = (str) => {
//     return str.split(' ').map(item =>
//         item.charAt(0).toUpperCase() + item.slice(1).toLowerCase()).join(' ');
// }
// console.log(capitalize(str1));
