 // alert("Hello World")
// let name = prompt("Введите свое имя")
// alert(name)
// console.log(name) 

// let name = prompt("Введите свое имя")
// console.log("Hello, " + name)

// let isRaining = true
// if(isRaining == true)
// alert("возьми зонт")


// let isRaining = true 
// if(isRaining == false) {
// alert("возьми зонт")
// } else {
//     alert("Погода солнечная")
// }

// let degree = -2
// if(degree > 15) {
//     alert("виходь у футболці")
// } else if(degree < 3) {
//     alert("одягни куртку")
// }
// else {
//     alert("одягни кофтину")
// }

// let sale =  
// if(sale > 700) {
//     alert("скидка 20%")
// } else if (sale > 500) {
//     alert("скидка 15%")
// } else {
//     alert("no sale")
// }


// let r = 125
// let g = 50
// let b = 200

// let str = `rgb(${r}, ${g}, ${b})`
// console.log(str)

// let numb1 = +prompt("Введите первое число")
// let numb2 = -prompt("Введите второе число")

// if(numb1 > numb2) {
//     console.log(numb1)
// } 


// let book = {
//     name: "Garry Potter",
//     how many books: "7",
//     img: "https://img.jpg",
//     gloves: ["",""]
// }
// console.log("book")
// let book = ["Мастер и Маргарита", "Социальная драмма", "1937"]
// console.log(book[0])

// _____________________________
// let nums1 = prompt("Введите первое число")
// let nums2 = prompt("Введите второе число")
// let nums3 = prompt("Введите третье число")

// let nums = [100, 500]
// nums.push(nums1, nums2, nums3) 
// console.log(nums)

// ___________
// let nums = [10, 20, 30, 40, 50] 

// console.log(nums[0])
// console.log(nums[1])
// console.log(nums[2])
// console.log(nums[3])
// console.log(nums[4])


// _______ задача
// let nums = [10, 20, 30, 40, 50] 

// for(let i = 0; i < i] > 50; i++) {
//      console.log(nums[i])
// }
// __________________
// Задача. Вывести только цифры больше 50:
// let arr = [32, 51, 60, 78, 105, 14, 10]

// for(let i = 0; i < arr.length; i++) {
//     if (arr[i] >= 50) {
//     console.log(arr[i])
// }
// }

// 
// for(let i = 1; i < 5; i++) {
//     console.log(100)
// }
// ____________________
// Задача
// for(let i = 0; i <= 100; i++) {
//  if( i > 30) {
//     console.log("Больше", i)
// } else {
//     console.log(i)
// }
// }

// ________________
// выводим значение в консоль 
// let laptop = {
//     color : "black",
//     mark : "Acer",
//     model : "45564GG",
//     size : "15.6",
//     tech : {
//         ozu : "16GB",
//         proccessor : "Inter i7",
//         videocard : "Nvidia"
//     },
//     price : 50000
// }
// console.log(laptop.proccessor)
// _____________________
// вывод значений разметки в консоли из массива обьекта.
// let laptops = [
//     {
//         color : "black",
//         mark : "Acer",
//         model : "45564GG",
//         size : "15.6",
//         tech : {
//             ozu : "16GB",
//             proccessor : "Inter i7",
//             videocard : "Nvidia"
//         },
//         price : 50000
//     },
//     {
//         color : "white",
//         mark : "Asus",
//         model : "GG656",
//         size : "17",
//         tech : {
//             ozu : "24GB",
//             proccessor : "Inter i5",
//             videocard : "Nvidia"
//         },
//         price : 70000
//     }     
// ]

// console.log(`
// <div>
//     <h1>${laptops[0].price}</h1>
//     <p>${laptops[0].mark}</p>
//     <p>${laptops[0].color}</p>
// </div>
// <div>
//     <h1>${laptops[1].price}</h1>
//     <p>${laptops[1].mark}</p>
//     <p>${laptops[1].color}</p>
// </div>
// `)
// ________________________________
// новый массив:
// let instaPosts = [
//     {
//         title : "мое первое фото",
//         descr : "фото было сделано в Берлине",
//         autor : "valeriia",
//         like : 100,
//         img : "http://img1.jpg"
//     },
//     {
//         title : "супер фото",
//         descr : "фото было сделано в горах",
//         autor : "lina",
//         like : 222,
//         img : "http://img2.jpg"
//     },
//     {
//         title : "my супер фото",
//         descr : "фото было сделано в London",
//         autor : "darina",
//         like : 305,
//         img : "http://img3.jpg"
//     },
//     {
//         title : "my super фото",
//         descr : "фото было сделано на Мальдивах",
//         autor : "roma",
//         like : 7000,
//         img : "http://img4.jpg"
//     }

// ]
// console.log(`
// <div class= "instaPosts">
//     <h1>${instaPosts[0].title}</h1>
//     <p>${instaPosts[0].descr}</p>
//     <p>${instaPosts[0].autor}</p>
//     <p>${instaPosts[0].like}</p>
//     <img src="${instaPosts[0].img}" alt="фото в инст">
// </div>
// `)

// for(let i = 0; i < instaPosts.length; i++)
//  { 
//     if (instaPosts[i].likes > 250)

//     console.log(`
//     <div class= "instaPosts">
//     <h1>${instaPosts[i].title}</h1>
//     <p>${instaPosts[i].descr}</p>
//     <p>${instaPosts[i].autor}</p>
//     <p>${instaPosts[i].like}</p>
//     <img src="${instaPosts[i].img}" alt="фото в инст">
// </div>
//     `)
    
// }

 