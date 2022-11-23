/* setAttribute("", "") - добавляет атрибут тегу
   getAttribute("") - получает значение атрибут у тега
*/
// // Задача = на получение атрибута.
// let item = document.querySelector("div")
// let itemClass = item.getAttribute("class")
// let itemClass1 = document.querySelector("div").getAttribute("class")
// console.log(itemClass);

// // Задача. 
// let image = document.querySelector("a").getAttribute("href")
// console.log(image)

// // Задача.
// let text = document.querySelector("p")
// let newText = text.getAttribute("id")
// console.log(newText);

// Задача = на добавление атрибута и значение(добавляем картинку с помощьб setAttribute)
// let item = document.querySelector("div")
// item.setAttribute("id", "item-1")

// let image = document.querySelector("img")
// let button = document.querySelector("button")

// // image.setAttribute("src", "./images/image1.jpg")
// function addAttr() {
//     image.setAttribute("src", "./images/image2.jpg")
// }
// button.addEventListener("click", addAttr)

/*
    addEventListener("eventType", callback)

    addAttr() - callback функция обратного вызова - вызов передаем в другую функцию/метод, круглые скобки не ставим
    инициатором вызова cb функции является другая функция
    коллбеки при вызове не нуждаются в добавлении () 
*/
// __________________________
// Задача. Выводим все значения атрибута src каждой картинки внутри nodeList image.

let images = document.querySelectorAll("img")

for (let i = 0; i < images.length; i++) {
    images[i].getAttribute("src")
}
console.log(images);
for (let i = 0; i < images.length; i++) {
    images[i].setAttribute("src",  `/images/image${i+1}.jpg`)
   
}
