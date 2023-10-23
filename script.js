const playerScore ={
  wins: 0,
  losses:0,
  ties:0
};


let compChoice = '';

function  playGame(playerMove){
    const computerMove = computersChoice();

    let result = '';

    if (playerMove==='Paper'){
      if(compChoice === 'Paper'){
        result = 'Its a Tie!'
        playerScore.ties+=1;
      }
      else if (compChoice==='Scissors'){
        result = 'You LOST!'
        playerScore.losses+=1;
      }
      else if (compChoice === 'Rock'){
        result = 'You WON!'
        playerScore.wins+=1
      }

    
    }
    else if (playerMove === 'Rock'){
      if(compChoice === 'Rock'){
        result = 'Its a Tie!'
        playerScore.ties+=1;
      }
      else if (compChoice==='Paper'){
        result = 'You LOST!'
        playerScore.losses+=1;
      }
      else if (compChoice === 'Scissors'){
        result = 'You WON!'
        playerScore.wins+=1;
      }

      
    }
    else if (playerMove==='Scissors'){
      if(compChoice === 'Scissors'){
        result = 'Its a Tie!'
        playerScore.ties+=1;
      }
      else if (compChoice==='Rock'){
        result = 'You LOST!'
        compScore.wins+=1;
      }
      else if (compChoice === 'Paper'){
        result = 'You WON!'
        playerScore.wins+=1
      }
    }
      alert(`You picked ${playerMove}. Computer picked ${compChoice}.${result} 
      Wins: ${playerScore.wins}, Losses: ${playerScore.losses}, Ties: ${playerScore.ties}`);
    
}

function computersChoice(){
    const randNum = Math.random()
    console.log(randNum)
    if (randNum<=1/3){
      compChoice='Rock';
    }
    else if (randNum>1/3 && randNum<2/3){
      compChoice='Paper';
    }
    else {
      compChoice="Scissors";
    }
    console.log(compChoice)
    return compChoice;
}



