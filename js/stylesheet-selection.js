export const selectStylesheet = name => {
  [...document.getElementsByTagName("link")]
    .filter(link => isStylesheet(link))
    .map((link, i) => setActiveOrNot(link, name, i));
};

const isStylesheet = link => {
  return (
    link.getAttribute("rel").indexOf("style") != -1 &&
    link.getAttribute("title")
  );
};

const setActiveOrNot = (link, name, i) => {
  const buttons = document.getElementsByClassName("button");

  if (link.getAttribute("title") === name) {
    link.disabled = false;
    buttons[i].style.borderColor = "var(--selected-button-border)";
  } else {
    link.disabled = true;
    buttons[i].style.borderColor = "var(--unselected-button-border)";
  }
};
