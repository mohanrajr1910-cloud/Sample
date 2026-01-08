import { chromium, test } from "@playwright/test";

test("Browser", async () => {
    const browser = await chromium.launch({

    });

    const context  = await browser.newContext();
    const page = await context.newPage();

    await page.goto('https://www.facebook.com/');
    await page.close();

    
} );