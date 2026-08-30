import { expect, Page } from "@playwright/test";

export class LANG {
  page: Page;
  constructor(page: Page) {
    this.page = page;
  }

  async changing(lang: string, txt: string) {
    await this.page.locator('select[name="lang"]').selectOption(lang);

    await expect(
      // eslint-disable-next-line testing-library/prefer-screen-queries
      this.page.getByRole("heading", { name: txt }),
    ).toBeVisible();
  }
}

export class socialMedia {
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