// variables

var cards = document.querySelectorAll(".card");
var hasFlipCard = false;
var firstCard, secondCard;
// ***************************************************************
// function play sound
function playSound(audio) {
  audio.loop = true;
  audio.play();
  audio.playbackRate = 0.7;
  setTimeout(() => {
    audio.loop = false;
  }, 3000);
  //   timer to say 3 time word
}
// ***************************************************************
// function to choose the whiec sound we need to play
function choose(choice) {
  switch (choice) {
    case "rocket":
      var audio = new Audio("sounds/rocket.mp3");
      playSound(audio);
      //   timer to say 3 time word
      break;
    case "hippo":
      console.log("hippo");
      //playSound(audio)
      break;
    case "guitar":
      console.log("guitar");
      //playSound(audio)
      break;
    case "cat":
      var audio = new Audio("sounds/cat.mp3");
      playSound(audio);
      break;
    case "dog":
      var audio = new Audio("sounds/dog.mp3");
      playSound(audio);
      break;
    case "crow":
      console.log("crow");
      //playSound(audio)
      break;
    case "horse":
      var audio = new Audio("sounds/horse.mp3");
      playSound(audio);
      break;
    case "frog":
      var audio = new Audio("sounds/frog.mp3");
      playSound(audio);
      break;
  }
}
// ***************************************************************
// function to flip the card
function flipCard() {
  this.classList.add("is-flipped");
  if (!hasFlipCard) {
    // if the has flip card false that main the player first time clicked
    hasFlipCard = true;
    firstCard = this;
  } else {
    hasFlipCard = false;
    secondCard = this;
    if (firstCard.dataset.info === secondCard.dataset.info) {
      // its match
      firstCard.removeEventListener("click", flipCard);
      secondCard.removeEventListener("click", flipCard);
      //   check for me
      console.log("we find match");
      setTimeout(() => {
        var answer = confirm("do you wannat to lisent to music");
        if (answer) {
          // the user click ok
          // we need to check what is the  info and play the sound
          // I need to place with function call playWord();
          var choice = firstCard.dataset.info;
          choose(choice);
        }
      }, 1500);
    } else {
      setTimeout(() => {
        firstCard.classList.remove("is-flipped");
        secondCard.classList.remove("is-flipped");
      }, 1500);
    }
  }
}
// ********************************************************
// for eact card we have event listener
cards.forEach((card) => card.addEventListener("click", flipCard));
