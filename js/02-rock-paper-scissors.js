// Author: Ranjitha

//Date:03/06/2023

//The Rock, Paper, Scissors Game

/*The Rock, Paper, Scissors Game(20 points)

Rock, paper, scissors is a classic 2 player game.Each player chooses rock, paper or scissors.
The possible outcomes include:

Rock destroys scissors.
Scissors cut paper.
Paper covers rock.

Our code will break the game into 3 phases:

User makes a choice.How will we collect the user’s choice ?
    Computer makes a choice.How will we collect the computer’s choice ?
        A conditional that determines who wins.*/

function userChoice() {
    let choice = prompt("Please opt rock,paper or scissor to play a game").toLowerCase();
    //document.write(choice);
    while (1) {
        if (choice !== 'rock' && choice !== 'paper' && choice !== 'scissor')
            choice = prompt("Please opt rock,paper or scissor to play a game").toLowerCase();
        else
            break;
    }
     return choice;
}

function computerChoice() {
    let number = Math.floor(Math.random() * 3) + 1;
    let ch;
    if (number == 1) {
        ch = 'rock';
    }
    else if (number == 2) {
        ch = 'paper';
    }
    else if (number == 3) {
        ch = 'scissor'
    }
    //document.write(number);
    return ch;
}

//function main() {
let a = userChoice();
document.writeln("User Selection is: "+a);
let b = computerChoice();
document.write("Computer Selection is: " +b);
//document.write("<br");

if (a === 'rock' && b === 'scissor') {
    document.write(" User wins over Computer!!! Rock destroy scissor");
    alert("User Wins");
}
else if (b === 'rock' && a === 'scissor') {
    document.write(" Computer wins over User!!! Rock destroy scissor");
    alert("Computer Wins");
}
if (a === 'scissor' && b === 'paper') {
    document.write(" User wins over Computer!!! Scissor cut paper");
    alert("User Wins");
}
else if (b === 'scissor' && a === 'paper') {
    document.write(" Compute wins over User!!! Scissor cut paper");
    alert("Computer Wins");
}
if (a === 'paper' && b === 'rock') {
    document.write(" User wins over Computer!!! Paper covers rock");
    alert("User Wins");
}
else if (b === 'paper' && a === 'rock') {
    document.write("Computer wins over User!!! Paper covers rock");
    alert("Computer Wins");
}
else if(a===b)
    alert("Its a tie");

       
//}
