import { Orders } from "./DisplayCustomOrders.js";
import { MetalOptions } from "./MetalsOptions.js";
import { createOrderButton } from "./SaveOrder.js";
import { SizesOptions } from "./SizesOptions.js";
import { StylesOptions } from "./StylesOptions.js";

const render = async () => {
  const metalOptionsHTML = await MetalOptions();
  const sizesOptionsHTML = await SizesOptions();
  const stylesOptionsHTML = await StylesOptions();
  const createButtonHTML = await createOrderButton();
  const customOrderHTML = await Orders();

  const composedHTML = `
        <h1>Kneel Diamonds</h1>

        <article class="choices">
            <section class="choices__metals options">
                <h2>Metals</h2>
                ${metalOptionsHTML}
            </section>

            <section class="choices__sizes options">
                <h2>Sizes</h2>
                ${sizesOptionsHTML}
            </section>

            <section class="choices__styles options">
                <h2>Styles</h2>
                ${stylesOptionsHTML}
            </section>
        </article>

        <article class="order">
            ${createButtonHTML}
        </article>

        <article class="customOrders">
            <h2>Custom Jewelry Orders</h2>
            ${customOrderHTML}
        </article>
    `;
  const container = document.querySelector("#container");
  container.innerHTML = composedHTML;

  document.addEventListener("newOrderGenerated", render);
};

render();
