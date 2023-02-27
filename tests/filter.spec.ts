import { test, expect } from '@playwright/test';

test('filter', async ({ page }) => {
  test.setTimeout(120000);

  // Open page refer baseURL on config file
  await page.goto('/th/life-insurance');
  
  // Accept all cookies
  await page.locator('xpath=//html/body/div[8]');
  await page.locator('//*[@id="mtl-cookies-accept-all"]').click(); //if using getByText can use only TH page

  // TRUE case
  // Click filter button
  await page.getByRole('button', { name: 'ตัวกรอง' }).click();
  await page.locator('xpath=//html/body/div[9]');
  await page.waitForTimeout(2000);
  // Click any filter button
  await page.getByRole('dialog').getByText('ลดหย่อนภาษี').click();
  await page.getByRole('button', { name: 'ตกลง' }).click();
  // Display filter option that selected
  const filteroption = page.locator('//*[@id="filter-selected"]')
  await expect(filteroption).toContainText('ลดหย่อนภาษี');
  // Display filter result
  const result1 = page.locator('//*[@id="description"]/h1');
  await expect(result1).toHaveText('ประกันชีวิต');

    // Check clear all button
    await page.getByRole('button', { name: 'ตัวกรอง' }).click();
    await page.locator('xpath=//html/body/div[9]');
    await page.waitForTimeout(2000);
    // Click clear all button
    await page.getByRole('button', { name: 'ล้างทั้งหมด' }).click();
    await page.getByRole('button', { name: 'ตกลง' }).click();
  
  // FAIL case
  await page.getByRole('button', { name: 'ตัวกรอง' }).click();
  await page.locator('xpath=//html/body/div[9]');
  await page.waitForTimeout(2000);
  // Click any filter button
  await page.getByRole('dialog').getByText('คุ้มครองเหมาจ่าย').click();
  await page.getByText('มีเงินคืนระหว่างสัญญา').click();
  await page.getByRole('button', { name: 'ตกลง' }).click();
  // Display filter option that selected
  const filteroption1 = page.locator('//*[@id="filter-selected"]')
    //const expectedOutput = ('คุ้มครองเหมาจ่าย > มีเงินคืนระหว่างสัญญา');
    //await expect(filteroption1).toContainText(expectedOutput);
  await expect(filteroption1).toContainText('คุ้มครองเหมาจ่าย');
  // Display filter result
  const result2 = page.locator('//*[@id="description"]/h1'); 
  await expect(result2).toHaveText('ไม่พบตัวกรองที่เลือก');
 

});

