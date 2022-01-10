// 1. Створити форму з інпутами для name та age. При відправці форми записати об'єкт в localstorage
//
// let name = document.getElementById('name');
// let age = document.getElementById('age');
// let btn = document.getElementById('btn');
// let info = 'info';
//
// let object = (userName, userAge) => {
//     let user = {
//         name: userName,
//         age: userAge
//     };
//     localStorage.setItem(info, JSON.stringify(user));
// };
//
// btn.onclick = () => {
//     object(name.value, age.value);
// }

// 2. Створити форму з інпутами для model,type та volume автівки. Gри відпарвці форми об'єкти зберігаються в масиві
//    в локальному сховищі.
//
// let model = document.getElementById('model');
// let type = document.getElementById('type');
// let volume = document.getElementById('volume');
// let btn = document.getElementById('btn');
// let item = 'car';
//
// let car = (modelCar, typeCar, volumeCar) => {
//     let newArr = JSON.parse(localStorage.getItem(item)) || [];
//     newArr.push({modelCar, typeCar, volumeCar})
//     localStorage.setItem(item, JSON.stringify(newArr));
// };
//
// btn.onclick = () => {
//     car(model.value, type.value, volume.value);
// }



