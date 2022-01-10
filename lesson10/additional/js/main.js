// 1. Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
//    При лівому кліку миші вивести в консоль інформацію про блок або елемент на який відбувся клік.
//    Інформація яку потрібно вивести: Назва тегу, список класів, список ід, розміри в форматі висота*ширина
//
// document.body.onclick = function (e) {
//     console.log(`${e.target.localName} ${e.target.className} ${e.target.id} ${e.target.clientHeight} ${e.target.clientWidth}`);
// }

// 2. Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
//    При лівому кліку миші  зробить popup (спливаючий блок) в якому буде вся інформація про блок.
//    Інформація яку потрібно вивести в popup: Назва тегу, список класів, список ід, розміри в форматі висота*ширина
//
// let info = document.querySelector('.info');
// let ul = document.createElement('ul');
// let li = document.createElement('li');
//
// document.body.onclick = function (e){
//     e.preventDefault();
//     ul.appendChild(li);
//     info.classList.toggle('info_popup')
//     info.classList.toggle('info')
//     li.innerText = `Тег: ${e.target.localName}\n Класс: ${e.target.className}
//                     Ід: ${e.target.id}\n Висота: ${e.target.clientHeight}\n Ширина: ${e.target.clientWidth}\n`;
// }
//
// info.appendChild(ul);

// 3. Взять массив пользователей. Создать три чекбокса. Каждый из них активирует фильтр для  массива. Фильтры могут
//    работать как вместе так и по отдельности. Данные выводить в документ
//      1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
//      2й - оставляет старше 29 лет включительно
//      3й - оставляет тех у кого город киев
//
// let usersWithAddress = [
//     {id:1,name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//     {id:2,name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
//     {id:3,name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
//     {id:4,name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
//     {id:5,name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
//     {id:6,name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
//     {id:7,name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
//     {id:8,name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
//     {id:9,name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
//     {id:10,name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//     {id:11,name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
// ];
//
// let input = document.querySelectorAll('input');
// let info1 = document.createElement('div');
// let info2 = document.createElement('div');
// let info3 = document.createElement('div');
//
// let input1 = usersWithAddress.filter(value => value.status === false);
// let input2 = usersWithAddress.filter(value => value.age >= 29);
// let input3 = usersWithAddress.filter(value => value.address.city === 'Kyiv');
//
// document.body.appendChild(info1);
// document.body.appendChild(info2);
// document.body.appendChild(info3);
//
//     input[0].onclick = () => {
//        if (input[0].checked){
//            info1.classList.remove('hidden');
//            let ul = document.createElement('ul');
//            info1.appendChild(ul);
//            for (const element of input1) {
//                for (const key in element) {
//                    if (typeof element[key] !== "object"){
//                        let li = document.createElement('li');
//                        li.innerText = `${key}: ${element[key]}`;
//                        ul.appendChild(li);
//                    } else if (typeof element[key] === "object") {
//                        for (const keyElement in element[key]) {
//                            let li = document.createElement('li');
//                            li.innerText = `${keyElement}: ${element[key][keyElement]}`;
//                            li.classList.add('item');
//                            ul.appendChild(li);
//                        }
//                    }
//
//                }
//            }
//        } else if (!input[0].checked){
//            info1.classList.toggle('hidden');
//            info1.innerHTML = null;
//        }
//     }
//
//     input[1].onclick = () => {
//         if (input[1].checked){
//             info2.classList.remove('hidden');
//             let ul = document.createElement('ul');
//             info2.appendChild(ul);
//             for (const element of input2) {
//                 for (const key in element) {
//                     if (typeof element[key] !== "object"){
//                         let li = document.createElement('li');
//                         li.innerText = `${key}: ${element[key]}`;
//                         ul.appendChild(li);
//                     } else if (typeof element[key] === "object") {
//                         for (const keyElement in element[key]) {
//                             let li = document.createElement('li');
//                             li.innerText = `${keyElement}: ${element[key][keyElement]}`;
//                             li.classList.add('item');
//                             ul.appendChild(li);
//                         }
//                     }
//
//                 }
//             }
//         } else if (!input[1].checked){
//             info2.classList.toggle('hidden');
//             info2.innerHTML = null;
//         }
//     }
//
//     input[2].onclick = () => {
//         if (input[2].checked){
//             info3.classList.remove('hidden');
//             let ul = document.createElement('ul');
//             info3.appendChild(ul);
//             for (const element of input3) {
//                 for (const key in element) {
//                     if (typeof element[key] !== "object"){
//                         let li = document.createElement('li');
//                         li.innerText = `${key}: ${element[key]}`;
//                         ul.appendChild(li);
//                     } else if (typeof element[key] === "object") {
//                         for (const keyElement in element[key]) {
//                             let li = document.createElement('li');
//                             li.innerText = `${keyElement}: ${element[key][keyElement]}`;
//                             li.classList.add('item');
//                             ul.appendChild(li);
//                         }
//                     }
//
//                 }
//             }
//         } else if (!input[1].checked){
//             info3.classList.toggle('hidden');
//             info3.innerHTML = null;
//         }
//     }
//
// //    Вибиває не розумію чому що є дублікат коду, хоча змінні різні (info1, info2, info3). А код однаковий тому що
// //    при кожому кліці повинний він бути для відпрацювання. Три різні змінні info для того щоб чекбокси могли працювати
// //    коли викл один з них.

// 5. Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.
//
// let i = 0;
//
// let img = document.querySelectorAll('img');
// let imgWidth = document.querySelector('img').offsetWidth;
//
// let carrousel = document.querySelector('.carrousel');
// carrousel.style.width = +(imgWidth * (img.length)) + 'px';
// let carrouselWidth = carrousel.offsetWidth;
//
// document.querySelector('.next').addEventListener('click',function (){
//     i += imgWidth;
//     if (i > carrouselWidth-imgWidth){
//         i = 0;
//     }
//     carrousel.style.left = -i + 'px';
// })
//
// document.querySelector('.prev').addEventListener('click',function (){
//     i -= imgWidth;
//     if (i < 0){
//         i = carrouselWidth-imgWidth;
//     }
//     carrousel.style.left = -i + 'px';
// })

// 6. Завдання важке для розуміння, але дуже легке в реалізації. Тут треба буде погуглити
//    *** При виділені сегменту тексту на сторінці він стає жирний/курсивний/або якось іншим способом змінює свій стан
// let p = document.querySelector('p');
// p.onmouseup = function (e) {
//     let str = window.getSelection();
//     let {startOffset, endOffset} = str.getRangeAt(0);
//
//     let textBefore = str.anchorNode.data.substring(0, startOffset);
//     let textAll = `<i>${window.getSelection().toString()}</i>`
//     let textAfter = str.anchorNode.data.substring(endOffset);
//
//    p.innerHTML = textBefore.concat(textAll).concat(textAfter);
// };



