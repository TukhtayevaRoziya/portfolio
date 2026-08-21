/* eslint-disable testing-library/prefer-screen-queries */
import { test, expect } from "@playwright/test";
import { LANG, socialMedia } from "./Overall";

test.beforeEach("Page goto link", async ({ page }) => {
  await page.goto("http://localhost:3000/portfolio#/");
});

test("All UI elements update to selected language without missing translations", async ({
  page,
}) => {
  const lang = new LANG(page);
  await lang.changing("en", "Hi, I'm Tukhtayeva Roziya");
  await lang.changing("uz", "Salom, Men To'xtayeva Roziya");
  await lang.changing("ru", "Привет, я Розия Тухтаева");
});

test("Verify selected language persists after page refresh", async ({
  page,
}) => {
  await page.locator('select[name="lang"]').selectOption("en");
  await page.reload();
  await expect(page.locator('select[name="lang"]')).toHaveValue("en");
});

test("Verify clicking theme button switches between Light and Dark mode", async ({
  page,
}) => {
  await page.locator('input[type="checkbox"]').check();
  await expect(page.locator("body")).toHaveClass("dark");
  await page.locator('input[type="checkbox"]').uncheck();
  await expect(page.locator("body")).not.toHaveClass("dark");
});

test("Verify selected theme persists after page refresh", async ({ page }) => {
  await page.locator('input[type="checkbox"]').check();
  await page.reload();
  await expect(page.locator("body")).toHaveClass("dark");
});

test("Social media linki yangi tabda to'g'ri ochilishi kerak", async ({
  page,
}) => {
  await page.goto("http://localhost:3000/portfolio#/resume");
  let smLink = new socialMedia(page);
  await smLink.newTab("https://t.me/TukhtayevaRoziya");
  await smLink.newTab(
    "https://www.linkedin.com/in/roziya-tukhtayeva-07b447241/",
  );
  await smLink.newTab("https://github.com/tukhtayevaroziya");
  await smLink.newTab("https://leetcode.com/Roziya/");
});

test("Verify validation error for invalid email format", async ({ page }) => {
  await page.goto("http://localhost:3000/portfolio#/");
  await page.getByRole("link", { name: "contact" }).click();
  await page.getByRole("textbox", { name: "Ismingizni kiriting!" }).click();
  await page
    .getByRole("textbox", { name: "Ismingizni kiriting!" })
    .fill("Roziya");
  await page.getByRole("textbox", { name: "Emailingizni kiriting!" }).click();
  await page
    .getByRole("textbox", { name: "Emailingizni kiriting!" })
    .fill("sddfsfsdf");
  await page.getByRole("textbox", { name: "Xabaringizni kiriting!" }).click();
  await page
    .getByRole("textbox", { name: "Xabaringizni kiriting!" })
    .fill("sdfsdf");
  await page.getByRole("button", { name: "Xabar yuborish" }).dblclick();
  const isValid = await page
    .getByRole("textbox", { name: "Emailingizni kiriting!" })
    .evaluate((el: HTMLInputElement) => el.checkValidity());
  expect(isValid).toBeFalsy();

  const validationMessage = await page
    .getByRole("textbox", { name: "Emailingizni kiriting!" })
    .evaluate((el: HTMLInputElement) => el.validationMessage);
  expect(validationMessage).toContain("@");
  await page.getByRole("textbox", { name: "Emailingizni kiriting!" }).click();
  await page
    .getByRole("textbox", { name: "Emailingizni kiriting!" })
    .fill("sddfsfsdf@gmail.com");
  page.once("dialog", (dialog) => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole("button", { name: "Xabar yuborish" }).click();
  const isValid1 = await page
    .getByRole("textbox", { name: "Emailingizni kiriting!" })
    .evaluate((el: HTMLInputElement) => el.checkValidity());
  expect(isValid1).toBeTruthy();

  const validationMessage1 = await page
    .getByRole("textbox", { name: "Emailingizni kiriting!" })
    .evaluate((el: HTMLInputElement) => el.validationMessage);
  expect(validationMessage1).not.toContain("@");
});

test("CONT-04: Message maydoniga matn va emojilar yozilishi", async ({
  page,
}) => {
  await page.goto("http://localhost:3000/portfolio#/contact");

  const textarea = page.locator('textarea[id="message"]');
  const testText = "Salom, bu test xabari! 🚀 Proyekt juda zo'r chiqibdi! 👍";

  await textarea.fill(testText);

  await expect(textarea).toHaveValue(testText);
});

test("images to be downloaded", async ({ page }) => {
  await page.goto("http://localhost:3000/portfolio#/project");
  const images = page.locator(".ant-image-img");

  await images.first().waitFor({ state: "visible" });
  const count = await images.count();
  expect(count).toBeGreaterThan(0);
  for (let i = 0; i < count; i++) {
    const img = images.nth(i);
    const isLoaded = await img.evaluate((image: HTMLImageElement) => {
      return image.complete && image.naturalWidth > 0;
    });
    expect(isLoaded).toBeTruthy();
  }
});
