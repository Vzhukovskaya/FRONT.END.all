// let item = document.querySelector("main")

// console.log(item.innerText);
// console.log(item.innerHTML);

// добавляем тег уже к существующему.
// item.innerHTML = item.innerHTML + "<h2>Hello</h2>"
// item.innerHTML += "<h2>Hello</h2>"


// Добавляем елемент в переменную.(+=)
// let greeting = "Hello" 
// greeting += "Arsen"


 let main = document.querySelector("main")
// let myName = "Valeriia"
// main.innerHTML += `<p>${myName}</p>`

// добавить 5 тегов p "Hello"
// for (let i = 0; i < 5; i++) {
//     main.innerHTML += "<p>Hello</p>";
// }

// Задача. Добавить внутрь 5 тегов p со значениями Hello от 1 до 5, не удаляя содержимое main.
// <p>Hello 1</p>, <p>Hello 2</p>

// for (let i= 1; i <= 5; i++) {
//     main.innerHTML += `<p>Hello ${i}/p>`;
// }

// Задача. Добавить внутрь main тег а, у которого ссылкой будет link, а названием link_name
// <a href="https://google.com">Google</a>
// let link = "http://google.com"
// let link_name = "Google"

// main.innerHTML += `<a href="${link}">${link_name}</a>`

// let laptop = {
//     mark: "Acer",
//     model: "G444M",
//     price: "15000"
// }
// В main добавить разметку:
// main.innerHTML += `
// <div>
//     <h1>${laptop.mark}</h1>
//     <p>${laptop.model}</p>
//     <p>${laptop.price}</p>
// </div>`

// Задача. Есть обьект - нужно отобразить разметку:
// let book = {
//     name: "Капитанская дочь",
//     author: "Пушкин А.С",
//     count: 700
// }
// main.innerHTML += `
//  <div>
//     <h1>${book.name}</h1>
//     <p>${book.author}</p>
//     <p>${book.count}</p>
//  </div>`

// Задача. Есть массив обьектов, отобразить разметку для каждого при помощи цикла.
// let laptops = [
//     {
//         mark: "Acer",
//         model: "G444M",
//         price: 18000
//     },
//     {
//         mark: "Asus",
//         model: "706M",
//         price: 25000
//     },
//     {
//         mark: "HP",
//         model: "G705",
//         price: 50000
//     }
// ]
// for (let i = 0; i < laptops.length; i++) {
//     main.innerHTML += `
//  <div class="laptop">
//     <h1>${laptops[i].mark}</h1>
//     <p class="notebook-model">${laptops[i].model}</p>
//     <p class="notebook-price">${laptops[i].price}</p>
//  </div>
//  `
// }

// Если хотим выполнить одно и тоже действие для каждого елемента массива, то используем метод .forEach
// (выполняет коллбэк функцию для каждого елемнта в массиве, внутрь коллбэка получаем текущий елемент)
// laptops.forEach(function(laptop) {
//     main.innerHTML +=`
//  <div class="laptop">
//     <h1>${laptop.mark}</h1>
//     <p class="notebook-model">${laptop.model}</p>
//     <p class="notebook-price">${laptop.price}</p>
//  </div>
//  `
// })
// Задача. Есть массив - каждому элементу добавить 2.
// let arr = [2, 4, 6, 8, 10]
// arr.forEach(function(num) {
//     console.log(num + 2)
//     });
//     console.log(arr);

// Задача. Есть массив let names = ["Arsen", "Paul", "Lyudmila", "Grisha"]
// добавить Hello + имя.
// let names = ["Arsen", "Paul", "Lyudmila", "Grisha"]
// names.forEach(function(name) {
//     console.log("Hello " + name)
// })
// ___________________
// ДЗ
let cars = [ 
    { 
        mark : "Mercedes-Benz", 
        model : "S600", 
        year : "2005", 
        price : 50000 
    },  
    { 
        mark : "BMW", 
        model : "M5", 
        year : "2010", 
        price : 30000 
    }, 
    { 
        mark : "VW", 
        model : "Golf5", 
        year : "2015", 
        price : 25000 
    }, 
    { 
        mark : "Toyota", 
        model : "Camry", 
        year : "2015", 
        price : 25000 
    } 
 ]  
cars.forEach(function(car) {
    main.innerHTML += `
<div class="car">   
    <h1 class="title">${car.mark} - ${car.model}</h1> 
    <p class="car-year">${car.year}</p> 
    <p class="car-price">${car.price}</p> 
 </div>

 `})
 