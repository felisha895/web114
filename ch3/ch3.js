// Jacob Phillips, 3.28.2025

let username = prompt("What is your name?"); // Step 1
let proceed = confirm("Can you use my name on the web page?"); // Step 2
let age = prompt("What is your age?"); // Step 6

if (proceed === true) { // Step 3
    console.log("Yes, I can use your name on this page, " + username + "."); // Step 4
} else {
    console.log("No, you can not use my name on this page. Privacy Please."); // Step 5
}

alert("Hi " + username + "! " + "You are " + age + " years old."); // Step 7