/* 
    addEventListener() - метод, позволяющий повесить(добавить) слушатель события.
    addEventListener() - функция, но т.к она находится внутри объекта, то называется методом.
    Он принимает два аргумента. 
    1й - тип события - "click", "submit", "focus"
    2й - функция(коллбэк функция - функция обратного вызова) 
        - действие, которое должно произойти в ответ на событие
    анонимная функция - функция без названия
*/

/*
    Методы:
    querySelector() - выборка элемента
    querySelectorAll() - выборка нескольких элементов
    addEventListener() - вешаем слушатель события

    Свойства:
    firstChild - выбор первого дочернего элемента
    lastChild - выбор последнего дочернего элемента
    childNodes[] - выбор всех дочерних элементов
    innerText - текстовое содержимое элемента

    let user = {
        name : "Arsen",
        fn : function() {
            console.log("hello")
        }
    }
    user.name - свойство
    user.fn() - метод
 */


// Выводим текс из тегов HTML с помощью innerText
// let first = document.querySelector(".item-1 p")
// console.log(first.innerText);

// let second = document.querySelector(".item-1 h4")
// console.log(second.innerText);

// let third = document.querySelector(".item-1 a")
// console.log(third.innerText)


// Если хотим выбрать один элемент, то используем метод querySelector()
//     Мы можем использовать такие же селекторы, как и в css

//     1. Селектор по тегу - document.querySelector("tagName") - без точки, решетки и тд
//     2. Селектор по классу - document.querySelector(".className") - с точкой
//     3. Селектор по идентификатору(id) - document.querySelector("#id") - с решеткой

/* 
    addEventListener() - метод, позволяющий повесить(добавить) слушатель события.
    addEventListener() - функция, но т.к она находится внутри объекта, то называется методом.
    Он принимает два аргумента. 
    1й - тип события - "click", "submit", "focus"
    2й - функция(коллбэк функция - функция обратного вызова) 
        - действие, которое должно произойти в ответ на событие
    анонимная функция - функция без названия
*/
// Задача. 
//  let text = document.querySelector(".text")
//  text.innerText = "Привет Мир 2"

// let title = document.querySelector(".item-1 h4")
// title.innerText = "Привет, Арсен"
// Задача.
let titles = document.querySelectorAll(".title")
console.log(titles[0]);
console.log(titles[0].innerText = "Привет Валерия");

// Меняем во всем массиве при  помощи цикла:
for (let i = 0; i < titles.length; i++) {
    titles[i].innerText = "Привет Валерия"
}

let texts = document.querySelectorAll(".item-1 p")
for (let i = 0; i < texts.length; i++) {
    texts[i].innerText = "Say Hello to each other"
}

let newTexts = document.querySelectorAll(".item-2 p")
for (let i = 0; i < newTexts.length; i++) {
    newTexts[i].addEventListener("click", function() {
        newTexts[i].innerText = "Hello MY FRIEND"
    })
}

