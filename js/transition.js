export const setTransitionIn = () => {
  setTransition("var(--transition-in)");
};

export const setTransitionOut = () => {
  setTransition("var(--transition-out)");
};

const setTransition = transition => {
  document.documentElement.style.setProperty("--transition", transition);
};
