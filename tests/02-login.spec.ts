import { test, expect } from "@playwright/test";
import { userData } from "../test-data/user.data";
import { LoginPage } from "../pages/login.page";

test("successful login", async ({ page }) => {
  await page.goto("/");

  const userName = userData.userName;
  const userPassword = userData.userPassword;
  const expectedWelcomeMsg = `Welcome ${userName}`;
  const loginPage = new LoginPage(page);

  loginPage.loginAction(userName, userPassword);

  await expect(loginPage.loginWelcomeMsg).toHaveText(expectedWelcomeMsg);
});
