export const setBorderWidthOn = () => {
  setBorderWidth("var(--border-width-on)");
};

export const setBorderWidthOff = () => {
  setBorderWidth("var(--border-width-off)");
};

const setBorderWidth = width => {
  document.documentElement.style.setProperty("--border-width", width);
};
