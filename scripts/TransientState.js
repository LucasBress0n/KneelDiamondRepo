// Set up the transient state data structure and provide initial valuess
const transientState = {
  metalsID: 0,
  sizesID: 0,
  stylesID: 0,
};

// Functions to modify each property of transient state

export const pickMetalOptions = (pickedItem) => {
  transientState.metals = pickedItem;
  console.log(transientState);
};

export const pickSizesOptions = (pickedItem) => {
  transientState.sizes = pickedItem;
  console.log(transientState);
};

export const pickStylesOptions = (pickedItem) => {
  transientState.styles = pickedItem;
  console.log(transientState);
};

// Function to convert transient state to permanent state
export const saveOrder = async () => {
  const postOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(transientState),
  };
  const response = await fetch("http://localhost:8088/orders", postOptions);

  const customEvent = new CustomEvent("newOrderGenerated");
  document.dispatchEvent(customEvent);
};
