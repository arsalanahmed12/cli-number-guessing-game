#! /usr/bin/env node
import inquirer from "inquirer"
const randomnumber = Math.floor(Math.random()*10+1)
const answer = await inquirer.prompt([
    {name: "guess",
    type:"number",
    
    message:"Guess a number between 1-10 and win the game"}
])
if(answer.guess === randomnumber){
    console.log("Congratulations! You Win The Game")
}
else{
    console.log(`Try Again Correct Number Is ${randomnumber}`)
}