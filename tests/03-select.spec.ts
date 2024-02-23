import { test, expect } from "@playwright/test";
import { SelectPage } from "../pages/select.page";
import { productsData } from "../test-data/products.data";

test.describe("Select three different products and add them to cart", () => {
  let selectPage: SelectPage;
  let productName: string;
  let productPrice: string;
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
    selectPage = new SelectPage(page);
  });

  test.afterEach(async ({ page }) => {
    await selectPage.addToCartButton.click();
  });

  test("select phone", async ({ page }) => {
    // Arrange
    productName = productsData.phone.model;
    productPrice = productsData.phone.price;

    // Act
    await selectPage.phonesCategory.click();
    await selectPage.phoneModel.click();

    // Assert
    await expect(selectPage.phoneHeadingText).toHaveText(productName);
  });

  test("select laptop", async ({ page }) => {
    productName = productsData.latop.model;
    productPrice = productsData.latop.price;

    await selectPage.laptopCategory.click();
    await selectPage.laptopModel.click();

    await expect(selectPage.laptopHeadingText).toHaveText(productName);
  });

  test("select monitor", async ({ page }) => {
    productName = productsData.monitor.model;
    productPrice = productsData.monitor.price;

    await selectPage.monitorCategory.click();
    await selectPage.monitorModel.click();

    await expect(selectPage.monitorHeadingText).toHaveText(productName);
  });
});
