// 1. Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
//    максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// function Car (model,maker,age,speed,capacity) {
//     this.model = model;
//     this.maker = maker;
//     this.age = age;
//     this.speed = speed;
//     this.capacity = capacity;
// }

// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// function Car (model,maker,age,speed,capacity) {
//     this.model = model;
//     this.maker = maker;
//     this.age = age;
//     this.speed = speed;
//     this.capacity = capacity;
//     this.drive = function () {
//         console.log(`їдемо зі швидкістю ${this.speed} на годину`);
//     }
// }

// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// function Car (model,maker,age,speed,capacity) {
//     this.model = model;
//     this.maker = maker;
//     this.age = age;
//     this.speed = speed;
//     this.capacity = capacity;
//     this.info = function () {
//         for (const element of this) {
//             for (const key in element) {
//                 if (typeof key !== 'function') {
//                     console.log(key + element);
//                 }
//             }
//         }
//     }
// }

// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// function Car (model,maker,age,speed,capacity) {
//     this.model = model;
//     this.maker = maker;
//     this.age = age;
//     this.speed = speed;
//     this.capacity = capacity;
//     this.increaseMaxSpeed = function (newspeed) {
//         this.speed = this.speed + newspeed;
//     }
// }

// -- changeYear (newValue) - змінює рік випуску на значення newValue
// function Car (model,maker,age,speed,capacity) {
//     this.model = model;
//     this.maker = maker;
//     this.age = age;
//     this.speed = speed;
//     this.capacity = capacity;
//     this.changeYear = function (newValue) {
//         this.age = newValue
//     }
// }

// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
// function Car (model,maker,age,speed,capacity) {
//     this.model = model;
//     this.maker = maker;
//     this.age = age;
//     this.speed = speed;
//     this.capacity = capacity;
//     this.addDriver = function (driver) {
//         this.driver = driver;
//     }
// }



// 2. (Те саме, тільки через клас)
// -- Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна
//    швидкість, об'єм двигуна. додати в об'єкт функції:
// class Car {
//     constructor(model, maker, age, speed, capacity) {
//         this.model = model;
//         this.maker = maker;
//         this.age = age;
//         this.speed = speed;
//         this.capacity = capacity;
//     }
// }

// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// class Car {
//     constructor(model, maker, age, speed, capacity) {
//         this.model = model;
//         this.maker = maker;
//         this.age = age;
//         this.speed = speed;
//         this.capacity = capacity;
//         function drive () {
//             console.log(`їдемо зі швидкістю ${this.speed} на годину`);
//         }
//     }
// }

// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// class Car {
//     constructor(model, maker, age, speed, capacity) {
//         this.model = model;
//         this.maker = maker;
//         this.age = age;
//         this.speed = speed;
//         this.capacity = capacity;
//         function info () {
//         for (const element of this) {
//             for (const key in element) {
//                 if (typeof key !== 'function') {
//                     console.log(key + element);
//             }
//         }
//     }
// }

// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// class Car {
//     constructor(model, maker, age, speed, capacity) {
//         this.model = model;
//         this.maker = maker;
//         this.age = age;
//         this.speed = speed;
//         this.capacity = capacity;
//         function increaseMaxSpeed (newspeed) {
//             this.speed = this.speed + newspeed;
//         }
//     }
// }

// -- changeYear (newValue) - змінює рік випуску на значення newValue
// class Car {
//     constructor(model, maker, age, speed, capacity) {
//         this.model = model;
//         this.maker = maker;
//         this.age = age;
//         this.speed = speed;
//         this.capacity = capacity;
//         function changeYear (newValue) {
//             this.age = newValue;
//         }
//     }
// }

// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
// class Car {
//     constructor(model, maker, age, speed, capacity) {
//         this.model = model;
//         this.maker = maker;
//         this.age = age;
//         this.speed = speed;
//         this.capacity = capacity;
//         function addDriver (driver) {
//             this.driver = driver;
//         }
//     }
// }



// 3. Cтворити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
//    Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//    За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//    Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
// class Cinderella {
//     constructor(name, age, footSize) {
//         this.name = name;
//         this.age = age;
//         this.footSize = footSize;
//     }
// }
// let allCinderellas = [
//     new Cinderella('Greta',21,34),
//     new Cinderella('Ross',25,36),
//     new Cinderella('Ofelia',24,35),
//     new Cinderella('Alisa',28,37),
//     new Cinderella('Bruk',26,33),
//     new Cinderella('Lola',30,38),
//     new Cinderella('Eni',22,32),
//     new Cinderella('Talia',29,39),
//     new Cinderella('Oksi',19,31),
//     new Cinderella('Folly',32,40)
// ];
//
// class Prince {
//     constructor(name, age, shoesFound) {
//         this.name = name;
//         this.age = age;
//         this.shoesFound = shoesFound;
//     }
// }
// let prinse1 = new Prince('Robin',42,35)
    //
    // for (const element of allCinderellas) {
    //     if (prinse1["shoesFound"] === element["footSize"]) {
    //         console.log(`Принцеса ${element["name"]} має бути з принцом ${prinse1["name"]}`);
    //     }
    // }
//
// let find = allCinderellas.find(value => value.footSize === prinse1.shoesFound)
// console.log(`Принцеса ${find.name} має бути з принцом ${prinse1.name}`);
