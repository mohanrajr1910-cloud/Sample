import{chromium,test}from "@playwright/test"

test ('Playwright inbuilt locater', async ({page})=>{
    const browser = await chromium.launch({
        headless:false
    });

    await page.goto("https://www.facebook.com/");
    const email = page.getByLabel("Email address or phone number");
    await email.fill("mrlm1910@gmail.com");
    const password = page.getByTestId("royal-pass");
    await  password.fill("123456789");
    const login = page.getByTestId("royal-login-button");
    await login.click();
    


})