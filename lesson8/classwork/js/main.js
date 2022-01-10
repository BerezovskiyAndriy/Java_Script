//    Напишіть код, який :
//
// a) змінює клас тексту елемнту з ід main_header на назву групи в якій ви вчитесь (mon-year)
// document.getElementById('main_header').classList.toggle('september-2021')

// b) робить шириниу елементу ul 400px
// let ul = document.getElementsByTagName('ul');
// for (const element of ul) {
//     element.style.width = '400px';
// }

// c) робить шириниу всіх елементів з класом linkList шириною 50%
// let widthClass = document.getElementsByClassName('linkList');
// for (const element of widthClass) {
//     element.style.width = '50%';
// }

// d) отримує текст який зберігається в елементі з класом listElement2
// let text = document.getElementsByClassName('listElement2');
// for (const element of text) {
//     console.log(element.innerText);
// }

// e) отримує всі елементи li та змінює ім колір фону на сірий
// let tegLi = document.getElementsByTagName('li');
// for (const element of tegLi) {
//     element.style.backgroundColor = 'silver';
// }

// f) отримує всі елементи 'a' та додає їм клас anchor
// let tegA = document.getElementsByTagName('a');
// for (const element of tegA) {
//     element.classList.toggle('anchor')
// }

// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
// let tegA = document.getElementsByTagName('a');
// for (const element of tegA) {
//     if (element.innerText === 'link3') {
//         element.style.fontSize = '40px'
//     }
// }

// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
// let changeTegA = document.getElementsByTagName('a');
// for (const element of changeTegA) {
//     element.classList.toggle(`${element.innerText}`);
// }

// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
// let changeClass = document.getElementsByClassName('sub-header');
// let result = prompt('Чи хочте ви змінити колір елементів класу sub-header ("так" або "ні")');
// for (const element of changeClass) {
//     if (result === 'так') {
//         let color = prompt('Введіть прописом (англ) назву кольору')
//         element.style.backgroundColor = `${color}`;
//     }
// }

// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
// let changeClass = document.getElementsByClassName('sub-header');
// let result = prompt('Чи хочте ви змінити колір тексту елементів класу sub-header ("так" або "ні")');
// for (const element of changeClass) {
//     if (result === 'так' &&  element.innerText === 'content 2 segment') {
//         let color = prompt('Введіть прописом (англ) назву кольору')
//         element.style.color = `${color}`;
//     }
// }

// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
// let changeClass = document.getElementsByClassName('content_1');
// let result = prompt('Чи хочте ви змінити текст елементів класу content_1 ("так" або "ні")');
// for (const element of changeClass) {
//     if (result === 'так') {
//         let newText = prompt('Введіть бажаний текст для заміни')
//         element.innerText = `${newText}`;
//     }
// }

// l) отримати елементи p та змінити їм padding на 20px
// let tegP = document.getElementsByTagName('p');
// for (const element of tegP) {
//     element.style.padding = '20px';
// }

// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)
// let changeClass = document.getElementsByClassName('text2');
// for (const element of changeClass) {
//     element.innerText = 'September-2021'
// }