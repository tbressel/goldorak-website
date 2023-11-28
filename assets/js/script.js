document.addEventListener('DOMContentLoaded', () => {

  
  
  
  // Get the current date
  let currentDate = new Date();
  const currentDay = currentDate.getDate();
  const currentMonth = currentDate.getMonth() + 1; // Les mois commencent à partir de zéro, donc ajoutez 1
  const currentYear = currentDate.getFullYear();
  
  // Set the goal_month, goal_day, and goal_year variables to the desired values
  let goal_month = 2;
let goal_day = 16;
let goal_year = 2024;
let daysRemaining = '';

if (goal_year > currentYear || (goal_year === currentYear && (goal_month > currentMonth || (goal_month === currentMonth && goal_day >= currentDay)))) {
  // The specified date has not yet passed
  let targetDate = new Date(goal_year, goal_month - 1, goal_day);
  let timeDiff = targetDate.getTime() - currentDate.getTime();
  daysRemaining = Math.ceil(timeDiff / (1000 * 3600 * 24));
  console.log("Il reste " + daysRemaining + " jours.");
} else {
  console.log("La date est déjà passée.");
}

let hours = 24 - currentDate.getHours();
let minutes = 60 - currentDate.getMinutes();
let seconds = 60 - currentDate.getSeconds();

let ELEMENT__sec = document.getElementById("secondes").childNodes[1];
ELEMENT__sec.innerText = seconds;
let ELEMENT__sec_value = ELEMENT__sec.innerText;

let ELEMENT__min = document.getElementById("minutes").childNodes[1];
ELEMENT__min.innerText = minutes;
let ELEMENT__min_value = ELEMENT__min.innerText;

let ELEMENT__hours = document.getElementById("hours").childNodes[1];
ELEMENT__hours.innerText = hours;
let ELEMENT__hours_value = ELEMENT__hours.innerText;

let ELEMENT__days = document.getElementById("days").childNodes[1];
ELEMENT__days.innerText = daysRemaining;
let ELEMENT__days_value = ELEMENT__days.innerText;

let setIntervalID = setInterval(() => {
  Countdown();
}, 1000);

function Countdown() {
  ELEMENT__sec_value--;
  if (ELEMENT__sec_value === -1) {
    ELEMENT__min_value--;
    if (ELEMENT__min_value === -1) {
      ELEMENT__hours_value--;
      if (ELEMENT__hours_value === -1) {
        ELEMENT__days_value--;
        if (ELEMENT__days_value === -1) {
          ELEMENT__reset_value = 0;
          ELEMENT__sec.innerText = ELEMENT__reset_value;
          ELEMENT__min.innerText = ELEMENT__reset_value;
          ELEMENT__hours.innerText = ELEMENT__reset_value;
          ELEMENT__days.innerText = ELEMENT__reset_value;
          clearInterval(setIntervalID);
          return;
        }
        ELEMENT__days.innerText = ELEMENT__days_value;
        ELEMENT__hours_value = 24;
        ELEMENT__hours.innerText = ELEMENT__hours_value;
      }
      ELEMENT__hours.innerText = ELEMENT__hours_value;
      ELEMENT__min_value = 59;
      ELEMENT__min.innerText = ELEMENT__min_value;
    }
    ELEMENT__min.innerText = ELEMENT__min_value;
    ELEMENT__sec_value = 59;
    ELEMENT__sec.innerText = ELEMENT__sec_value;
  } else {
    ELEMENT__sec.innerText = ELEMENT__sec_value;
  }
}




//---------------------------------------------------------------------
//GESTION DU BOUTON QUI FERME LA VIDEO ET L'AUDIO CI CELUI CI EST ACTIF
//---------------------------------------------------------------------
//
// On récupère dans une constante l'élément sur lequel on va cliquer
const ELEMENT__close = document.getElementById('cross');
console.log("Je récupère l'élément cliquable :", ELEMENT__close);

// On test l'élément qui doit être cliquable
ELEMENT__close.addEventListener("click", () => {
    console.log("j'ai cliqué sur la croix, je suis donc rentré dans ma fonction");

    const ELEMENT__popup = document.getElementById("popup").classList.toggle("off");
    console.log(ELEMENT__popup);

    var baliseAudio = document.getElementById("video");
    baliseAudio.pause();
    var baliseAudio = document.getElementById("audio_cart");
    baliseAudio.play();

  });

  
  
  function dragAndDrop(element) {
  let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

  element.onmousedown = function(event) {
      event.preventDefault();
      
      // get mouse position
      pos3 = event.clientX;
      pos4 = event.clientY;
      document.onmouseup = stopDrag;
     
      // when mouse is moving
      document.onmousemove = function(event) {
          event.preventDefault();
         
          
          // calc new position
          pos1 = pos3 - event.clientX;
          pos2 = pos4 - event.clientY;
          pos3 = event.clientX;
          pos4 = event.clientY;

          // move element
          element.style.top = (element.offsetTop - pos2) + "px";
          element.style.left = (element.offsetLeft - pos1) + "px";
      };
  };


/*
---------------------------------------------------------------------
GESTION DU BOUTON PLAY QUI PERMET DE LIRE LA VIDEO
---------------------------------------------------------------------
*/
const ELEMENT__play = document.getElementById("btn__play");
console.log(ELEMENT__play);


ELEMENT__play.addEventListener("click", () => {
  console.log("j'ai cliqué sur play, je suis donc rentré dans ma fonction");
  
    var baliseAudio = document.getElementById("video");
    baliseAudio.play();

  })
  

  


  function stopDrag() {
      // when mouse button is not more pressed
      document.onmouseup = null;
      document.onmousemove = null;
  }
}


dragAndDrop(document.querySelector('.draggable'));
});