import { Page } from "@playwright/test";

export class SignUp {
  constructor(private page: Page) {}

  signUpLink = this.page.getByRole("link", { name: "Sign up" });
  signUpUsername = this.page.getByLabel("Username:");
  signUpPassword = this.page.getByLabel("Password:");
  singUpButton = this.page.getByRole("button", { name: "Sign up" });
}
