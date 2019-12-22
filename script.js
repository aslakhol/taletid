import { selectStylesheet } from "./js/buttons.js";
import { toggleTimerHighlight } from "./js/highlight.js";
import { setAnimationOn, setAnimationOff } from "./js/animation.js";
import { setTransitionIn, setTransitionOut } from "./js/transition.js";
import { setBorderWidthOn, setBorderWidthOff } from "./js/border-width.js";

const minutesDisplay = document.querySelector("#minutes");
const secondsDisplay = document.querySelector("#seconds");
const tenthsDisplay = document.querySelector("#tenths");

let timerRunning = false;
let interval;

const updateTimer = startTime => {
  const currentTime = Date.now();
  updateDisplay(currentTime - startTime);
};

const updateDisplay = elapsedTime => {
  writeToSpans(separateUnits(elapsedTime));
};

const separateUnits = elapsedTime => {
  const units = splitToUnits(elapsedTime);
  return units.map(unit => prepareDoubleDigitString(unit));
};

const splitToUnits = ms => {
  const minutes = Math.trunc(ms / 60000);
  ms -= minutes * 60000;
  const seconds = Math.trunc(ms / 1000);
  ms -= seconds * 1000;
  const tenths = Math.trunc((ms % 1000) / 10);
  return [minutes, seconds, tenths];
};

const prepareDoubleDigitString = num =>
  `${num}`.length === 1 ? `0${num}` : `${num}`;

const writeToSpans = units => {
  const [minutes, seconds, tenths] = units;
  minutesDisplay.innerHTML = minutes;
  secondsDisplay.innerHTML = seconds;
  tenthsDisplay.innerHTML = tenths;
};

// Control related

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

const toggleTimer = () => {
  timerRunning ? stopTimer() : startTimer();
};

const stopTimer = () => {
  clearInterval(interval);
  timerRunning = false;
  setBorderWidthOff();
  setTransitionOut();
  setAnimationOff();
};

const startTimer = () => {
  const startTime = Date.now();
  interval = setInterval(() => updateTimer(startTime), 10);
  timerRunning = true;
  setBorderWidthOn();
  setTransitionIn();
  setAnimationOn();
};

const buttonPress = buttonName => {
  selectStylesheet(buttonName);
};
