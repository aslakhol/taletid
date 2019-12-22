import { setAnimationOn, setAnimationOff } from "./animation.js";
import { setTransitionIn, setTransitionOut } from "./transition.js";
import { setBorderWidthOn, setBorderWidthOff } from "./border-width.js";

export const stopTimer = interval => {
  clearInterval(interval);
  setBorderWidthOff();
  setTransitionOut();
  setAnimationOff();
};

export const startTimer = () => {
  const startTime = Date.now();
  setBorderWidthOn();
  setTransitionIn();
  setAnimationOn();
  return setInterval(() => updateTimer(startTime), 10);
};

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

  const minutesDisplay = document.querySelector("#minutes");
  const secondsDisplay = document.querySelector("#seconds");
  const tenthsDisplay = document.querySelector("#tenths");

  minutesDisplay.innerHTML = minutes;
  secondsDisplay.innerHTML = seconds;
  tenthsDisplay.innerHTML = tenths;
};
