export const setAnimationOn = () => {
  setAnimation("var(--animation-on");
};

export const setAnimationOff = () => {
  setAnimation("var(--animation-off");
};

const setAnimation = animation => {
  document.documentElement.style.setProperty("--animation", animation);
};
