// // 1.  Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// //     Створити пустий масив, наповнити його 10 об'єктами new User(....)
// function User (id, name, surname, email, phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }
// let users = [
//                 new User(1, 'vasya', 'pypkin', 'pupkin@gmail.com', +380983547882),
//                 new User(2, 'olya', 'tankovich', 'tankovich@gmail.com', +380983297875),
//                 new User(3, 'oleh', 'davidovich', 'davidovich@gmail.com', +380931247146),
//                 new User(4, 'oksana', 'kotova', 'kotova@gmail.com', +380964547540),
//                 new User(5, 'orest', 'lomachenko', 'lomachenko@gmail.com', +380973687711),
//                 new User(6, 'katia', 'malina', 'malina@gmail.com', +380983567003),
//                 new User(7, 'volodumyr', 'kozachok', 'kozacok@gmail.com', +380981247392),
//                 new User(8, 'kolya', 'limanovich', 'limanovich@gmail.com', +380983529416),
//                 new User(9, 'andriy', 'moroz', 'moroz@gmail.com', +380983547882),
//                 new User(10, 'alina', 'sorosenko', 'sorosenko@gmail.com', +380953547880)
//             ]
// console.log(users);
//
// // 2. Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
// let filterId = users.filter(value => value.id % 2 === 0);
// console.log(filterId);
//
// // 3. Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
// let sortId = users.sort((a, b) => a.id - b.id);  // якщо b.id - a.id то буде по спаданню id
// console.log(sortId);

// 4. Створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком
//    товарів) створити пустий масив, наповнити його 10 об'єктами Client
// class Client {
//     constructor(id, name, surname, email, phone, order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//     }
// }
// let array = [
//     new Client(1, 'vasya', 'pypkin', 'pupkin@gmail.com', +380983547882,['range rover', 'mazda', 'ford']),
//     new Client(2, 'olya', 'tankovich', 'tankovich@gmail.com', +380983297875, ['audi', 'opel', 'mercedes']),
//     new Client(3, 'oleh', 'davidovich', 'davidovich@gmail.com', +380931247146,['toyota', 'reno']),
//     new Client(4, 'oksana', 'kotova', 'kotova@gmail.com', +380964547540, ['aston martin']),
//     new Client(5, 'orest', 'lomachenko', 'lomachenko@gmail.com', +380973687711,['ford', 'opel', 'toyota', 'BMW']),
//     new Client(6, 'katia', 'malina', 'malina@gmail.com', +380983567003,['lexus', 'citroen']),
//     new Client(7, 'volodumyr', 'kozachok', 'kozacok@gmail.com', +380981247392,['skoda', 'suzuki', 'mercedes']),
//     new Client(8, 'kolya', 'limanovich', 'limanovich@gmail.com', +380983529416,['tesla']),
//     new Client(9, 'andriy', 'moroz', 'moroz@gmail.com', +380983547882,['reno', 'rolls-royce']),
//     new Client(10, 'alina', 'sorosenko', 'sorosenko@gmail.com', +380953547880,['mitsubishi','porshe', 'mini', 'BMW'])
// ];
// console.log(array);

// 5. Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів
//    в полі order по зростанню. (sort)
// array.sort((a, b) => a.order.length - b.order.length)
// console.log(array);