import { test, expect } from "@playwright/test";
import { SelectPage } from "../pages/select.page";
import { productsData } from "../test-data/products.data";
import { loginData } from "../test-data/login.data";
import { LoginPage } from "../pages/login.page";

test.describe("Select three different products and add them to cart", () => {
  let loginPage: LoginPage;
  let selectPage: SelectPage;
  let productName: string;

  test.beforeEach(async ({ page }) => {
    await page.goto("/");
    const userName = loginData.userName;
    const userPassword = loginData.userPassword;
    loginPage = new LoginPage(page);
    await loginPage.loginAction(userName, userPassword);
    selectPage = new SelectPage(page);
  });

  test.afterEach(async ({ page }) => {
    await selectPage.addToCartButton.click();
    await selectPage.homePageLink.click();
  });

  test("Go to phones category and select phone", async ({ page }) => {
    // Arrange
    productName = productsData.phone.model;

    // Act
    await selectPage.phonesCategory.click();
    await selectPage.phoneModel.click();

    // Assert

    await expect(selectPage.phoneHeadingText).toHaveText(productName);
  });

  test("Go to laptops category and select laptop", async ({ page }) => {
    productName = productsData.latop.model;

    await selectPage.laptopCategory.click();
    await selectPage.laptopModel.click();

    await expect(selectPage.laptopHeadingText).toHaveText(productName);
  });

  test("Go to monitors category and select monitor", async ({ page }) => {
    productName = productsData.monitor.model;

    await selectPage.monitorCategory.click();
    await selectPage.monitorModel.click();

    await expect(selectPage.monitorHeadingText).toHaveText(productName);
  });
});
