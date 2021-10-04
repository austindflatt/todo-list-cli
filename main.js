const prompt = require('prompt-sync')({ sigint: true });

console.log("Welcome to the To-Do List Manager Application!");
let todos = [];
let areTodosComplete = [false, true];

while (true) {
    if (todos.length === 0) {
        console.log("Your to-do list is empty.");
    } else {
        console.log(`You have ${todos.length} to-do item(s).`);
        for (let i = 0; i < todos.length; i++) {
            console.log(`[incomplete] ${i + 1}. ${todos[i]}`)
        }
    }
    const action = Number(prompt(`~ Select an action ~\n
    [1] Create a to-do item\n
    [2] Complete a to-do item:`));

    if (action === 1) {
        console.log("~ Creating a new to-do item ~");
        let create = prompt("What is this to-do item called?");
        todos.push(create);
    } else if (action === 2) {
        console.log("~ Completing a to-do item ~");
        let complete = Number(prompt("Which to-do item would you like to complete?"));
            if (complete === todos) {
                console.log("That item has been completed and removed from the list!");
            }
    }
}