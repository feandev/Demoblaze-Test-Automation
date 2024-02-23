import { Page } from "@playwright/test";

export class LoginPage {
  constructor(private page: Page) {}

  loginLink = this.page.locator("#login2");
  loginUsername = this.page.locator("#loginusername");
  loginPassword = this.page.locator("#loginpassword");
  loginButton = this.page.getByRole("button", { name: "Log in" });
  loginWelcomeMsg = this.page.locator("#nameofuser");

  async loginAction(userName: string, userPassword: string) {
    await this.loginLink.click();
    await this.loginUsername.fill(userName);
    await this.loginPassword.fill(userPassword);
    await this.loginButton.click();
  }
}
