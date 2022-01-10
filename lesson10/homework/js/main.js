// 1. Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку
//    исчезал элемент с id="text".
//
// let click = document.getElementById('text');
// let btn = document.getElementById('btn');
// btn.onclick = () => {
//     click.style.display = 'none';
// }

// 2. Создайте кнопку, при клике на которую, она будет скрывать сама себя.
// let button = document.createElement('button');
// button.innerText = 'click me';
// document.body.appendChild(button);
//
// button.onclick = function () {
//     button.classList.add('hidden');
// }

// 3. Створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію
//    з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
// let btn = document.getElementById('btn');
// let age = document.getElementById('age');
//
// btn.onclick = function () {
//     if (age.value <= 0 || age.value > 120){
//         alert(`Ваш вік ${age.value} є недопустимим`)
//     } else if (age.value < 18) {
//         alert(`Ваш вік ${age.value} є менше 18, тому ми не можемо вам показати контент`)
//     } else if (age.value > 18){
//         alert(`Ваш вік ${age.value} є більшим 18, приємного перегляду`)
//     }
// }

// 4. Создайте меню, которое раскрывается/сворачивается при клике
// let btn = document.querySelector('.wrap');
// let ul = document.querySelector('.list');
// btn.onclick = function () {
//     ul.classList.toggle('hidden');
// }

// 5. Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//    Вывести список комментариев в документ, каждый в своем блоке.
//    Добавьте каждому комментарию по кнопке для сворачивания его body.
// let comments = [
//     {title: 'andriy', body: 'Я хочу бути програмістом(( Порадьте як можна вивчити ефективно?'},
//     {title: 'olia', body: 'Я знаю тільки один метод, провірений особисто мною))'},
//     {title:'andriy', body: 'А який? А то я весь інтернет облазив, а толкового нічого не знайшов'},
//     {title: 'olia', body: 'Okten school !!! Там тобі Сергій все покаже і розкаже, а ментори провірять все і' +
//             ' підскажуть'},
//     {title: 'roman', body: 'О і я там учився)) Та okten це те що тобі потрібно, ну і звичайно зусилля в навчанні'},
//     {title: 'andriy', body: 'Дякую народ! Буду вибирати пакет і іти вчитись) Ураааааа!))'}
// ]
//
// let wrap = document.createElement('div');
// document.body.appendChild(wrap);
//
// for (const element of comments) {
//     let div = document.createElement('div');
//     let h3 = document.createElement('h3');
//     let p = document.createElement('p');
//     let btn = document.createElement('button');
//     let hr = document.createElement('hr');
//
//     h3.innerText = element.title;
//     p.innerHTML = element.body
//     btn.classList.add('toggle');
//     btn.innerText = 'Інформація';
//
//     btn.onclick = () => {
//         p.classList.toggle('hidden');
//     }
//
//     div.append(h3, p, btn);
//     wrap.append(div, hr);
// }






























