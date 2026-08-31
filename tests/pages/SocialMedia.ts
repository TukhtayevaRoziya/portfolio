import { expect, Page } from "@playwright/test";

export class SocialMedia {
  page: Page;
  constructor(page: Page) {
    this.page = page;
  }

  async newTab(link: string) {
    const telegramLink = this.page.locator(`a[href="${link}"]`).first();

    await expect(telegramLink).toBeVisible();
    await expect(telegramLink).toHaveAttribute("target", "_blank");
    await expect(telegramLink).toHaveAttribute("href", link);
  }
}