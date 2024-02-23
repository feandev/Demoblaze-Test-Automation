import { test, expect } from "@playwright/test";
import { userData } from "../test-data/user.data";
import { LoginPage } from "../pages/login.page";

test("successful login", async ({ page }) => {
  await page.goto("/");

  const userName = userData.userName;
  const userPassword = userData.userPassword;
  const expectedWelcomeMsg = `Welcome ${userName}`;
  const loginPage = new LoginPage(page);

  await loginPage.loginLink.click();
  await loginPage.loginUsername.fill(userName);
  await loginPage.loginPassword.fill(userPassword);
  await loginPage.loginButton.click();

  await expect(loginPage.loginWelcomeMsg).toHaveText(expectedWelcomeMsg);
});
