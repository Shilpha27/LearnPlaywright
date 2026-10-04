import {firefox, test} from '@playwright/test';

test("Login", async()=>{
  const browser= await firefox.launch({headless:false});// to launch engine.
  const context=await browser.newContext();
  const page=await context.newPage();

  await page.goto("https://ecommerce-playground.lambdatest.io/")
      await page.waitForTimeout(5000)

  await page.hover("(//span[contains(text(),'My account')])[2]")
  await page.click("text=Login")
  await page.fill("//input[@placeholder='E-Mail Address']","tharanishilpa@gmail.com")
  await page.fill("//input[@name='password']","111111")
  await page.click("//input[@type='submit']")

      await page.waitForTimeout(5000)

     const Context2=await browser.newContext();
    const newPage = await Context2.newPage();

    await newPage.goto("https://ecommerce-playground.lambdatest.io/index.php?route=account/login")
      await newPage.waitForTimeout(5000);







})