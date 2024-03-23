#! /usr/bin/env node
import inquirer from "inquirer";
let answer = await inquirer.prompt([
    {
        message: "Enter your first Number : ",
        type: "number",
        name: "firstNumber",
    },
    {
        message: "Enter your first Number : ",
        type: "number",
        name: "secondNumber",
    },
    {
        message: "Please Select One of the oprator : ",
        type: "list",
        name: "oprator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
]);
if (answer.oprator === "Addition") {
    console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.oprator === "Subtraction") {
    console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.oprator === "Multiplication") {
    console.log(answer.firstNumber * answer.secondNumber);
}
else if (answer.oprator === "Division") {
    console.log(answer.firstNumber / answer.secondNumber);
}
else {
    console.log("You have selected invalid selector");
}
