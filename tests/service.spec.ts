import { test, expect } from '@playwright/test';

test.describe('service 2 case', () => {

  test('one > menu',async({ page }) => {
    test.setTimeout(120000);

    // Open page refer baseURL on config file
    await page.goto('/th/service');
    
    // Accept all cookies
    await page.locator('xpath=//html/body/div[8]');
    await page.locator('//*[@id="mtl-cookies-accept-all"]').click();
    
    // Click payment channels menu
    const svmenu1 = page.locator('xpath=//html/body/main/div[1]/section/div[1]/div/a[1]');
    await svmenu1.click();
    await expect(page).toHaveURL('/th/service/payment-channels');
    
      // Click sub-menu on payment channels page
      const svsub1_1 = page.locator('xpath=//html/body/main/div[1]/section/div/div[1]/div/a[1]');
      await svsub1_1.click();
      await expect(page).toHaveURL('/th/service/payment-channels');

      const svsub1_2 = page.locator('xpath=//html/body/main/div[1]/section/div/div[1]/div/a[2]');
      await svsub1_2.click();
      await expect(page).toHaveURL('/th/service/payment-channels/counter-payment');

      const svsub1_3 = page.locator('xpath=//html/body/main/div[1]/section/div/div[1]/div/a[3]');
      await svsub1_3.click();
      await expect(page).toHaveURL('/th/service/payment-channels/pay-via-mtlclick');

      const svsub1_4 = page.locator('xpath=//html/body/main/div[1]/section/div/div[1]/div/a[4]');
      await svsub1_4.click();
      await expect(page).toHaveURL('/th/service/payment-channels/direct-debit-payment');
    
    // Back to main service page by click breadcrumb
    const breadcrumb = page.locator('.inline-flex > .line-clamp');
    await breadcrumb.first().click();
    

    // Click tax exemption menu
    const svmenu2 = page.locator('xpath=//html/body/main/div[1]/section/div[1]/div/a[2]');
    await svmenu2.click();
    await expect(page).toHaveURL('https://update.muangthai.co.th/taxconsent/welcome/MTLW');
    await page.goBack();
    
    
    // Click download the certificate menu
    const svmenu3 = page.locator('xpath=//html/body/main/div[1]/section/div[1]/div/a[3]');
    await svmenu3.click();
    await expect(page).toHaveURL('https://update.muangthai.co.th/taxconsent/welcome/MTLW');
    await page.goBack();

    
    // Click KYC menu
    const svmenu4 = page.locator('xpath=//html/body/main/div[1]/section/div[1]/div/a[4]');
    await svmenu4.click();
    await expect(page).toHaveURL('https://kyc.muangthai.co.th/');
    await page.goBack();

    
    // Click policy service menu
    const svmenu5 = page.locator('xpath=//html/body/main/div[1]/section/div[2]/a[1]');
    await svmenu5.click();
    await expect(page).toHaveURL('/th/service/policy-services/update-insurance'); //, { waitUntil: 'networkidle' }
      
      // Click sub-menu on policy service page
      const svsub5_1 = page.locator('xpath=//html/body/main/div[1]/section/div/section/div[2]/a[1]');
      await svsub5_1.click();
      await expect(page).toHaveURL('/th/service/policy-services/update-insurance');

      const svsub5_2 = page.locator('xpath=//html/body/main/div[1]/section/div/section/div[2]/a[2]');
      await svsub5_2.click(); //await page.waitForLoadState('networkidle');
      await expect(page).toHaveURL('/th/service/policy-services/policy-rights');
    
      const svsub5_3 = page.locator('xpath=//html/body/main/div[1]/section/div/section/div[2]/a[3]');
      await svsub5_3.click();
      await expect(page).toHaveURL('/th/service/policy-services/know-your-own-rights');
    
      const breadcrumb1 = page.locator('.inline-flex > .line-clamp');
      await breadcrumb1.first().click();

    //found survey pop-up
    
    // Click 2nd payment channels menu
    const svmenu6 = page.locator('xpath=//html/body/main/div[1]/section/div[2]/a[2]');
    await svmenu6.click();
    await expect(page).toHaveURL('/th/service/payment-channels'); //no need to check again, have checked on line18
    await page.goBack();


    // Click policy loan menu
    const svmenu7 = page.locator('xpath=//html/body/main/div[1]/section/div[2]/a[3]');
    await svmenu7.click();
    await expect(page).toHaveURL('/th/service/policy-loan'); 
    await page.goBack();


    // Click health service > mtl health buddy menu
    const svmenu8 = page.locator('xpath=//html/body/main/div[1]/section/div[2]/div/div/div/a[1]');
    await svmenu8.click();
    await expect(page).toHaveURL('/th/service/health-services/mtl-health-buddy');
    await page.goBack();

    // Click health service > mtl global doctors menu
    const svmenu8_1 = page.locator('xpath=//html/body/main/div[1]/section/div[2]/div/div/div/a[2]');
    await svmenu8_1.click();
    await expect(page).toHaveURL('/th/service/health-services/global-doctors');
    await page.goBack();

    // Click health service > mtl global connect menu
    const svmenu8_2 = page.locator('xpath=//html/body/main/div[1]/section/div[2]/div/div/div/a[3]');
    await svmenu8_2.click();
    await expect(page).toHaveURL('/th/service/health-services/mtl-global-connect');
    await page.goBack();

    // Click health service > mtl sos menu
    const svmenu8_3 = page.locator('xpath=//html/body/main/div[1]/section/div[2]/div/div/div/a[4]');
    await svmenu8_3.click();
    await expect(page).toHaveURL('/th/service/health-services/mtl-sos');
    await page.goBack();

    // Click health service > other health service menu
    const svmenu8_4 = page.locator('xpath=//html/body/main/div[1]/section/div[2]/div/div/div/a[5]');
    await svmenu8_4.click();
    await expect(page).toHaveURL('/th/service/health-services/mtl-claim-check');
      
      // Click sub-menu of other health service menu
      const svsub8_4_1 = page.locator('xpath=//html/body/main/div[1]/section/div/div/div/a[1]');
      await svsub8_4_1.click();
      await expect(page).toHaveURL('/th/service/health-services/mtl-claim-check');

      const svsub8_4_2 = page.locator('xpath=//html/body/main/div[1]/section/div/div/div/a[2]');
      await svsub8_4_2.click();
      await expect(page).toHaveURL('/th/service/health-services/mtl-claim-cover-check');

      const svsub8_4_3 = page.locator('xpath=//html/body/main/div[1]/section/div/div/div/a[3]');
      await svsub8_4_3.click();
      await expect(page).toHaveURL('/th/service/health-services/mtl-hospital-locator');

      const svsub8_4_4 = page.locator('xpath=//html/body/main/div[1]/section/div/div/div/a[4]');
      await svsub8_4_4.click();
      await expect(page).toHaveURL('/th/service/health-services/mobile-medical-check-up');

      const svsub8_4_5 = page.locator('xpath=//html/body/main/div[1]/section/div/div/div/a[5]')
      await svsub8_4_5.click();
      await expect(page).toHaveURL('/th/service/health-services/mtl-health-privilege');

    const breadcrumb2 = page.locator('.inline-flex > .line-clamp');
    await breadcrumb2.first().click();


    // Click claims menu
    const svmenu9 = page.locator('xpath=//html/body/main/div[1]/section/div[2]/a[4]');
    await svmenu9.click();
    await expect(page).toHaveURL('/th/service/claims/health-claim'); 
      
      // Click sub-menu on claims page
      const svsub9_1 = page.locator('xpath=//html/body/main/div[1]/section/div/div/div[1]/a[1]');
      await svsub9_1.click();
      await expect(page).toHaveURL('/th/service/claims/health-claim');
      
      const svsub9_2 = page.locator('xpath=//html/body/main/div[1]/section/div/div/div[1]/a[2]');
      await svsub9_2.click();
      await expect(page).toHaveURL('/th/service/claims/accident-claim');
      
      const svsub9_3 = page.locator('xpath=//html/body/main/div[1]/section/div/div/div[1]/a[3]');
      await svsub9_3.click(); 
      await expect(page).toHaveURL('/th/service/claims/other-claim-related-services');
    
      const svsub9_4 = page.locator('xpath=//html/body/main/div[1]/section/div/div/div[1]/a[4]');
      await svsub9_4.click(); 
      await expect(page).toHaveURL('/th/service/claims/disability-claim');
    
      const svsub9_5 = page.locator('xpath=//html/body/main/div[1]/section/div/div/div[1]/a[5]');
      await svsub9_5.click(); 
      await expect(page).toHaveURL('/th/service/claims/death-claim');
      
    const breadcrumb3 = page.locator('.inline-flex > .line-clamp');
    await breadcrumb3.first().click();

  }); 

  test('two > download button',async({ context }) => {
    const page = await context.newPage();
    await page.goto('/th/service');

    const [newPage] = await Promise.all([
      context.waitForEvent('page'),
      // This action triggers the new tab
      page.locator('xpath=//html/body/main/div[1]/section/center/div').click()
      
    ])
    // Expect a new url
    console.log(await newPage.url());

  });

});