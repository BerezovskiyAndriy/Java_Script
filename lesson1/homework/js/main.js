// 1. Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16,
//    true,false.
//    Вивести кожну змінну за допомогою: console.log , alert, document.write
// let text1 = 'hello';
// let text2 = 'owu';
// let text3 = 'com';
// let text4 = 'ua';
//
// let num1 = 1;
// let num2 = 10;
// let num3 = -999;
// let num4 = 123;
// let num5 = 3.14;
// let num6 = 2.7;
// let num7 = 16;
//
// let truth1 = true;
// let truth2 = false;
//
// console.log(text1);
// console.log(text2);
// console.log(text3);
// console.log(text4);
// console.log(num1);
// console.log(num2);
// console.log(num3);
// console.log(num4);
// console.log(num5);
// console.log(num6);
// console.log(num7);
// console.log(truth1);
// console.log(truth2);
//
// document.write('<span>hello </span>');
// document.write('<span>owu </span>');
// document.write('<span>com </span>');
// document.write('<span>ua</span>');
// document.write('<h2>1</h2>');
// document.write('<h2>10</h2>');
// document.write('<h2>-999</h2>');
// document.write('<h2>123</h2>');
// document.write('<h2>3.14</h2>');
// document.write('<h2>2.7</h2>');
// document.write('<h2>16</h2>');
// document.write('<span>true </span>');
// document.write('<span>false</span>');
//
// alert(text1);
// alert(text2);
// alert(text3);
// alert(text4);
// alert(num1);
// alert(num2);
// alert(num3);
// alert(num4);
// alert(num5);
// alert(num6);
// alert(num7);
// alert(truth1);
// alert(truth2);



// 2. Переприсвоїти кожній змінній з завдання значення на довільне.
//    Вивести кожну змінну за допомогою: console.log , alert, document.write
// text1 = 'Я буду хорошим js програмістом';
// text2 = 'Range Rover';
// text3 = 'В чем смысл жызни?';
// text4 = '42';
//
// num1 = 65;
// num2 = 41;
// num3 = -19;
// num4 = 14463;
// num5 = 1.25;
// num6 = 8.53;
// num7 = 3;
//
// truth1 = false;
// truth2 = true;
// //
// console.log(text1);
// console.log(text2);
// console.log(text3);
// console.log(text4);
// console.log(num1);
// console.log(num2);
// console.log(num3);
// console.log(num4);
// console.log(num5);
// console.log(num6);
// console.log(num7);
// console.log(truth1);
// console.log(truth2);
// //
// document.write(`<h2>${text1}</h2>`);
// document.write(`<h2>${text2}</h2>`);
// document.write(`<span>${text3} </span>`);
// document.write(`<span>- ${text4}</span>`);
// document.write(`<h2>${num1}</h2>`);
// document.write(`<h2>${num2}</h2>`);
// document.write(`<h2>${num3}</h2>`);
// document.write(`<h2>${num4}</h2>`);
// document.write(`<h2>${num5}</h2>`);
// document.write(`<h2>${num6}</h2>`);
// document.write(`<h2>${num7}</h2>`);
// document.write(`<span>${truth1} </span>`);
// document.write(`<span>${truth2}</span>`);
//
// alert(text1);
// alert(text2);
// alert(text3);
// alert(text4);
// alert(num1);
// alert(num2);
// alert(num3);
// alert(num4);
// alert(num5);
// alert(num6);
// alert(num7);
// alert(truth1);
// alert(truth2);



// 3. Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person.
//    (Не об'єкт)
// let firstName = 'Березовський ';
// let middleName = 'Андрій ';
// let lastName = 'Іванович';
// let person = firstName + middleName + lastName;


// 4. За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.
//    Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".
// let firstName = prompt('Вкажіть Ваше ім`я');
// let lastName = prompt('Вкажіть як Ви по-батькові');
// let age = prompt('Вкажіть Ваш вік');
// alert(`Тебе звати ${firstName} ${lastName}. Тобі ${age} років.`)



// 5. За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//    let a = 100; let b = '100'; let c = true;
// let a = 100; //number
// let b = '100'; //string
// let c = true; //boolean
// console.log(typeof a);
// console.log(typeof b);
// console.log(typeof c);


// 6. Визначити відповідний оператор в виразах що б вийшов відповідний результат.
//    В однакових виразах не використовувати однакові оператори!!!
//    5 ? 6 -> true
//    5 ? 6 -> false
//    5 ? 6 -> false
//    5 ? 6 -> false
//    10 ? 10 -> true
//    10 ? 10 -> true
//    10 ? 10 -> false
//    10 ? 10 -> false
//    10 ? 10 -> false
//    123 ? '123' -> false
//    123 ? '123' -> true
// console.log(5 < 6);
// console.log(5 > 6);
// console.log(5 === 6);
// console.log(5 >= 6);
//
// console.log(10 === 10);
// console.log(10 <= 10);
// console.log(10 !== 10);
// console.log(10 < 10);
// console.log(10 > 10);
//
// console.log(123 < 123);
// console.log(123 <= 123);



// 7. Подумайте Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?
// let str = "20";
// let a = 5;
//
// document.write(str + a + "<br/>");
// // В цьому випадку браузер приймає перемінні коду джс як дві строки, перетворюючи другу перемінну з типу number в
// // string,і відбувається не конкантенація а злиття. Щоб відбулося додавання треба кокретно задати тип першій змінній
// // на number, наприклад: document.write(+str + a + "<br/>"); де знаком '+' перед змінною str ми задали їй тип number.
// // Ну і в кінці кожного з прикладів перенос строки у вигляді тега <br/>
//
// document.write(str - a + "<br/>");
// document.write(str * "2" + "<br/>");
// document.write(str / 2 + "<br/>");
// // В цих трьох випадках також відбувається перетворення типу змінних в один тип, а саме в number. На мою думку це
// // перетворення відбувається іменно в number двох змінних, тому що не можна строки відняти, помножити чи поділити
// // тому інпретатор розумує зразу що це є математичні дії і враховуючи що одна з змінних число автоматично приводить
// // і другу в число (str, a - number)