// Jacob Phillips 3.5.2025

let hourlyWage = prompt("What is your hourly wage?");
let weeklyHours = prompt("How many hours did you work this week?");
let weeklyEarnings = hourlyWage * weeklyHours;
let taxAmount = weeklyEarnings * 0.2;
let finalWeeklyEarnings = weeklyEarnings - taxAmount;

if (weeklyHours = Number) {
    console.log("Your weekly earnings are "  + "$" + weeklyEarnings + ".");
    console.log("Taxes come at " +  "$" + taxAmount + ".");
    console.log("Your final weekly earnings come to be at " + "$" + finalWeeklyEarnings.toFixed(2) + ".");
}