#! /usr/bin/env node
import inquirer from "inquirer";
const rondomnumber = Math.floor(Math.random() * 20 + 1);
const answer = await inquirer.prompt([
    {
        name: "userGussednumber",
        type: "number",
        message: "Please guess a number between 1-20:",
    },
]);
if (answer.userGussednumber === rondomnumber) {
    console.log("congratulation! you are gussed right number");
}
else {
    console.log("you gussed wrong Number");
}
