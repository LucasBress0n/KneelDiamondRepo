import { pickSizesOptions } from "./TransientState.js";

const userChoiceChange = (changeEvent) => {
  if (changeEvent.target.name === "sizeOptions") {
    const updatedChoice = changeEvent.target.value;
    pickSizesOptions(parseInt(updatedChoice));
  }
};

export const SizesOptions = async () => {
  document.addEventListener("change", userChoiceChange);
  const response = await fetch("http://localhost:8088/sizes");
  const allSizes = await response.json();
  let sizesHtml = `<section>\n`;
  for (const sizes of allSizes) {
    sizesHtml += `\t\t<div><input type="radio" name="sizeOptions" value="${sizes.id}"/>${sizes.carets}</div>\n`;
  }
  sizesHtml += `</section>\n`;
  return sizesHtml;
};
