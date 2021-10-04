const prompt = require('prompt-sync')({ sigint: true });

console.log("Welcome to the To-Do List Manager Application!");

while (true) {
    console.log("Your to-do list is empty.");
    const action = prompt(`~ Select an action ~\n
    [1] Create a to-do item\n
    [2] Complete a to-do item:`);
}