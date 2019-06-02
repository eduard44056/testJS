'use strict';

// // var number = 5;
// // var string = "Hello";
// // var sym = Symbol();
// // var boolean = true;
// // null;
// // undefined;
// // var obj = {};


// // console.log(4/0);
// // console.log(boolean);

// // let something;
// // console.log(something);

// // let persone = {
// //   name: "John",
// //   age: 25,
// //   isMarried: false
// // };

// // console.log(persone.name);

// // let n = 100;
// // let s = n + " бутылок пива на стене.";

// let arr = ['plum.png', 'orange.jpg', 'apple.bmp'];
// console.log(arr[1]);

// // console.log(s);

// // alert("Hello world!");

// // let answer = confirm("Ты здесь?");
// // console.log(answer);

// let answer = prompt("Ты здесь?", "Yes");
// console.log(typeof(arr));

let timeDay = prompt("Введите дату в формате YYYY-MM-DD", "");
let money = prompt('Ваш бюджет на месяц?', '');
let mandatoryExpenses = prompt('Введите обязательную статью расходов в этом месяце', '');
let howMuch = prompt('Введите обязательную статью расходов в этом месяце', '');
let monthDay = 30;
let appData = {
    money,
    timeDay,
    expenses: {mandatoryExpenses : howMuch},
    optionalExpenses,
    income,
    savings: false
};
let budgetDay = money/monthDay;
alert(budgetDay);