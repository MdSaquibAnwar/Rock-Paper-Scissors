let userScore = 0;
let compScore = 0;
const userScorepara =document.querySelector("#user_score");
const compScorepara =document.querySelector("#comp_score");

const choices =document.querySelectorAll(".choice");
const msgP =document.querySelector("#msg");
const gemcompchoice = ()=>{
    const option = ["rock","paper","scissors"];
    const ranid = Math.floor(Math.random() * 3);
    return option[ranid];
}
const drawgmae  = ()=>{
     msgP.innerText ="Draw Play again!";
}
const showWinner= (userWin,userchoiceid,compchoice) =>{
    if(userWin){
        userScore++;
        userScorepara.innerText =userScore;
       msgP.innerText=`You win! You ${userchoiceid} beats ${compchoice}`;
       msgP.style.backgroundColor ="green";
    }else{
        console.log("you lose");
        compScore++;
        compScorepara.innerText=compScore;
        msgP.innerText = `You lose! ${compchoice} beats you ${userchoiceid}`;
        msgP.style.backgroundColor="red";

    }
}
const playGame= (userchoiceid) =>{
    console.log("user choice ", userchoiceid);
    const compchoice = gemcompchoice();
    console.log("comp choice ", compchoice);
    
    if(userchoiceid === compchoice){
        drawgmae();
    }
    else{
        let userWin = true;
        if(userchoiceid ==="rock"){
            userWin = compchoice =="paper"? false: true;
        }else if(userchoiceid === "paper"){
            userWin = compchoice === "scissor" ? false :  true;
        }else{
            compchoice ==="rock" ?false:true;
        }
        showWinner(userWin,userchoiceid,compchoice);
    }

}

choices.forEach(choice => {
    choice.addEventListener("click",()=>{
        const userchoiceid = choice.getAttribute("id");
        playGame(userchoiceid);
    });
});