let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");

const message = document.querySelector("#msg");

const getComputerChoice = () => {
    const options = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx]
    // rock, paper, scissors

};

const drawGame = () => {
    console.log("game was draw");
    message.innerText = "Game was Draw";
}

const showWinner = (userWin) => {
    if(userWin){
        console.log("You Win");
        message.innerText = "You Win";
    }else{
        console.log("Computer Win");
        message.innerText = "Computer Win";
    }
}

const playGame = (userChoice) =>{
    console.log("user choice = ",userChoice);
    //Generate computer choice -> modular
    const compchoice = getComputerChoice();
    console.log("computer choice",compchoice);

    if(userChoice === compchoice){
        //draw
        drawGame();
    }else {
        let userWin = true;
        if(userChoice === "rock"){
            //scissore,paper
           userWin = compchoice === "paper" ? false : true;
        }else if(userChoice === "paper"){
            //rock , scissors
           userWin = compchoice === "scissore" ? false : true;
        }else{
            //rock,paper
           userWin = compchoice === "rock" ? false : true
        }
        showWinner(userWin);
    }

};

choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id")
        console.log("choice was clicked" ,userChoice);
        playGame(userChoice);
    });
});