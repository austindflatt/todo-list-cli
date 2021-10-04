const prompt = require('prompt-sync')({ sigint: true });

console.log("Welcome to the To-Do List Manager Application!");

while (true) {
    console.log("Your to-do list is empty.");
    const action = Number(prompt(`~ Select an action ~\n
    [1] Create a to-do item\n
    [2] Complete a to-do item:`));

    if (action === 1) {
        console.log("~ Creating a new to-do item ~");
        let create = prompt("What is this to-do item called?");
    } else if (action === 2) {
        console.log("~ Completing a to-do item ~");
        let complete = prompt("Which to-do item would you like to complete?");

    }
}