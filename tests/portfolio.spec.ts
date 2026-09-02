/* eslint-disable testing-library/prefer-screen-queries */
import { test, expect } from "@playwright/test";
import { SocialMedia } from "./pages/SocialMedia";
import { ContactPage } from "./pages/ContactPage";
import { HeaderComponent } from "./pages/HeaderComponent";
import { ProjectPage } from "./pages/ProjectPage"; // Agar ProjectsPage yaratgan bo'lsangiz

test.describe("Contact Page test", () => {
  let contactPage: ContactPage;

  test.beforeEach(async ({ page }) => {
    contactPage = new ContactPage(page);
    await contactPage.navigate();
  });

  test("Verify validation error for invalid email format", async () => {
    await contactPage.fillForm("Roziya", "email", "Some message here!");
    await contactPage.submitForm();

    const { isValid, validationMessage } = await contactPage.getEmailValidation();
    expect(isValid).toBeFalsy();
    
    // Har bir brauzer har xil xabar berganligi sababli (Chrome: '@', Firefox/WebKit: 'email address'):
    expect(validationMessage).toMatch(/(@|email address)/i);
  });

  test("Verify no error on successful form submission", async () => {
    await contactPage.mockContactAPISuccess();
    await contactPage.fillForm(
      "Roziya",
      "roziya@gmail.com",
      "Salom, bu test xabari! 🔎✅😄 123@"
    );
    await contactPage.submitForm();

    await contactPage.expectNoErrorToast();
    await contactPage.expectNoValidationError();
    await contactPage.expectSuccessToast("Iltimos! Emailingizni tekshiring!");
    await contactPage.expectFormToBeCleared();
  });
});

test.describe("Header Component test", () => {
  let headerComponent: HeaderComponent;

  test.beforeEach(async ({ page }) => {
    await page.goto("/portfolio#/");
    headerComponent = new HeaderComponent(page);
  });

  test("All UI elements update to selected language without missing translations", async () => {
    await headerComponent.changing("en", "Hi, I'm Tukhtayeva Roziya");
    await headerComponent.changing("uz", "Salom, Men To'xtayeva Roziya");
    await headerComponent.changing("ru", "Привет, я Розия Тухтаева");
  });

  test("Verify selected language persists after page refresh", async ({ page }) => {
    await headerComponent.selectLang("en");
    await page.reload();
    await headerComponent.expectLang("en");
  });

  test("Verify clicking theme button switches between Light and Dark mode", async () => {
    await headerComponent.toggleTheme(true);
    await headerComponent.expectDarkMode(true);
    await headerComponent.toggleTheme(false);
    await headerComponent.expectDarkMode(false);
  });

  test("Verify selected theme persists after page refresh", async ({ page }) => {
    await headerComponent.toggleTheme(true);
    await page.reload();
    await headerComponent.expectDarkMode(true);
  });

  test("Verify initial page load respects system default preference", async ({ page }) => {
    await page.emulateMedia({ colorScheme: "dark" });
    await page.goto("/portfolio#/"); // Emulyatsiyadan keyin sahifaga kirish shart!
    await headerComponent.expectSystemThemeApplied();
  });
});

test.describe("Resume & Social Links", () => {
  test("Verify social media links (GitHub, LinkedIn, Telegram) open in a new tab", async ({ page }) => {
    await page.goto("/portfolio#/resume");
    let smLink = new SocialMedia(page);
    await smLink.newTab("https://t.me/TukhtayevaRoziya");
    await smLink.newTab("https://www.linkedin.com/in/roziya-tukhtayeva-07b447241/");
    await smLink.newTab("https://github.com/tukhtayevaroziya");
    await smLink.newTab("https://leetcode.com/Roziya/");
  });
});

test.describe("Projects Page", () => {
  test("Verify project images are loaded successfully", async ({ page }) => {
    const projectsPage = new ProjectPage(page);
    await projectsPage.navigate();
    await projectsPage.verifyAllImagesLoaded();
  });
});