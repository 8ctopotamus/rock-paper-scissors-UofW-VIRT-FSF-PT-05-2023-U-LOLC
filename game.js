var wins = 0
var losses = 0
var ties = 0
var keepPlaying = true
var choices = ["R", "P", "S"]

function getChoices() {
  // human choice
  var humanChoice = prompt("Choose R, P, or S")

  // random computer choice
  var randomNum = Math.floor( Math.random() * 3 )
  var computerChoice = choices[randomNum] 

  return { 
    humanChoice: humanChoice, 
    computerChoice: computerChoice,
  }
}

function compareChoices(humanChoice, computerChoice) {
  if (
    humanChoice === "S" && computerChoice === "P" ||
    humanChoice === "R" && computerChoice === "S" ||
    humanChoice === "P" && computerChoice === "R"
  ) {
    alert("You won!")
    wins++
  } else if (humanChoice === computerChoice) {
    alert("Round tied!")
    ties++
  } else {
    alert("You lost!")
    losses++
  }
}

function alertScoreboard() {
  alert("Wins: " + wins + "\nTies: " + ties + "\nLosses: " + losses)
}

while (keepPlaying) {
  var chosenLetters = getChoices()
  compareChoices(chosenLetters.humanChoice, chosenLetters.computerChoice)
  alertScoreboard()
  keepPlaying = confirm("Do you want to play again?")
}

alert("See ya. Play again soon!")