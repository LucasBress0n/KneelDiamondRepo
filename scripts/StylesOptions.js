import { pickStylesOptions } from "./TransientState.js";

const userChoiceChange = (changeEvent) => {
  if (changeEvent.target.name === "stylesOptions") {
    const updatedChoice = changeEvent.target.value;
    pickStylesOptions(parseInt(updatedChoice));
  }
};

export const StylesOptions = async () => {
  document.addEventListener("change", userChoiceChange);
  const response = await fetch("http://localhost:8088/styles");
  const allStyles = await response.json();
  let stylesHtml = `<section>\n`;
  for (const styles of allStyles) {
    stylesHtml += `\t\t<div><input type="radio" name="stylesOptions" value="${styles.id}"/> ${styles.style}</div>\n`;
  }
  stylesHtml += `</section>\n`;
  return stylesHtml;
};
