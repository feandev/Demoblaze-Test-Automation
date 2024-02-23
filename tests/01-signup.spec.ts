import { test, expect } from "@playwright/test";
import { SignUp } from "../pages/signup.page";
import { loginData } from "../test-data/login.data";

test("Successful sign up", async ({ page }) => {
  await page.goto("/");

  const userName = loginData.userName;
  const userPassword = loginData.userPassword;
  const signUp = new SignUp(page);

  await signUp.singUpAction(userName, userPassword);

});
