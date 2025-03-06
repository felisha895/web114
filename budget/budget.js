// Jacob Phillips, 3.5.2025

let income = 2475;
let rent = 1266;
let groceries = 275;
let utilities = 540;

let totalExpenses = rent + groceries + utilities;

let remainingMoney = totalExpenses - income;

let rentPercent = Math.max((rent / income) * 100);
let groceriesPercent = Math.max((groceries / income) * 100);

console.log(rentPercent);
console.log(groceriesPercent);