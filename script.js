const minutesDisplay = document.querySelector("#minutes");
const secondsDisplay = document.querySelector("#seconds");

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
  return [minutes, seconds];
};

const prepareDoubleDigitString = num =>
  `${num}`.length === 1 ? `0${num}` : `${num}`;

const writeToSpans = units => {
  const [minutes, seconds] = units;
  minutesDisplay.innerHTML = minutes;
  secondsDisplay.innerHTML = seconds;
};

// Control related

const toggleTimer = () => {
  timerRunning ? stopTimer() : startTimer();
};

const stopTimer = () => {
  clearInterval(interval);
  timerRunning = false;
  turnOffBorder()
};

const startTimer = () => {
  const startTime = Date.now();
  interval = setInterval(() => updateTimer(startTime), 10);
  timerRunning = true;
  turnOnBorder()
};

const setBorderWidth = width => {
  document.documentElement.style.setProperty("--border-width", width);
};

const turnOffBorder = () => {
  setBorderWidth("var(--border-width-off)")
}

const turnOnBorder = () => {
  setBorderWidth("var(--border-width-on)")
}

document.addEventListener("click", toggleTimer);
document.onkeypress = e => {
  if (e.code === "Space") {
    toggleTimer();
  }
};
