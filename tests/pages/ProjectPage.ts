import { expect, Locator, Page } from "@playwright/test";

export class ProjectPage {
  readonly page: Page;
  readonly images;

  constructor(page: Page) {
    this.page = page;
    this.images = page.locator(".ant-image-img");
  }

  async navigate() {
    await this.page.goto("#/project");
  }

  async verifyAllImagesLoaded() {
    await this.images.first().waitFor({ state: "visible" });
    const count = await this.images.count();
    expect(count).toBeGreaterThan(0);
    for (let i = 0; i < count; i++) {
      const img = this.images.nth(i);
      const isLoaded = await img.evaluate((image: HTMLImageElement) => {
        return image.complete && image.naturalWidth > 0;
      });
      expect(isLoaded).toBeTruthy();
    }
  }
}
