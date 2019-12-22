import { selectStylesheet } from "./js/buttons.js";
import { toggleTimerHighlight } from "./js/highlight.js";
import { startTimer, stopTimer } from "./js/timer.js";

let timerRunning = false;
let interval;

const toggleTimer = () => {
  if (timerRunning) {
    stopTimer(interval);
    timerRunning = false;
  } else {
    interval = startTimer();
    timerRunning = true;
  }
};

const buttonPress = buttonName => {
  selectStylesheet(buttonName);
};

document.addEventListener("click", e => {
  if (!document.querySelector(".buttons").contains(e.target)) {
    toggleTimer();
  } else {
    buttonPress(e.target.getAttribute("name"));
  }
});

document.onkeypress = e => {
  if (e.code === "Space") {
    toggleTimer();
  } else if (e.code === "Enter") {
    toggleTimerHighlight();
  }
};
