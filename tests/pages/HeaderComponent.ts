import { expect, Locator, Page } from "@playwright/test";

export class HeaderComponent {
  readonly page: Page;
  readonly langSelect: Locator;
  readonly themeToggle: Locator;
  readonly body: Locator;
  constructor(page: Page) {
    this.page = page;
    this.langSelect = page.locator('select[name="lang"]');
    this.themeToggle = page.locator('input[type="checkbox"]');
    this.body = page.locator("body");
  }

  async changing(lang: string, txt: string) {
    await this.page.locator('select[name="lang"]').selectOption(lang);

    await expect(this.page.getByRole("heading", { name: txt })).toBeVisible();
  }

  async selectLang(lang: string) {
    await this.langSelect.selectOption(lang);
  }

  async expectLang(expectedLang: string) {
    await expect(this.langSelect).toHaveValue(expectedLang);
  }

  async toggleTheme(enableDark: boolean) {
    if (enableDark) {
      await this.themeToggle.check();
    } else {
      await this.themeToggle.uncheck();
    }
  }

  async expectDarkMode(isDark: boolean) {
    if (isDark) {
      await expect(this.body).toHaveClass("dark");
    } else {
      await expect(this.body).not.toHaveClass("dark");
    }
  }

  async expectSystemThemeApplied() {
    const bgColor = await this.body.evaluate((el) => {
      return window.getComputedStyle(el).backgroundColor;
    });

    expect(bgColor).not.toBe("rgb(255, 255, 255)");
  }
}
