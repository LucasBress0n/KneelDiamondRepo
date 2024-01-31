export const Orders = async () => {
  const fetchResponse = await fetch("http://localhost:8088/orders");
  const orders = await fetchResponse.json();

  let ordersHTML = "";
  let ordersHtmlArray = orders.map((order) => {
    return `<div class="customDisplayOrder" data-id=${order.id}>
              <section data-orderId="${order.id}">Order -#${order.id}</section>
          </div>`;
  });

  ordersHTML += ordersHtmlArray.join("");

  return ordersHTML;
};
