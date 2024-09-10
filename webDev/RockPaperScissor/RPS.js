let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const UserScorep = document.querySelector("#user-score");
const CompScorep = document.querySelector("#comp-score");





const getCompChoice = () => {
    const options = ["Rock","Paper","Scissors"];
     const randIdx = Math.floor(Math.random() * 3);   
     return options[randIdx]; 
}



const showWinner = (userWin,userChoice,compchoice) => {
    if(userWin){
        userScore++;
        UserScorep.innerText = userScore;
        msg.innerText = `You Win!, Your ${userChoice} beats ${compchoice}`  ; 
        msg.style.backgroundColor = "green";
    }else{
        compScore++;
        CompScorep.innerText = compScore;
        msg.innerText = `Computer wins!, ${compchoice} beats Your ${userChoice}`;
        msg.style.backgroundColor = "red";


    }
}


const drawGame = () =>{
    console.log("Game was draw");
    msg.innerText = "Game was draw!, play Again"
    msg.style.backgroundColor = "#081b31";

}



const playGame = (userChoice) => {
    console.log("User choice : ", userChoice);
const compchoice = getCompChoice();
console.log("computer choice : " , compchoice);

if(userChoice===compchoice){
    drawGame();
}
else{
    let userWin = true;
    if(userChoice === "Rock"){
        userWin = compchoice === "Paper" ? false :true ;
    }
    else if(userChoice === "Paper"){
        userWin = compchoice === "Scissors" ? false : true ;
    }
    else{
        userWin = compchoice === "Rock" ? false : true ;
    }
    showWinner(userWin,userChoice,compchoice);
}
}


choices.forEach((choice) => {
    choice.addEventListener("click", ()=> {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})