function hideElement (ID){
   let element = document.getElementById(ID).classList.add('hidden');
   return element
}
function showElement (ID){
   let element = document.getElementById(ID).classList.remove('hidden');
   return element
}

function setBgcolor(ID) {
    let element = document.getElementById(ID).classList.add('bg-orange-400');
    return element 
}
function removeBgcolor(ID) {
    let element = document.getElementById(ID).classList.remove('bg-orange-400');
    return element 
}
function getElementvalue (ID){
   let score = document.getElementById(ID);
   let innerValue = score.innerText;
   let currentScore = parseInt(innerValue);
   return currentScore
}
function setValue ( element , value){
  let score = document.getElementById(element);
  score.innerText = value
}

function getARandomAlphabet() {
    // create the alphabet array 
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const arrayOfletter = alphabetString.split('')

    // get random index of alphabet
    let randomNumber = Math.random()*25
    let index = Math.round(randomNumber)
    let alphabet = arrayOfletter[index]
  //  console.log(index , alphabet)
    return alphabet
}



