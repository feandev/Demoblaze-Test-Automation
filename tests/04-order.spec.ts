import { test, expect } from "@playwright/test";
import { SelectPage } from "../pages/select.page";
import { OrderPage } from "../pages/order.page";
import { orderData } from "../test-data/order.data";
import { AddToCart } from "../components/add-to-cart-component";
import { productsData } from "../test-data/products.data";

test("Select product and place an order", async ({ page }) => {
  await page.goto("/");
  const selectPage = new SelectPage(page);
  const addToCart = new AddToCart(page);
  const orderPage = new OrderPage(page);

  const orderName = orderData.orderName;
  const orderCountry = orderData.orderCountry;
  const orderCity = orderData.orderCity;
  const orderCard = orderData.orderCard;
  const orderMonth = orderData.orderMonth;
  const orderYear = orderData.orderYear;
  const totalPrice = `Total: ${productsData.latop.price}`;
  const successMsg = "Thank you for your purchase!";

  await selectPage.selectLaptop();
  await addToCart.addProduct();
  // due to page lag, extra hover action to ensure that product is present in cart
  await orderPage.deleteProduct.hover();
  await orderPage.placeOrder(
    orderName,
    orderCountry,
    orderCity,
    orderCard,
    orderMonth,
    orderYear
  );

  await expect(orderPage.priceTotal).toHaveText(totalPrice);
  await expect(orderPage.successHeading).toHaveText(successMsg);
});
