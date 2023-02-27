import { test, expect } from '@playwright/test';

test('article', async ({page}) => {
  test.setTimeout(120000);

  // Open page refer baseURL on config file
  await page.goto('/th/article');
  
  // Accept all cookies
  await page.locator('xpath=//html/body/div[8]');
  await page.locator('//*[@id="mtl-cookies-accept-all"]').click();
  
  //await page.locator('xpath=//html/body/main/div[1]/section/div[2]/h1');
  const artihead = page.locator('xpath=//html/body/main/div[1]/section/div[2]/h1');
  await expect(artihead).toHaveText('บทความทั้งหมด');
  
  // Click sort by cate button
  await page.locator('xpath=//html/body/main/div[1]/section/div[1]/button').click();
  //await page.locator('xpath=//html/body/main/div[1]/section/div[2]/div[1]/h2');
  const articate1 = await page.getByText('สุขภาพต้องดูแล');
  await expect(articate1 !== undefined ).toBeTruthy();
  
  // Click see more articles cate button
  const seemore1 = page.locator('xpath=//html/body/main/div[1]/section/div[2]/div[1]/a');
  await seemore1.click(); //{ timeout: 120000 }
  await expect(page).toHaveURL('/th/article/health');
  await page.goBack();
 
  
  const articate2 = await page.getByText('การเงินต้องรู้');
  await expect(articate2 !== undefined ).toBeTruthy();

  const seemore2 = page.locator('xpath=//html/body/main/div[1]/section/div[3]/div[1]/a');
  await seemore2.click();
  await expect(page).toHaveURL('/th/article/finance');
  await page.goBack();


  const articate3 = await page.getByText('ลดหย่อนภาษี');
  await expect(articate3 !== undefined ).toBeTruthy();

  const seemore3 = page.locator('xpath=//html/body/main/div[1]/section/div[4]/div[1]/a');
  await seemore3.click();
  await expect(page).toHaveURL('/th/article/tax');
  await page.goBack();


  const articate4 = await page.getByText('ไลฟ์สไตล์');
  await expect(articate4 !== undefined ).toBeTruthy();

  const seemore4 = page.locator('xpath=//html/body/main/div[1]/section/div[5]/div[1]/a');
  await seemore4.click();
  await expect(page).toHaveURL('/th/article/lifestyle');
  await page.goBack();


  const articate5 = await page.getByText('เกษียณอายุ');
  await expect(articate5 !== undefined ).toBeTruthy();

  const seemore5 = page.locator('xpath=//html/body/main/div[1]/section/div[6]/div[1]/a');
  await seemore5.click();
  await expect(page).toHaveURL('/th/article/retire');
  await page.goBack();

});  