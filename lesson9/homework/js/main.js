// 1. Все робити за допомоги js.
// //
// // - створити блок
// let block = document.createElement('div');
//
// // - додати йому класи wrap, collapse, alpha, beta)
// block.classList.add('wrap','collapse','alpha','beta')
//
// // - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// block.style.backgroundColor = 'red';
// block.style.color = 'blue';
// block.style.fontSize = '24px';
//
// // - додати цей блок в body.
// document.body.appendChild(block);
//
// // - клонувати його повністю, та додати клон в body.
// let cloneBlock = block.cloneNode(true);
// document.body.appendChild(cloneBlock);

// 2. Є масив:
//    ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li
// та додає його до блоку .menu. Завдання робити через цикли.
// let array = ['Main','Products','About us','Contacts'];
// for (const element of array) {
//     let li = document.createElement('li');
//     let menu = document.getElementsByClassName('menu')[0];
//     menu.appendChild(li).innerText = element;
// }

// 3. Є масив. Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// for (const element of coursesAndDurationArray) {
//     let block = document.createElement('div');
//     let div = document.body.appendChild(block);
//     div.innerText = `${element.title} ${element.monthDuration}`
// }

// 4. Є масив. За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,
// в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
// Завдання робити через цикли.
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// for (const element of coursesAndDurationArray) {
//     let div = document.createElement('div');
//     div.classList.add('item');
//     document.body.appendChild(div);
//     let h1 = document.createElement('h1');
//     h1.classList.add('heading');
//     let p = document.createElement('p');
//     p.classList.add('description');
//     let tegDiv = document.getElementsByTagName('div');
//     for (const item of tegDiv) {
//         item.appendChild(h1).innerText = element.title;
//         item.appendChild(p).innerText = element.monthDuration;
//     }
// }
