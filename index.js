#! /usr/bin/env node
import inquirer from "inquirer";
let balanceAmt = 100000;
let atmPin = 5565;
let attempLogin = 5;
while (attempLogin != 0) {
    let answer = await inquirer.prompt([
        {
            message: "Please Entred Your Card Pin :",
            name: "ChoosePin",
            type: "number",
        },
    ]);
    if (attempLogin >= 0) {
        //Condition Check
        if (atmPin === answer.ChoosePin) {
            answer = await inquirer.prompt([
                {
                    message: "Which option do you want to use please select",
                    name: "selectedOption",
                    type: "list",
                    choices: ["Withdraw", "Check Balance"],
                },
            ]);
            if (answer.selectedOption === "Withdraw") {
                answer = await inquirer.prompt([
                    {
                        message: "How Much amount you want to withdraw? :",
                        name: "withdrawAmt",
                        type: "number",
                    },
                ]);
                if (balanceAmt >= answer.withdrawAmt) {
                    balanceAmt -= answer.withdrawAmt;
                    console.log(`Now! your Available Balance is : ${balanceAmt}`);
                }
                else {
                    console.log(`Sorry! your withdraw amount is exceeding from your Current Balance.`);
                }
            }
            else {
                console.log(`Your Current Balance is : ${balanceAmt}`);
            }
        }
        else {
            console.log(`Sorry! you have entered invalid Pin number.`);
            attempLogin--;
            console.log(`your remaining attemp for pin is ${attempLogin} .`);
        }
    }
    if (attempLogin === 0) {
        console.log(`Sorry! your account is temporary blocked by System for security purpose.. `);
    }
}
