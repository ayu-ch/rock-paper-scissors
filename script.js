let compChoice = '';

function  playGame(playerMove){
    const computerMove = computersChoice();

    let result = '';

    if (playerMove==='Paper'){
      if(compChoice === 'Paper'){
        result = 'Its a Tie!'
      }
      else if (compChoice==='Scissors'){
        result = 'You LOST!'
      }
      else if (compChoice === 'Rock'){
        result = 'You WON!'
      }

      alert(`You picked Paper. Computer picked ${compChoice}.${result}`);
    }
    else if (playerMove === 'Rock'){
      if(compChoice === 'Rock'){
        result = 'Its a Tie!'
      }
      else if (compChoice==='Paper'){
        result = 'You LOST!'
      }
      else if (compChoice === 'Scissors'){
        result = 'You WON!'
      }

      alert(`You picked Paper. Computer picked ${compChoice}.${result}`);
    }
    else if (playerMove==='Scissors'){
      if(compChoice === 'Scissors'){
        result = 'Its a Tie!'
      }
      else if (compChoice==='Rock'){
        result = 'You LOST!'
      }
      else if (compChoice === 'Paper'){
        result = 'You WON!'
      }

      alert(`You picked Paper. Computer picked ${compChoice}.${result}`);
    }
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

