import { test, expect } from '@playwright/test';

test('all cate', async ({ page }) => {
  test.setTimeout(120000);
  
  // Open page refer baseURL on config file
  await page.goto('/th/life-insurance');
  
  // Accept all cookies
  await page.locator('xpath=//html/body/div[8]');
  await page.locator('//*[@id="mtl-cookies-accept-all"]').click(); //if using getByText can use only TH page

  //Click whole life category button
  await page.getByRole('list').getByRole('link', { name: 'ประกันชีวิตตลอดชีพ' }).click();
  await expect(page).toHaveURL('/th/whole-life-insurance');
  const pdcate1 = page.locator('//*[@id="description"]/h1');
  await expect(pdcate1).toHaveText('ประกันชีวิตตลอดชีพ');

  //Click savings category button
  await page.getByRole('link', { name: 'ประกันออมทรัพย์' }).click();
  //await page.getByRole('list').getByRole('link', { name: 'ประกันออมทรัพย์' }).click();
  await expect(page).toHaveURL('/th/savings-insurance');
  const pdcate2 = page.locator('//*[@id="description"]/h1');
  await expect(pdcate2).toHaveText('ประกันออมทรัพย์');
  
  //Click retirement category button
  await page.getByRole('list').getByRole('link', { name: 'ประกันบำนาญ' }).click();
  await expect(page).toHaveURL('/th/retirement-insurance');
  const pdcate3 = page.locator('//*[@id="description"]/h1');
  await expect(pdcate3).toHaveText('ประกันบำนาญ');

  //Click health category button
  await page.getByRole('list').getByRole('link', { name: 'ประกันสุขภาพ' }).click();
  await expect(page).toHaveURL('/th/health-insurance');
  const pdcate4 = page.locator('//*[@id="description"]/h1');
  await expect(pdcate4).toHaveText('ประกันสุขภาพ');

  //Click ci category button
  await page.getByRole('list').getByRole('link', { name: 'ประกันโรคร้ายแรง' }).click();
  await expect(page).toHaveURL('/th/critical-illness-insurance');
  const pdcate5 = page.locator('//*[@id="description"]/h1');
  await expect(pdcate5).toHaveText('ประกันโรคร้ายแรง');

  //Click pa category button
  await page.getByRole('list').getByRole('link', { name: 'ประกันอุบัติเหตุ' }).click();
  await expect(page).toHaveURL('/th/personal-accident-insurance');
  const pdcate6 = page.locator('//*[@id="description"]/h1');
  await expect(pdcate6).toHaveText('ประกันอุบัติเหตุ');

  //Click investment category button
  await page.getByRole('list').getByRole('link', { name: 'ประกันชีวิตแบบยูนิตลิงค์' }).click();
  await expect(page).toHaveURL('/th/investment');
  const pdcate7 = page.locator('//*[@id="description"]/h1');
  await expect(pdcate7).toHaveText('ประกันชีวิตแบบยูนิตลิงค์');

    // Dismiss insider survey pop-up (random display)
    //await page.locator('//*[@id="ins-lead-collection-popup-with-image-adaptive').waitFor(); //xpath=//html/body/div[20]/div
    //await page.evaluate(() => window.confirm = function(){return true;});
    //page.on('dialog', dialog => dialog.dismiss());
    //await page.getByText('×').click(); //await page.getByRole('button').click();
    
  



  //Click takaful category button
  await page.getByRole('list').getByRole('link', { name: 'เมืองไทยตะกาฟุล' }).waitFor();
  await page.getByRole('list').getByRole('link', { name: 'เมืองไทยตะกาฟุล' }).click(); 
  await page.waitForLoadState('networkidle');
  await expect(page.url).toContain('/th/muangthaitakaful');
  const pdcate8 = page.locator('//*[@id="description"]/h1');
  await expect(pdcate8).toHaveText('เมืองไทยตะกาฟุล');

  //Skip to check takaful read more button (that open on new page)
  //const page1Promise = page.waitForEvent('popup');
  //await page.locator('//*[@id="more"]').getByRole('button', { name: 'อ่านเพิ่มเติม' }).click();
  //const page1 = await page1Promise;
  //const page2Promise = page.waitForEvent('popup');
  //await page.locator('//*[@id="more"]').getByRole('button', { name: 'อ่านเพิ่มเติม' }).click();
  //const page2 = await page2Promise;

  //Click group category button
  await page.getByRole('list').getByRole('link', { name: 'ประกันชีวิตกลุ่ม' }).waitFor();
  await page.getByRole('list').getByRole('link', { name: 'ประกันชีวิตกลุ่ม' }).click(); 
  await page.waitForLoadState('networkidle');
  await expect(page).toHaveURL('/th/group-insurance');
  const pdcate9 = page.locator('//*[@id="description"]/h1');
  await expect(pdcate9).toHaveText('ประกันชีวิตกลุ่ม');


});

