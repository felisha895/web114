// Jacob Phillips, 4.29.2025

// Step 2
let taskInput = document.getElementById("taskInput"); // In this case, it's the input box
let addTaskBtn = document.getElementById("addTaskBtn"); // This is the main button
let taskList = document.getElementById("taskList"); // This is the main list

addTaskBtn.addEventListener("click", function addItem() { // Step 4
    let addTaskItem = taskInput.value.trim(); // The addListItem variable lets us set the condition of what is entered in the input box. In this case, the inputted material can be set to any value and any length.

    if (addTaskItem === "") {
        alert("You should probably fill something out."); // A condition set if the user doesn't input anything.
        return; // The return value ends the event if the user doesn't input anything
    } // Step 2

    let addListItem = document.createElement('li'); // The variable that creates a list item after the user inputs their task
    addListItem.textContent = addTaskItem; // The li element's text corresponds with the inputted item from the user

    let removeBtn = document.createElement('button'); // The variable that creates a remove button
    removeBtn.textContent = "Delete"; // The remove button's text

    removeBtn.addEventListener("click", function() { // This function actually enables the remove button's functionality
        taskList.removeChild(addListItem); // When clicked, the child list item is removed from the parent unordered list
    }); // The local event listener that is executed when the user clicks on the remove button

    addListItem.appendChild(removeBtn); // When the task is added, the appendChild method adds and displays another remove button next to the listed item
    taskList.appendChild(addListItem); // When the task is added, another text input box is added
    taskInput.value = ""; // The input box is empty by default
    taskInput.focus(); // This method allows us to focus on the input box, allowing for more user interaction
}); // Step 3