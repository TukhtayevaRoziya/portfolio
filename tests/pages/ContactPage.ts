import { expect, Locator, Page } from "@playwright/test";

export class ContactPage {
  readonly page: Page;
  readonly nameInput: Locator;
  readonly emailInput: Locator;
  readonly messageInput: Locator;
  readonly sendBtn: Locator;
  readonly successToast: Locator;
  readonly errorToast: Locator;
  constructor(page: Page) {
    this.page = page;
    this.nameInput = page.getByTestId("contact-name-input");
    this.emailInput = page.getByTestId("contact-email-input");
    this.messageInput = page.getByTestId("contact-message-input");
    this.sendBtn = page.getByTestId("contact-submit-btn");
    this.successToast = page.locator(".Toastify__toast--success");
    this.errorToast = page.locator(".Toastify__toast--error");
  }

  async navigate() {
    await this.page.goto("#/contact");
  }

  async mockContactAPISuccess() {
    await this.page.route(
      "https://portfolio-api-two-rosy.vercel.app/api/contact",
      async (route) => {
        await route.fulfill({
          status: 200,
          contentType: "application/json",
          body: JSON.stringify({ message: "Success" }),
        });
      },
    );
  }

  async fillForm(name: string, email: string, message: string) {
    await this.nameInput.fill(name);
    await this.emailInput.fill(email);
    await this.messageInput.fill(message);
  }

  async submitForm() {
    await this.sendBtn.click();
  }

  async getEmailValidation() {
    const isValid = await this.emailInput.evaluate((el: HTMLInputElement) =>
      el.checkValidity(),
    );

    const validationMessage = await this.emailInput.evaluate(
      (el: HTMLInputElement) => el.validationMessage,
    );

    return { isValid, validationMessage };
  }
  async expectSuccessToast(expectedText: string) {
    await expect(this.successToast).toBeVisible();
    await expect(this.successToast).toContainText(expectedText);
  }

  async expectNoErrorToast() {
    await expect(this.errorToast).not.toBeVisible();
  }

  async expectNoValidationError() {
    const validationMessage = await this.emailInput.evaluate(
      (el: HTMLInputElement) => el.validationMessage,
    );
    expect(validationMessage).toBe("");
  }

  async expectFormToBeCleared() {
    await expect(this.nameInput).toHaveValue("");
    await expect(this.emailInput).toHaveValue("");
    await expect(this.messageInput).toHaveValue("");
  }
}
