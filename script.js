function getcomputerchoice(){

    let r = Math.floor(Math.random() * 3);

    if(r == 0){

        return "rock";
    }
    else if(r == 1){
        return "paper";
    }else{
return "scissors";

    }

}
console.log(getcomputerchoice());







function gethumanchoice(){

let choice = prompt("enter rock,paper,scissors");
return choice;

}
console.log(gethumanchoice());



let humanscore = 0;
let computerscore = 0;








function playround(humanchoice,computerchoice) {
    humanchoice = humanchoice.toLowerCase();
    computerchoice = computerchoice.toLowerCase();


if (humanchoice === computerchoice){
console.log(" draw");
    return "draw";
}
else if(humanchoice === "rock" && computerchoice === "scissors" ){
   humanscore++;
   console.log("user wins")
    return "user wins";
    
}
else if(humanchoice === "paper" && computerchoice === "rock"){
    humanscore++;
    console.log("user wins");
    return "user wins";
    
}
else if(humanchoice === "scissors" && computerchoice === "paper")
    {
    humanscore++;
    console.log("user wins")
    return "user wins";
}
else {
   
   computerscore++;
   console.log("user loses");
    return "user loses";
}



}


function playgame(){



playround(gethumanchoice(),getcomputerchoice());
playround(gethumanchoice(),getcomputerchoice());
playround(gethumanchoice(),getcomputerchoice());
playround(gethumanchoice(),getcomputerchoice());
playround(gethumanchoice(),getcomputerchoice());

console.log("human score",humanscore);
console.log("computer score",computerscore);
if (humanscore > computerscore){
    console.log("you won");
}
else if(computerscore > humanscore){
    console.log("you lose");
}
else{
    console.log("draw");
}
}
playgame();