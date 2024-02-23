import { test, expect } from "@playwright/test";
import { SignUp } from "../pages/signup.page";
import { userData } from "../test-data/user.data";

test("successful sign up", async ({ page }) => {
  await page.goto("/");

  const userName = userData.userName;
  const userPassword = userData.userPassword;
  const signUp = new SignUp(page);

  await signUp.signUpLink.click();
  await signUp.signUpUsername.fill(userName);
  await signUp.signUpPassword.fill(userPassword);
  await signUp.singUpButton.click();
});
