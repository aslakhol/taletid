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

const setBorderWidth = width => {
  document.documentElement.style.setProperty("--border-width", width);
};

const setBorderWidthOn = () => {
  setBorderWidth("var(--border-width-on)");
};

const setBorderWidthOff = () => {
  setBorderWidth("var(--border-width-off)");
};

const setTransition = transition => {
  document.documentElement.style.setProperty("--transition", transition);
};

const setTransitionIn = () => {
  setTransition("var(--transition-in)");
};

const setTransitionOut = () => {
  setTransition("var(--transition-out)");
};

const setAnimation = animation => {
  document.documentElement.style.setProperty("--animation", animation);
};

const setAnimationOn = () => {
  setAnimation("var(--animation-on");
};

const setAnimationOff = () => {
  setAnimation("var(--animation-off");
};

document.addEventListener("click", toggleTimer);
document.onkeypress = e => {
  if (e.code === "Space") {
    toggleTimer();
  }
};
