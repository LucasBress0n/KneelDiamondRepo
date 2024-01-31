import { saveOrder } from "./TransientState.js";

const userSubmitButtonClicked = (clickEvent) => {
  if (clickEvent.target.id == "orderBtn") {
    saveOrder();
    console.log(`Order Placed`);
  }
};

export const createOrderButton = () => {
  document.addEventListener("click", userSubmitButtonClicked);
  return `<button id="orderBtn">Place Order</button>`;
};
