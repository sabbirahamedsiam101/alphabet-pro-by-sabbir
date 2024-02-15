
document.addEventListener('keyup' , (e)=>{
  let player = e.key; // get the keyboard key
  console.log( 'player ' + player); // player's value
  let currentAlphabet = document.getElementById('display').innerText ;
  let excatcurrentAlpha = currentAlphabet.toLocaleLowerCase() // display value
  console.log( 'current alpha ' + excatcurrentAlpha)

  if(player === excatcurrentAlpha){
    console.log('kam saira flaisen vai ....');
    removeBgcolor(excatcurrentAlpha)
    coutinueGame()
    let currentScore = getElementvalue ('score')
    let newScore = currentScore + 1;
    setValue('score' ,  newScore)

  }else{
    console.log('Tumi fail.  Ai next.... ')
    let currentScore = getElementvalue ('life');
    let reduceNum = currentScore - 1;
    setValue('life' ,  reduceNum);
    if ( reduceNum === 0) {
        hideElement ('playGame')
          gameOver()
        //  let newScore = currentScore + 1;
        // 
        //  return result
      }

  }
})

function coutinueGame() {
  let alphabet=   getARandomAlphabet()
  // console.log('your random alphabet = ' + alphabet)
  let currentAlphabet = document.getElementById('display').innerText = alphabet
 
  setBgcolor(currentAlphabet)
  
}

function play() {
    hideElement ('home')
    showElement ('playGame')
    coutinueGame()
}

function playAgain(){
  hideElement ('result')
  showElement ('playGame')
  setValue('score' ,  0)
  setValue('life' ,  5);
}

function gameOver(){
  showElement ('result')
  let currentScore = getElementvalue ('score');
  console.log(currentScore)
  let result = document.getElementById('finalResult');
  result.innerText = currentScore
}