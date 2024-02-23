import { test, expect } from "@playwright/test";
import { loginData } from "../test-data/login.data";
import { LoginPage } from "../pages/login.page";

test("Successful log in", async ({ page }) => {
  await page.goto("/");

  const userName = loginData.userName;
  const userPassword = loginData.userPassword;
  const expectedWelcomeMsg = `Welcome ${userName}`;
  const loginPage = new LoginPage(page);

  loginPage.loginAction(userName, userPassword);

  await expect(loginPage.loginWelcomeMsg).toHaveText(expectedWelcomeMsg);
});
