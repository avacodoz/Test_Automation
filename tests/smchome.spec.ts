import { test, expect } from '@playwright/test';

test('smile club homepage', async ({ page }) => {
  test.setTimeout(120000);

  // Open page refer baseURL on config file
  await page.goto('/th/smileclub');
  
  // Accept all cookies
  await page.locator('xpath=//html/body/div[8]');
  await page.locator('//*[@id="mtl-cookies-accept-all"]').click();
  
  // Click menu tab
  const smctab1 = page.locator('xpath=//html/body/main/div[1]/section[1]/div[1]/button[1]');
  await smctab1.click();
  const smc_smbtn1 = page.locator('xpath=//html/body/main/div[1]/section[1]/div[2]/div/div[1]/div[2]/a');
  await smc_smbtn1.click();
  await expect(page).toHaveURL('/th/smileclub/redeem');
  await page.goBack();

  const smctab2 = page.locator('xpath=//html/body/main/div[1]/section[1]/div[1]/button[2]');
  await smctab2.click();
  const smc_smbtn2 = page.locator('xpath=//html/body/main/div[1]/section[1]/div[2]/div/div[2]/div[2]/a');
  await smc_smbtn2.click();
  await expect(page).toHaveURL('/th/smileclub/privilege');
  await page.goBack();


  // Click redeem category menu
  const smc_rdcatemenu1 = page.locator('xpath=//html/body/main/div[1]/section[3]/div/div[1]');
  await smc_rdcatemenu1.click();
  await expect(page).toHaveURL('/th/smileclub/redeem?category=Dining');
  await page.goBack();

  const smc_rdcatemenu2 = page.locator('xpath=//html/body/main/div[1]/section[3]/div/div[2]');
  await smc_rdcatemenu2.click();
  await expect(page).toHaveURL('/th/smileclub/redeem?category=Activities');
  await page.goBack();

  const smc_rdcatemenu3 = page.locator('xpath=//html/body/main/div[1]/section[3]/div/div[3]');
  await smc_rdcatemenu3.click();
  await expect(page).toHaveURL('/th/smileclub/redeem?category=Entertainment');
  await page.goBack();

  const smc_rdcatemenu4 = page.locator('xpath=//html/body/main/div[1]/section[3]/div/div[4]');
  await smc_rdcatemenu4.click();
  await expect(page).toHaveURL('/th/smileclub/redeem?category=Health');
  await page.goBack();

  const smc_rdcatemenu5 = page.locator('xpath=//html/body/main/div[1]/section[3]/div/div[5]');
  await smc_rdcatemenu5.click();
  await expect(page).toHaveURL('/th/smileclub/redeem?category=Shopping');
  await page.goBack();

  const smc_rdcatemenu6 = page.locator('xpath=//html/body/main/div[1]/section[3]/div/div[6]');
  await smc_rdcatemenu6.click();
  await expect(page).toHaveURL('/th/smileclub/redeem?category=Travel');
  await page.goBack();


  // Click smc card section
  const smc_cardmenu1 = page.locator('xpath=//html/body/main/div[1]/section[4]/div/div/div[1]');
  await smc_cardmenu1.click();
  const smc_smbtn3 = page.locator('xpath=//html/body/main/div[1]/section[5]/div[2]/a');
  await smc_smbtn3.click();
  await expect(page).toHaveURL('/th/smileclub/theutmost-privilege?card=The%20Ultimate%20Card');
  await page.goBack();

  const smc_cardmenu2 = page.locator('xpath=//html/body/main/div[1]/section[4]/div/div/div[2]');
  await smc_cardmenu2.click();
  const smc_smbtn4 = page.locator('xpath=//html/body/main/div[1]/section[5]/div[2]/a');
  await smc_smbtn4.click();
  await expect(page).toHaveURL('/th/smileclub/theutmost-privilege?card=Beyond%20Prestige%20Card');
  await page.goBack();

  const smc_cardmenu3 = page.locator('xpath=//html/body/main/div[1]/section[4]/div/div/div[3]');
  await smc_cardmenu3.click();
  const smc_smbtn5 = page.locator('xpath=//html/body/main/div[1]/section[5]/div[2]/a');
  await smc_smbtn5.click();
  await expect(page).toHaveURL('/th/smileclub/theutmost-privilege?card=Prestige%20Card');
  await page.goBack();


  // Click button on register section
  const smc_rgbtn = page.locator('//*[@id="button-about"]');
  await smc_rgbtn.click();
  await expect(page).toHaveURL('https://www2.muangthai.co.th/RegisterSmileClub/AppForm?action=register');
  await page.goBack();


  // Click button on activities of happiness section //should click gallery card???
  const smc_smbtn6 = page.locator('xpath=//html/body/main/div[1]/div[3]/a');
  await smc_smbtn6.click();
  await expect(page).toHaveURL('/th/smileclub/activityofhappiness/happiness-listing-page');
  await page.goBack();


  // Click any smc news card

  
});  