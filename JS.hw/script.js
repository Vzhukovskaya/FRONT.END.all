// ____________________________
// Задача 1

// let laptops = [
//     {
//         mark : "Acer",
//         price : 25000
//     },
//     {
//         mark : "Apple",
//         price : 37000
//     },
//     {
//         mark : "Asus",
//         price : 125500,
//     },
//     {
//         mark : "HP",
//         price : 42000
//     },
//     {
//         mark : "Samsung",
//         price : 52000
//     }
// ]
// ____________________________
// (a)
// console.log(`
// <div class="laptops-1">
//     <h1>${laptops[0].mark}</h1>
//     <p>${laptops[0].price}</p>
// </div>
// <div class="laptops-2">
//     <h1>${laptops[1].mark}</h1>
//     <p>${laptops[1].price}</p>
// </div>
// <div class="laptops-3">
//     <h1>${laptops[2].mark}</h1>
//     <p>${laptops[2].price}</p>
// </div>
// <div class="laptops-4">
//     <h1>${laptops[3].mark}</h1>
//     <p>${laptops[3].price}</p>
// </div>
// <div class="laptops-5">
//     <h1>${laptops[4].mark}</h1>
//     <p>${laptops[4].price}</p>
// </div>    
// `);
// __________________________
// (б)
// for(let i = 0; i < laptops.length; i++) {
//     if (laptops[i].price > 40000)
// console.log(`
// <div class="laptops">
//     <h1>${laptops[i].mark}</h1>
//     <p>${laptops[i].price}</p>
// </div>
// `)
// }
// ___________________________
// (в)
// let sum = 0
// for (let i = 0; i < laptops.langth; i++) {
//     sum += laptops[i].price 
// }
// console.log(`<p>${sum}</p>`)
// После урока 14.11 решение функцией - корректное?
// function sum(a, b, c, d, e) {
//     return a + b + c + d + e 
// }
// let num = sum(25000, 37000, 125500, 42000, 52000)
// console.log(num)
// __________________________
// Задача 2 
// let laptopsSecond = [  
//     {  
//     mark : "Acer",  
//     category : ["laptop", "tech"],  
//     price : 25000  
//     },  
//     {  
//     mark : "Apple",  
//     category : ["notebook", "tech"],  
//     price : 37000  
//     },  
//     {  
//     mark : "Asus",  
//     category : ["computer", "premium"],  
//     price : 125500,  
//     },  
//     {  
//     mark : "HP",  
//     category : ["computer", "tech"],  
//     price : 42000  
//     },  
//     {  
//     mark : "Samsung",  
//     category : ["notebook", "premium"],  
//     price : 52000 
//     }
//  ]
// (a)
// for( i = 0; i < laptopsSecond.length; i++) {
//     if(laptopsSecond[i].category[i] == "laptop")
//     console.log(laptopsSecond[i].mark)
// }
// (б)
// for( i = 0; i < laptopsSecond.length; i++) {
//     for(let a = 0; a < laptopsSecond[i].category.length; a++) {
//         if(laptopsSecond[i].category[a] == "tech"){
//             console.log(laptopsSecond[i])
//         }
//     }
//     console.log (laptopsSecond[i].mark)
// }
// (в)
// for( i = 0; i < laptopsSecond.length; i++) {
//     if(laptopsSecond[i].category[i] == "premium")
//     console.log(laptopsSecond[i].mark)
// }
// ________________________________
// Задача 3.
// let notebookMark1 = prompt("Введите марку ноутбука")
// let notenookPrice1 = +prompt("Введите цену ноутбука")

// let notebookMark2 = prompt("Введите марку ноутбука")
// let notenookPrice2 = +prompt("Введите цену ноутбука")

// let notebookMark3 = prompt("Введите марку ноутбука")
// let notenookPrice3 = +prompt("Введите цену ноутбука")

// laptops = []
// laptops.push({notebookMark1, notenookPrice1}, {notebookMark2, notenookPrice2}, {notebookMark3, notenookPrice3})
// console.log(laptops)
// ___________________________________
// Задача 4. Крутила крутила - запуталась(совсем)
let laptopsSecond1 = [  
    {  
    mark : "Acer",  
    category : ["laptop", "tech"],  
    price : 25000 },  
    { 
     mark : "Apple",  
    category : ["notebook", "tech"],  
    price : 37000 },  
    {  
    mark : "Asus",  
    category : ["computer", "premium"],  
    price : 125500, },  
    {  
    mark : "HP",  
    category : ["computer", "tech"],  
    price : 42000 },  
    {  
    mark : "Samsung",  
    category : ["notebook", "premium"],  
    price : 52000 } ]

    let makrlaptop = prompt("Укажите марку ноутбука")

for( i = 0; i < laptopsSecond1.length; i++) {
            if(makrlaptop == "Acer")
           
        console.log (`
        <div class="laptopsSecond1">
            <h1>${laptopsSecond1[0].mark}</h1>
            <p>${laptopsSecond1[0].category}</p>
            <p>${laptopsSecond1[0].price}
        </div>
        `)
}
for( i = 0; i < laptopsSecond1.length; i++) {
        if(makrlaptop == "Apple")
       
    console.log (`
    <div class="laptopsSecond1">
        <h1>${laptopsSecond1[1].mark}</h1>
        <p>${laptopsSecond1[1].category}</p>
        <p>${laptopsSecond1[1].price}
    </div>
    `)
}
for( i = 0; i < laptopsSecond1.length; i++) {
    if(makrlaptop == "Asus")
   
    console.log (`
    <div class="laptopsSecond1">
    <h1>${laptopsSecond1[0].mark}</h1>
    <p>${laptopsSecond1[0].category}</p>
    <p>${laptopsSecond1[0].price}
    </div>
    `)
}
// _______________________________
    let pricelaptop = +prompt("Укажите стоимость ноутбука")