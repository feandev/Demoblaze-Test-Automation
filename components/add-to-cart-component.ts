import { Page } from "@playwright/test";

export class AddToCart {
  constructor(private page: Page) {}

  addToCartButton = this.page.getByRole("link", { name: "Add to cart" });
  cartLink = this.page.getByRole("link", { name: "Cart", exact: true });

  async addProduct() {
    await this.addToCartButton.click();
    await this.cartLink.click();
  }
}
