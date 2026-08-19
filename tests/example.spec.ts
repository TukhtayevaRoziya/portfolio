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
  await smLink.newTab("https://www.linkedin.com/in/roziya-tukhtayeva-07b447241/");
  await smLink.newTab("https://github.com/tukhtayevaroziya");
  await smLink.newTab("https://leetcode.com/Roziya/");
});
