import { pickMetalOptions } from "./TransientState.js";

const userChoiceChange = (changeEvent) => {
  if (changeEvent.target.name === "metalOptions") {
    const updatedChoice = changeEvent.target.value;
    pickMetalOptions(parseInt(updatedChoice));
  }
};

export const MetalOptions = async () => {
  document.addEventListener("change", userChoiceChange);
  const response = await fetch("http://localhost:8088/metals");
  const metals = await response.json();

  let metalHtml = "";

  // Use map() to generate new array of strings
  const divStringArray = metals.map((metal) => {
    return `<div>
              <input type='radio' name='metalOptions' value='${metal.id}' /> ${metal.metal}
          </div>`;
  });

  // This function needs to return a single string, not an array of strings
  metalHtml += divStringArray.join("");

  return metalHtml;
};
