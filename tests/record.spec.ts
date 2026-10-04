import { test } from '@playwright/test';

test('record', async ({ page }) => {
  await page.goto('https://ecommerce-playground.lambdatest.io/');

   await page.waitForTimeout(3000)

await page.hover("(//span[@class='title' and normalize-space()='My account'])[2]");
  await page.getByRole('link', { name: 'Login' }).click();
  await page.getByRole('textbox', { name: 'E-Mail Address' }).click();
  await page.getByRole('textbox', { name: 'E-Mail Address' }).fill('tharanishilpa@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('111111');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: ' Edit your account' }).click();
  await page.getByRole('textbox', { name: 'First Name *' }).click();
  await page.getByRole('textbox', { name: 'First Name *' }).fill('shilpha tharani ');
  await page.getByRole('button', { name: 'Continue' }).click();
   await page.waitForTimeout(3000)

await page.hover("(//span[@class='title' and normalize-space()='My account'])[2]");
  await page.getByRole('link', { name: 'Logout', exact: true }).click();
   await page.waitForTimeout(3000)

});
