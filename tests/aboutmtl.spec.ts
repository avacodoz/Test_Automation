import { test, expect } from '@playwright/test';

test('aboutmtl', async ({ page }) => {
  test.setTimeout(120000);

  // Open page refer baseURL on config file
  await page.goto('/th/about-mtl');
  
  // Accept all cookies
  await page.locator('xpath=//html/body/div[8]');
  await page.locator('//*[@id="mtl-cookies-accept-all"]').click();
  
  // Click menu
  const abmenu1 = page.locator('xpath=//html/body/main/div[1]/main/div[1]/div/div[1]');
  await abmenu1.click();
  await expect(page).toHaveURL('/th/about-mtl/mission-and-vision');
  await page.goBack();

  const abmenu2 = page.locator('xpath=//html/body/main/div[1]/main/div[1]/div/div[2]');
  await abmenu2.click();
  await expect(page).toHaveURL('/th/about-mtl/organization');
  await page.goBack();

  const abmenu3 = page.locator('xpath=//html/body/main/div[1]/main/div[1]/div/div[3]');
  await abmenu3.click();
  await expect(page).toHaveURL('/th/about-mtl/our-logo');
  await page.goBack();

  // Click readmore button
  const rdbtn1 = page.locator('xpath=//html/body/main/div[1]/main/div[3]/div/p[2]/a');
  await rdbtn1.click();
  await expect(page).toHaveURL('/th/about-mtl/history');
  await page.goBack();

  const rdbtn2 = page.locator('xpath=//html/body/main/div[1]/main/div[5]/div[1]/a');
  await rdbtn2.click();
  await expect(page).toHaveURL('/th/about-mtl/projects');
  await page.goBack();

  // survey popup wait untill display around 1.6 min
  // page.locator('dialog .close-button').click().catch(() => {});
  //  const popup = await page.evaluate(() => {
  //      return document.querySelector('//*[@id="ins-lead-collection-popup-with-image-adaptive]');  
  //  });
  //  const dismiss = page.locator('//*[@id="close-button-1545222288830"]');  
  //  await Promise.all([
  //  //  expect(popup).toBeVisible({ timeout: 96000}),
  //      dismiss.click(),
  // ])

  const rdbtn3 = page.locator('xpath=//html/body/main/div[1]/main/div[5]/div[2]/a');
  await rdbtn3.click();
  await expect(page).toHaveURL('/th/about-mtl/news-and-update');
  await page.goBack();

  const rdbtn4 = page.locator('xpath=//html/body/main/div[1]/main/div[5]/div[3]/a');
  await rdbtn4.click();
  await expect(page).toHaveURL('/th/careers');
  await page.goBack();

  const abmenu4 = page.locator('xpath=//html/body/main/div[1]/main/div[6]/div[1]/div/p[2]/a[1]');
  await abmenu4.click();
  await expect(page).toHaveURL('/th/about-mtl/sustainability-development/framework-and-policy/economic');
  await page.goBack();

  const abmenu5 = page.locator('xpath=//html/body/main/div[1]/main/div[6]/div[1]/div/p[2]/a[2]');
  await abmenu5.click();
  await expect(page).toHaveURL('/th/about-mtl/sustainability-development/cg-policies');
  await page.goBack();

  const abmenu6 = page.locator('xpath=//html/body/main/div[1]/main/div[6]/div[1]/div/p[2]/a[3]');
  await abmenu6.click();
  await expect(page).toHaveURL('/th/about-mtl/sustainability-development/cg-activities');
    
    const absub6 = page.locator('xpath=//html/body/main/div[1]/section/div[1]/div/div/p[2]/a');
    await absub6.click();
    await expect(page).toHaveURL('/th/download?category=sd-guide');
    await page.goBack();
    await page.goBack();

  const abmenu7 = page.locator('xpath=//html/body/main/div[1]/main/div[6]/div[2]/div/a');
  await abmenu7.click();
  await expect(page).toHaveURL('/th/about-mtl/investor-relations');
  await page.goBack();

  // Check IR page and back to about-mtl page
    const filterbtn = page.locator('//*[@id="filter-and-search"]/form/div/a[1]');
    await filterbtn.click();
    await expect(page).toHaveURL('/th/about-mtl/investor-relations?investor=ir-fact-sheet');

    const filterbtn2 = page.locator('//*[@id="filter-and-search"]/form/div/a[2]');
    await filterbtn2.click();
    await expect(page).toHaveURL('/th/about-mtl/investor-relations?investor=financial');
 
    await page.locator('.inline-flex > .line-clamp').first().click();

});  