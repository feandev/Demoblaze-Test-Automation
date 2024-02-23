import { Page } from "@playwright/test";
import { productsData } from "../test-data/products.data";

export class SelectPage {
  constructor(private page: Page) {}

  phonesCategory = this.page.getByRole("link", { name: "Phones" });
  phoneModel = this.page.getByRole("link", { name: productsData.phone.model });
  phoneHeadingText = this.page.getByRole("heading", {
    name: productsData.phone.model,
  });

  laptopCategory = this.page.getByRole("link", { name: "Laptops" });
  laptopModel = this.page.getByRole("link", { name: productsData.latop.model });
  laptopHeadingText = this.page.getByRole("heading", {
    name: productsData.latop.model,
  });

  monitorCategory = this.page.getByRole("link", { name: "Monitors" });
  monitorModel = this.page.getByRole("link", {
    name: productsData.monitor.model,
  });
  monitorHeadingText = this.page.getByRole("heading", {
    name: productsData.monitor.model,
  });

  addToCartButton = this.page.getByRole("link", { name: "Add to cart" });
}
