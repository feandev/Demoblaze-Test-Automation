import { test, expect } from "@playwright/test";
import { SelectPage } from "../pages/select.page";
import { productsData } from "../test-data/products.data";

test.describe("Select product from products category", () => {
  let selectPage: SelectPage;
  let productName: string;

  test.beforeEach(async ({ page }) => {
    await page.goto("/");
    selectPage = new SelectPage(page);
  });

  test.afterEach(async ({ page }) => {
    await selectPage.homePageLink.click();
  });

  test("Select phone", async ({ page }) => {
    productName = productsData.phone.model;

    await selectPage.phonesCategory.click();
    await selectPage.phoneModel.click();

    await expect(selectPage.phoneHeadingText).toHaveText(productName);
  });

  test("Select laptop", async ({ page }) => {
    productName = productsData.latop.model;

    await selectPage.laptopCategory.click();
    await selectPage.laptopModel.click();

    await expect(selectPage.laptopHeadingText).toHaveText(productName);
  });

  test("Select monitor", async ({ page }) => {
    productName = productsData.monitor.model;

    await selectPage.monitorCategory.click();
    await selectPage.monitorModel.click();

    await expect(selectPage.monitorHeadingText).toHaveText(productName);
  });
});
