// DECLARATION функция сложения 
function sum(a, b) {
    return a + b
}
// произведение
function mult(a, b) {
    return a * b
}
// console.log(sum(20, 25))
// let num = sum(20,25)
// console.log(num)

// function calc() {
//    let num = +prompt("Введите число")
//    return mult(num, num) 
// }
// console.log(calc())
// возводим в степень 
function power(a, b) {
    return Math.pow(a, b) + a   
}
// console.log(power(5, 2))
// аргумент имя и в консоли возвращает Hello + name
function greeting(name) {
    return `Hello ${name}`
}
// console.log(greeting("Valeriia"))

let number = +prompt("Введите число")
function num(number) {
    if(number > 50) {
    return console.log("Больше", number) 
    }
    console.log(number)
}
num(100)
