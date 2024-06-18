#! /usr/bin/env node
import inquirer from "inquirer";
//async function promptUser() {
const answer = await inquirer.prompt([
    { message: "Enter first number:", type: "number", name: "firstNumber" },
    { message: "Enter second number:", type: "number", name: "secondNumber" },
    {
        message: "select one of the operator u want to perfor action:",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtration", "Multiplication", "Division"],
    },
]);
console.log(answer);
//promptUser().catch((err) => console.error(err));
if (answer.operator === "Addition") {
    console.log("The Addition is: ", answer.firstNumber + answer.secondNumber);
}
else if (answer.operator === "Subtration") {
    console.log("The Subtraction is:", answer.firstNumber - answer.secondNumber);
}
else if (answer.operator === "Multiplication") {
    console.log("The Multiplication is: ", answer.firstNumber * answer.secondNumber);
}
else if (answer.operator === "Division") {
    console.log("The Division is: ", answer.firstNumber / answer.secondNumber);
}
else {
    console.log("Please enter valid operator.");
}
