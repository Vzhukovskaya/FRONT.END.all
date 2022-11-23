// console.log(document.body);
// console.log(document.body.firstChild)
// console.log(document.body.lastChild);
// 
// обращение по тегу
// console.log(document.querySelector("button"))
// // по классу
// console.log(document.querySelector(".item"))
// // по ID
// console.log(document.querySelector("#blue"))
// // вторая кнопка
// console.log(document.querySelector("#red"));
// console.log(document.querySelectorAll(".item"));

// меняем цвета с помоцью .style - scc
// let buttonRed = document.querySelector("#red")
// buttonRed.style.backgroundColor = "salmon"

// document.body.style.backgroundColor = "black"

// при клике меняем цвет кнопки при помощи функции/метода:
// ___________________________
// 1.
// let buttonRed = document.querySelector("#red")
// // console.log(buttonRed.innerText)

//  buttonRed.addEventListener("click", function() {
//     document.body.style.backgroundColor = "red"
//     document.body.style.backgroundImage = "none"
//  })

// let buttonBlue = document.querySelector("#blue")
// buttonBlue.addEventListener("click", function() {
//     document.body.style.backgroundColor = "blue"
//     document.body.style.backgroundImage = "none"
// })
// let buttonImg = document.querySelector("#img")
// buttonImg.addEventListener("click", function () {
//     document.body.style.backgroundImage = "url(./img1.jpg)"
//     document.body.style.backgroundColor = "none"
// })
// let newButtons = document.querySelectorAll(".buttons")
// for (let i = 0; i < newButtons.length; i++) {
//     newButtons[i].addEventListener("click", function() {
//         console.log("на меня кликнули")

//     })
// }
// let buttonGreen = document.querySelector("#green")
// buttonGreen.addEventListener("click", function() {
//     document.body.style.backgroundColor = "green"
//     document.body.style.backgroundImage = "none"
// })
// let buttonOrange = document.querySelector("#orange")
// buttonOrange.addEventListener("click", function() {
//     document.body.style.backgroundColor = "orange"
//     document.body.style.backgroundImage = "none"
// })
// 
// ________________________
// 2.
// let texts = ["Lorem", "Ipsum", "Dolor", "Sit", "Amet"]

// let textsNew = document.querySelectorAll("p")
// for (let i = 0; i < texts.length; i++) {
//     textsNew[i].innerText = `${texts[i]}`
// }
// ___________________________
//  3.
// let arr = [
//     {
//         link : "https://google.com",
//         title : "Ссылка на гугл"
//     },
//     {
//         link : "https://instagram.com",
//         title : "Ссылка на инстаграм"
//     },
//     {
//         link : "https://facebook.com",
//         title : "Ссылка на фейсбук"
//     }
//     ]
// let arrNew = document.querySelectorAll(".links")
// for (let i = 0; i < arr.length; i++) {
//     arrNew.innerText = arr[i].title
//     arrNew.setAttribute("href",arr[i].link)
// }
// ____________________________
// 4.
// let minus = document.querySelector("#minus")
// let plus = document.querySelector("#plus")
// let text = document.querySelector(".text")

// minus.addEventListener("click", function() {
//     text.innerText = text.innerText - 1
// })
// plus.addEventListener("click", function() {
//     text.innerText = Number(text.innerText) + 1
// })
    
