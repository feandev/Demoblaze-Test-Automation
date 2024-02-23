import { Page } from "@playwright/test";

export class LoginPage {
  constructor(private page: Page) {}

  loginLink = this.page.locator("#login2");
  loginUsername = this.page.locator("#loginusername");
  loginPassword = this.page.locator("#loginpassword");
  loginButton = this.page.getByRole("button", { name: "Log in" });
  loginWelcomeMsg = this.page.locator("#nameofuser");
}
