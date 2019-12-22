export const toggleTimerHighlight = () => {
  if (timerIsHighlighted()) {
    setHighlightOff();
  } else {
    setHighlightOn();
  }
};

const timerIsHighlighted = () => {
  const currentTextColor = getComputedStyle(
    document.documentElement
  ).getPropertyValue("--text-color");
  const highlightColor = getComputedStyle(
    document.documentElement
  ).getPropertyValue("--highlight-color");

  return currentTextColor === highlightColor;
};

const setHighlight = highlight => {
  document.documentElement.style.setProperty("--text-color", highlight);
};

const setHighlightOn = () => {
  setHighlight("var(--highlight-color");
};

const setHighlightOff = () => {
  setHighlight("var(--dark-color");
};
