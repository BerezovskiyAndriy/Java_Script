// 1.  Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
//     Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів
//
// {
//     id: 1,
//     name: 'Leanne Graham',
//     username: 'Bret',
//     email: 'Sincere@april.biz',
//     address: {
//         street: 'Kulas Light',
//         suite: 'Apt. 556',
//         city: 'Gwenborough',
//         zipcode: '92998-3874',
//         geo: {
//            lat: '-37.3159',
//            lng: '81.1496'
//            }
// },
// {   phone: '1-770-736-8031 x56442',
//     website: 'hildegard.org',
//     company: {
//         name: 'Romaguera-Crona',
//         catchPhrase: 'Multi-layered client-server neural-net',
//         bs: 'harness real-time e-markets'
//     }
// }
//
// class Objects1 {
//     constructor(id, name, username, email, street, suite, city, zipcode, lat, lng) {
//         this.id = id;
//         this.name = name;
//         this.username = username;
//         this.email = email;
//         this.address =
//                  {
//                     street: street,
//                     suite: suite,
//                     city: city,
//                     zipcode: zipcode,
//                     geo:
//                         {
//                           lat: lat,
//                           lng: lng
//                         }
//                  }
//         }
//
// }
// class Objects2 {
//     constructor(phone, website, name, catchPhrase, bs) {
//         this.phone = phone;
//         this.website = website;
//         this.company =
//             {
//                 name: name,
//                 catchPhrase: catchPhrase,
//                 bs: bs
//             }
//     }
//
// }
//
// let array = [
//     new Objects1(1,'Leanne Graham','Bret','Sincere@april.biz','Kulas Light','Apt. 556',
//         'Gwenborough','92998-3874','-37.3159','81.1496'),
//     new Objects2('1-770-736-8031 x56442','hildegard.org','Romaguera-Crona',
//         'Multi-layered client-server neural-net','harness real-time e-markets')
// ]
// console.log(array);

// 2. Створити функцію конструктор / клас  який описує об'єкт тегу
// Поля :
// -назва тегу ()
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результуючого об'єкту
// {
//     titleOfTag: 'area',
//     action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//         {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//         {/*some props and values*/},
//         {/*...*/},
//         {/*...*/},
//          ]
// }
// function InfoTeg (titleOfTag, action, attrs) {
//     this.titleOfTag = titleOfTag;
//     this.action = action;
//     this.attrs = attrs;
// }
// function Attrs (titleOfAttr, actionOfAttr) {
//     this.titleOfAttr = titleOfAttr;
//     this.actionOfAttr = actionOfAttr;
// }
// let infoTeg1 = [
//     new InfoTeg('a','Тег предназначен для создания ссылок',
//         [new Attrs('href','Задает адрес документа, на который следует перейти'),
//         new Attrs('title','Добавляет всплывающую подсказку к тексту ссылки'),
//         new Attrs('name','Устанавливает имя якоря внутри документа')])
// ]
// console.log(infoTeg1);
//
// let infoTeg2 = [
//     new InfoTeg('div','Элемент предназначен для выделения фрагмента документа с целью изменения вида содержимого',
//         [new Attrs('title','Добавляет всплывающую подсказку к содержимому'),
//         new Attrs('align','Задает выравнивание содержимого тега')])
// ]
// console.log(infoTeg2);
//
// let infoTeg3 = [
//     new InfoTeg('h1','Тег представляет собой наиболее важный заголовок первого уровня',
//         [new Attrs('align','Определяет выравнивание заголовка'),
//         new Attrs('class','Определяет имя класса, которое позволяет связать тег со стилевым оформлением')])
// ]
// console.log(infoTeg3);
//
// let infoTeg4 = [
//     new InfoTeg('span','Тег предназначен для определения строчных элементов документа',
//         [new Attrs('dir','Задает направление и отображение текста — слева направо или справа налево'),
//         new Attrs('title','Описывает содержимое элемента в виде всплывающей подсказки'),
//         new Attrs('id','Указывает имя стилевого идентификатора')])
// ]
// console.log(infoTeg4);
//
// let infoTeg5 = [
//     new InfoTeg('input','Предназначен для создания текстовых полей, различных кнопок, переключателей и флажков',
//         [new Attrs('checked','Предварительно активированный переключатель или флажок'),
//         new Attrs('disabled','Блокирует доступ и изменение элемента'),
//         new Attrs('placeholder','Выводит подсказывающий текст')])
// ]
// console.log(infoTeg5);
//
// let infoTeg6 = [
//     new InfoTeg('form','Тег устанавливает форму на веб-странице, для обмена данными между пользователем и сервером',
//         [new Attrs('autocomplete','Включает автозаполнение полей формы'),
//         new Attrs('action','Адрес программы или документа, который обрабатывает данные формы'),
//         new Attrs('target','Имя окна или фрейма, куда обработчик будет загружать возвращаемый результат')])
// ]
// console.log(infoTeg6);
//
// let infoTeg7 = [
//     new InfoTeg('option','Тег определяет отдельные пункты списка, создаваемого с помощью контейнера select>',
//         [new Attrs('selected','Заранее устанавливает определенный пункт списка выделенным'),
//         new Attrs('disabled','Заблокировать для доступа элемент списка'),
//         new Attrs('label','Указание метки пункта списка')])
// ]
// console.log(infoTeg7);
//
// let infoTeg8 = [
//     new InfoTeg('select','Позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором',
//         [new Attrs('multiple','Позволяет одновременно выбирать сразу несколько элементов списка'),
//         new Attrs('required','Список обязателен для выбора перед отправкой формы'),
//         new Attrs('size','Количество отображаемых строк списка')])
// ]
// console.log(infoTeg8);