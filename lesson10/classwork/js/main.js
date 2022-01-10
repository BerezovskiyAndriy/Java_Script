// 1. Створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль
//    інформація з цих 2х форм. Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
//    Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
//
// let form1Element = document.forms['form1'];
// let form2Element = document.forms['form2'];
// let btn = document.createElement('button');
//
// btn.innerText = 'Інформація';
// btn.onclick = () => {
//     let form1 = `${form1Element.login.value} ${form1Element.password.value}`;
//     let form2 = `${form2Element.login.value} ${form2Element.password.value}`;
//     console.log(form1,form2);
// }
// document.body.appendChild(btn);

// 2. Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//    При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
//    (Додаткова частина для завдання)
//
// let btn = document.createElement('button');
// let table = document.createElement('table');
// let forms = document.forms['form'];
//
// btn.onclick = () => {
//     let rows = +forms.rows.value;
//     let columns = +forms.columns.value;
//     let content = forms.content.value;
//
//    for (let y = 0; y < rows; y++){
//        let tr = document.createElement('tr');
//            for (let x = 0; x < columns; x++){
//                let td = document.createElement('td');
//                td.innerText = content;
//                tr.appendChild(td);
//            }
//            table.appendChild(tr);
//    }
// }
// btn.innerText = 'Інформація';
// document.body.append(btn,table);

// 3.  Сворити масив не цензцрних слів. Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку
//
// let words = ['Fuck', 'Bitch', 'Cunt', 'Pussy'];
// let btn = document.querySelector('button');
// let input = document.querySelector('input');
//
//       btn.onclick = () => {
//           for (const word of words) {
//               if (input.value === word || input.value === word.toLowerCase()) {
//                   alert('Нецензурне слово, допобачення!')
//               }
//           }
//       }

// 4. Сворити масив не цензцрних слів. Сворити інпут текстового типу.
//    Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//    Кинути алерт з попередженням у випадку якщо містить.
//    Перевірку робити при натисканні на кнопку
//
// let words = ['Fuck', 'Bitch', 'Cunt', 'Pussy'];
// let btn = document.querySelector('button');
//
// btn.onclick = () => {
//     let input = document.querySelector('input').value;
//         for (const word of words) {
//             if (input.includes(word) || input.includes(word.toLowerCase())) {
//                 alert('Нецензурне слово, допобачення!')
//             }
//         }
//     }
//
//
// Переробив  на напевно як зразу задумувалось рішення через includes. Перевага над кодом нище який я зробив спершу
// (код всерівно робочий і працює) я в вважаю в тому що не потрібно робити розбивку записаних слів в input.value
// через split і найголовніше якщо зроблено через інклюдс то воно буде відпрацьовувати навіть якщо нецензурне слово
// є тільки сегментом слова, а в моєму першому варіанті потрібно що б слово було цілісним.
//   Example:
//      При includes: dogFuck, Fuckdog - відпрацює хоч і злитно, бо в слові є сегмент поганого слова з масиву
//      Мій перший варіант: dogFuck, Fuckdog - не спрацює, спрацює тільки якщо буде окремо - dog Fuck, Fuck dog
//
//
// let words = ['Fuck', 'Bitch', 'Cunt', 'Pussy'];
// let btn = document.querySelector('button');
// let input = document.querySelector('input');
//
// btn.onclick = () => {
//     let string = (input.value).split(' ')
//     for (const element of string) {
//         for (const word of words) {
//             if (element === word || element === word.toLowerCase() ) {
//                 alert('Нецензурне слово, допобачення!')
//             }
//         }
//     }
// }



