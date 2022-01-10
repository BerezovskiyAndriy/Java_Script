// 1. Імітуємо наповнення інтернет магазину товарами :
//    Створити форму з наступними полями :
//    - назва товару
//    - кількість товару
//    - ціна товару
//    - картинка товару (посилання з інтернету)
// Зберігати товари в масив в локалсорадж. При збережені товару з форми, action не повинно відбуватись (preventDefault)
// створити елемент <a href='list.html'> На сторінку товарів</a>, та list.html, при переході на який відобразити на сторінці всі товари.
// На сторінці  list.html побудувати кнопку яка видаляє всі товари з корзини та локалстораджа.
// До кожного товару додати кнопку, при кліку на яку з лс видаляється конкретний обраний  товар

const name = document.getElementById('name');
const quantity = document.getElementById('quantity');
const price = document.getElementById('price');
const picture = document.getElementById('picture');
const btn = document.getElementById('btn');
let element = 'favorites';

let product = (name,quantity,price,picture) => {
    let favorite = JSON.parse(localStorage.getItem(element)) || [];
    favorite.push({name,quantity,price,picture});
    localStorage.setItem(element,JSON.stringify(favorite));
}

btn.onclick = (e) => {
    product(name.value, quantity.value, price.value, picture.value);
}

















// const element = 'favorites';
// let product = (nameProduct, quantityProduct, priceProduct, pictureProduct) => {
//     let favorite = JSON.parse(localStorage.getItem(element)) || [];
//     favorite.push({nameProduct, quantityProduct, priceProduct, pictureProduct});
//     localStorage.setItem(element, JSON.stringify(favorite));
// }
//
// btn.onclick = (e) => {
//     e.preventDefault();
//     product(name.value, quantity.value, price.value, picture.value);
// }



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