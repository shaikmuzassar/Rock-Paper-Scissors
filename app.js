let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const rstBtn = document.querySelector(".rstbtn");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


const resetButton = () => {
    rstBtn.classList.remove("hide");
}

rstBtn.addEventListener('click', () => {
    userWin = true;
    msg.innerText = "Play your move";
    msg.style.backgroundColor = "black";
    userScore = 0;
    userScorePara.innerText = userScore;
    compScore = 0;
    compScorePara.innerText = compScore;
    console.log("On users request Game was Reset.")
    rstBtn.classList.add("hide");

})


const draw = () => {
    msg.innerText = "Game was Draw. Play again.";
    msg.style.backgroundColor = "blue";
};

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        console.log("you win");
        msg.innerText = "Congratulations, You Win!";
        msg.style.backgroundColor = "green";
    }else {
        compScore++;
        compScorePara.innerText = compScore;
        console.log("you lose");
        msg.innerText = "You Lose";
        msg.style.backgroundColor = "red";
    }
};

const genCompChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx]; 
};
const playGame = (userChoice) => {
    console.log("user Choice =",userChoice);
    const compChoice = genCompChoice();
    console.log("Computer Choice =",compChoice);
    if (userChoice === compChoice) {
        draw();
    }else {
        let userWin = true;
        if (userChoice = "rock") {
            userWin = compChoice === "paper" ? false:true;
        }else if (userChoice === "paper") {
            userWin = compChoice === "scissor" ? false:true;
        }else {
            userWin = compChoice === "rock" ? false:true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
    resetButton();
};


choices.forEach((choice) => {
    choice.addEventListener("click",() => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})