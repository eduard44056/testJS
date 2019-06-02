'use strict';

let appData = new Object();
appData.timeDay = prompt("Введите дату в формате YYYY-MM-DD", "");
let money = prompt('Ваш бюджет на месяц?', '');
let mandatoryExpenses = prompt('Введите обязательную статью расходов в этом месяце', '');
let howMuch = prompt('Введите обязательную статью расходов в этом месяце', '');
let monthDay = 30;
appData = {
    money,
    timeDay,
    expenses: {mandatoryExpenses : howMuch},
    optionalExpenses,
    income,
    savings: false
};
let budgetDay = money/monthDay;
alert(budgetDay);

