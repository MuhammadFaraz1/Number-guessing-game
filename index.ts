#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

let num1=await inquirer.prompt([{
    name:"num",
    type:"number",
    message:chalk.yellowBright("Guess the number b/w 1-10 :")
}])
let TargetNumber=5
if (num1.num===TargetNumber){
    console.log(chalk.cyanBright("Congratulation, You Guess the right number."))
}else if(num1.num===4 || num1.num===6){
    console.log(chalk.redBright.bold("Your Guess is soo closed."))
}else if(num1.num>0 && num1.num<4){
    console.log(chalk.magentaBright("Your Guess is to low."))
}else{
    console.log(chalk.magentaBright("Your Guess is to high."))
};