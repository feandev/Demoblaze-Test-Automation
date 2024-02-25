import { Page } from "@playwright/test";

export class OrderPage {
  constructor(private page: Page) {}

  orderBtn = this.page.getByRole("button", { name: "Place Order" });
  orderName = this.page.getByLabel("Total:");
  orderCountry = this.page.getByLabel("Country:");
  orderCity = this.page.getByLabel("City:");
  orderCardNumber = this.page.getByLabel("Credit card:");
  orderMonth = this.page.getByLabel("Month:");
  orderYear = this.page.getByLabel("Year:");
  purchaseBtn = this.page.getByRole("button", { name: "Purchase" });
  deleteProduct = this.page.getByRole("link", { name: "Delete" });
  priceTotal = this.page.locator("#totalm");
  successHeading = this.page.getByRole("heading", {
    name: "Thank you for your purchase!",
  });

  async placeOrder(
    orderName: string,
    orderCountry: string,
    orderCity: string,
    cardNumber: string,
    orderMonth: string,
    orderYear: string
  ) {
    await this.orderBtn.click();
    await this.orderName.fill(orderName);
    await this.orderCountry.fill(orderCountry);
    await this.orderCity.fill(orderCity);
    await this.orderCardNumber.fill(cardNumber);
    await this.orderMonth.fill(orderMonth);
    await this.orderYear.fill(orderYear);
    await this.purchaseBtn.click();
  }
}
