import { test, expect, chromium } from '@playwright/test'

test('For check Home page', async () => {
  test.setTimeout(0)
  const browsers = await chromium.launch({
        headless: false
        // headless: true
      })
  const context = await browsers.newContext()
  const page = await context.newPage()
  await page.goto('/th')
  await page.locator('//html/body/div[8]/div')
  await page.locator('//*[@id="mtl-cookies-accept-all"]').click()

  // For check life Insurance page
  await page.locator('//html/body/header/div/nav/div[1]/div[1]/a[2]').click()
  await expect(page).toHaveURL(new RegExp(('/th/life-insurance')))
  const titleIns = await page.locator('//*[@id="description"]/h1')
  await expect(titleIns).toContainText('ประกันชีวิต')

  // For check Service page
  await page.locator('//html/body/header/div/nav/div[1]/div[1]/a[3]').click()
  await expect(page).toHaveURL(new RegExp(('/th/service')))
  const titleService = await page.locator('//html/body/main/div[1]/section/div[1]/h2')
  await expect(titleService).toContainText('บริการ Self Service')

  //For check Article page
  await page.locator('//html/body/header/div/nav/div[1]/div[1]/a[4]').click()
  await expect(page).toHaveURL(new RegExp(('/th/article')))
  const titleArt = await page.locator('//html/body/main/div[1]/section/div[2]/h1')
  await expect(titleArt).toContainText('บทความทั้งหมด')

  //For check Contact us page
  await page.locator('//html/body/header/div/nav/div[1]/div[1]/a[5]').click()
  await expect(page).toHaveURL('/th/contact-us')
  const titleContact = await page.locator('//html/body/main/div[1]/main/section[2]/h1')
  await expect(titleContact).toContainText('ติดต่อเรา หากต้องการความช่วยเหลือเพิ่มเติม')
  
  //For check Smile club page
  await page.locator('//html/body/header/div/nav/div[1]/div[2]/a[1]').click()
  await expect(page).toHaveURL('/th/smileclub')
  const titleSmileClub = await page.locator('//html/body/main/div[1]/section[3]/h2')
  await expect(titleSmileClub).toContainText('เติมเต็มความสุขจากหมวดของกิจกรรม')

  //For check MTL Click page
  await page.locator('//html/body/header/div/nav/div[1]/div[2]/a[2]').click()
  await expect(page).toHaveURL(new RegExp(('/th/mtlclick')))
  const titleMTL = await page.locator('//html/body/main/div[1]/section[1]/h1')
  await expect(titleMTL).toContainText('รวบรวมทุกบริการของเมืองไทยประกันชีวิต ให้เป็นเรื่องง่ายสําหรับคุณ')

  //Back to Home page
  await page.locator('//html/body/header/div/nav/div[1]/div[1]/a[1]').click()
  await expect(page).toHaveURL(new RegExp(('/th')))

  //For check Buy Insurance Online page
  await page.locator('//html/body/main/div[1]/section/div[1]/div[1]/a[1]').click()
  await expect(page).toHaveURL('https://onlinesales.muangthai.co.th/th?cateCode=CA001')   
  // await page.locator('//*[@id="cookiesBottom"]')
  // await page.locator('//*[@id="cookiesBottom"]/div/div[2]/button').click()
  const product = await page.locator('//*[@id="__next"]/div/div/div[3]/div[3]/div[2]/div[1]/a/div')
  await page.waitForTimeout(6000)
  await expect(product).toBeVisible()
  // await page.locator('//*[@id="__next"]/div/div/div[1]/div/div[1]/div').click()
  // await expect(page).toHaveURL(new RegExp(('/th')))
  //Back to home
  await page.goto('/th')

  // For check About Us page
  await page.locator('//html/body/main/div[1]/section/div[1]/div[1]/a[2]').click()
  await expect(page).toHaveURL('/th/about-mtl')
  const titleAbout = await page.locator('//html/body/main/div[1]/main/div[1]/h1')
  await expect(titleAbout).toContainText('เกี่ยวกับองค์กร')
  //Back to Home page
  await page.locator('//html/body/header/div/nav/div[1]/div[1]/a[1]').click()
  await expect(page).toHaveURL(new RegExp(('/th')))

  //For check Branch List page
  await page.locator('//html/body/main/div[1]/section/div[1]/div[3]/a[1]').click()
  await expect(page).toHaveURL(new RegExp(('/th/branch-list')))
  const titleBranch = await page.locator('//html/body/main/div[1]/section/div[1]/div[1]/div[1]/h1')
  await expect(titleBranch).toContainText('ค้นหาศูนย์บริการลูกค้า')
  //Back to Home page
  await page.locator('//html/body/header/div/nav/div[1]/div[1]/a[1]').click()
  await expect(page).toHaveURL(new RegExp(('/th')))

  //For check Hospital List page
  await page.locator('//html/body/main/div[1]/section/div[1]/div[3]/a[2]/div').click()
  await expect(page).toHaveURL(new RegExp(('/th/hospital-list')))
  const titleHospital = await page.locator('//html/body/main/div[1]/section/div[1]/div[1]/div[1]/h1')
  await expect(titleHospital).toContainText('ค้นหาสถานพยาบาล')
  //Back to Home page
  await page.locator('//html/body/header/div/nav/div[1]/div[1]/a[1]').click()
  await expect(page).toHaveURL(new RegExp(('/th')))

  //For check All Product page
  await page.locator('//html/body/main/div[1]/section/div[3]/div/div[1]/div[2]/a/button').click()
  await expect(page).toHaveURL(new RegExp(('/th/life-insurance')))
  const titleAllIns = await page.locator('//*[@id="description"]/h1')
  await expect(titleAllIns).toContainText('ประกันชีวิต')
  //Back to Home page
  await page.locator('//html/body/header/div/nav/div[1]/div[1]/a[1]').click()
  await expect(page).toHaveURL(new RegExp(('/th')))

  // For check Service Payment Channels
  await page.locator('//html/body/main/div[2]/section[1]/div/div[2]/div/div/div[1]/div/a/div').click()
  await expect(page).toHaveURL('/th/service/payment-channels')
  //Back to Home page
  await page.locator('//html/body/header/div/nav/div[1]/div[1]/a[1]').click()
  await expect(page).toHaveURL(new RegExp(('/th')))

  //For check Service Policy Loan
  await page.locator('//html/body/main/div[2]/section[1]/div/div[2]/div/div/div[2]/div/a/div').click()
  await expect(page).toHaveURL('/th/service/policy-loan')
  //Back to Home page
  await page.locator('//html/body/header/div/nav/div[1]/div[1]/a[1]').click()
  await expect(page).toHaveURL(new RegExp(('/th')))

  //For check Service Update Insurance
  await page.locator('//html/body/main/div[2]/section[1]/div/div[2]/div/div/div[3]/div/a/div').click()
  await expect(page).toHaveURL(new RegExp(('/th/service/policy-services/update-insurance')))
  const titleUpdate = await page.locator('//html/body/main/div[1]/section/div/section/div[3]/h2')
  await expect(titleUpdate).toContainText('ขอเปลี่ยนแปลงข้อมูล')
  //Back to Home page
  await page.locator('//html/body/header/div/nav/div[1]/div[1]/a[1]').click()
  await expect(page).toHaveURL(new RegExp(('/th')))

  //For check Service Health Services
  await page.locator('//html/body/main/div[2]/section[1]/div/div[2]/div/div/div[4]/div/a/div').click()
  await expect(page).toHaveURL(new RegExp(('/th/service/health-services/bdms-hospital')))
  const titleHealth = await page.locator('//html/body/main/div[1]/section/div/section/div[2]/h2')
  await expect(titleHealth).toContainText('MTL Health Buddy')
  //Back to Home page
  await page.locator('//html/body/header/div/nav/div[1]/div[1]/a[1]').click()
  await expect(page).toHaveURL(new RegExp(('/th')))

  //For check Recommend Product
  await page.locator('//html/body/main/div[1]/section/div[2]/button[1]').click()
  const cardProduct = await page.locator('//html/body/main/div[1]/section/div[3]/div/div[1]/div[1]/div[2]/div/div/div[1]/div/div/div[1]')
  await expect(cardProduct).toBeVisible()
  await page.locator('//html/body/main/div[1]/section/div[3]/div/div[1]/div[1]/div[2]/div/div/div[1]/div/div/div[1]/a').click()
  await expect(page).toHaveURL(new RegExp(('/th/savings-insurance/muangthai-101plus-campaign')))
  //Back to Home page
  await page.locator('//html/body/header/div/nav/div[1]/div[1]/a[1]').click()
  await expect(page).toHaveURL(new RegExp(('/th')))
  await page.locator('//html/body/main/div[1]/section/div[3]/div/div[1]/div[1]/div[2]/div/div/div[2]/div/div/div[1]/a').click()
  await expect(page).toHaveURL(new RegExp(('/th/retirement-insurance/return-retire')))
  //Back to Home page
  await page.locator('//html/body/header/div/nav/div[1]/div[1]/a[1]').click()
  await expect(page).toHaveURL(new RegExp(('/th')))
  await page.locator('//html/body/main/div[1]/section/div[3]/div/div[1]/div[1]/div[2]/div/div/div[3]/div/div/div[1]/a').click()
  await expect(page).toHaveURL(new RegExp(('/th/health-insurance/elite-health-plus')))
  //Back to Home page
  await page.locator('//html/body/header/div/nav/div[1]/div[1]/a[1]').click()
  await expect(page).toHaveURL(new RegExp(('/th')))
  //Button
  await page.locator('//html/body/main/div[1]/section/div[3]/div/div[1]/div[1]/div[3]').click()
  const dHealth = await page.locator('//html/body/main/div[1]/section/div[3]/div/div[1]/div[1]/div[2]/div/div/div[4]/div/div')
  await expect(dHealth).toBeVisible()
  await dHealth.click()
  await expect(page).toHaveURL(new RegExp(('/th/health-insurance/d-health-plus')))
  //Back to Home page
  await page.locator('//html/body/header/div/nav/div[1]/div[1]/a[1]').click()
  await expect(page).toHaveURL(new RegExp(('/th')))
  //Button
  await page.locator('//html/body/main/div[1]/section/div[3]/div/div[1]/div[1]/div[3]').dblclick()
  const extra = await page.locator('//html/body/main/div[1]/section/div[3]/div/div[1]/div[1]/div[2]/div/div/div[5]/div/div')
  await expect(extra).toBeVisible()
  await extra.click()
  await expect(page).toHaveURL(new RegExp(('/th/health-insurance/maochai-extra')))
  //Back to Home page
  await page.locator('//html/body/header/div/nav/div[1]/div[1]/a[1]').click()
  await expect(page).toHaveURL(new RegExp(('/th')))
  //Button
  await page.locator('//html/body/main/div[1]/section/div[3]/div/div[1]/div[1]/div[3]').dblclick()
  await page.locator('//html/body/main/div[1]/section/div[3]/div/div[1]/div[1]/div[3]').click()
  const perfect = await page.locator('//html/body/main/div[1]/section/div[3]/div/div[1]/div[1]/div[2]/div/div/div[6]/div')
  await expect(perfect).toBeVisible()
  await perfect.click()
  await expect(page).toHaveURL(new RegExp(('/th/critical-illness-insurance/ci-perfect-care')))
  //Back to Home page
  await page.locator('//html/body/header/div/nav/div[1]/div[1]/a[1]').click()
  await expect(page).toHaveURL(new RegExp(('/th')))

  //For check Thai Smile club
  const smileButton = await page.locator('//html/body/main/div[1]/section/div[2]/button[2]')
  await smileButton.click()
  const cardProductSmile = await page.locator('//html/body/main/div[1]/section/div[3]/div/div[2]/div[1]/div[2]/div/div/div[1]/div/a/div')
  await expect(cardProductSmile).toBeVisible()
  await cardProductSmile.click()
  await expect(page).toHaveURL(new RegExp(('/th/smileclub/redeem/Healthcheckupbangkokhospital')))
  //Back to Home page
  await page.locator('//html/body/header/div/nav/div[1]/div[1]/a[1]').click()
  await expect(page).toHaveURL(new RegExp(('/th')))
  await smileButton.click()
  await page.locator('//html/body/main/div[1]/section/div[3]/div/div[2]/div[1]/div[2]/div/div/div[2]/div').click()
  await expect(page).toHaveURL(new RegExp(('/th/smileclub/activityofhappiness/smiletrip-culinarytour')))
  // //Back to Home page
  await page.locator('//html/body/header/div/nav/div[1]/div[1]/a[1]').click()
  await expect(page).toHaveURL(new RegExp(('/th')))
  await smileButton.click()
  await page.locator('//html/body/main/div[1]/section/div[3]/div/div[2]/div[1]/div[2]/div/div/div[3]/div').click()
  await expect(page).toHaveURL(new RegExp(('/th/smileclub/privilege/amazingthailandpremium')))
  //Back to Home page
  await page.locator('//html/body/header/div/nav/div[1]/div[1]/a[1]').click()
  await expect(page).toHaveURL(new RegExp(('/th')))
  await smileButton.click()
  const slideBtn = await page.locator('//html/body/main/div[1]/section/div[3]/div/div[2]/div[1]/div[3]')
  await slideBtn.click()
  await page.locator('//html/body/main/div[1]/section/div[3]/div/div[2]/div[1]/div[2]/div/div/div[4]/div').click()
  await expect(page).toHaveURL(new RegExp(('/th/smileclub/privilege/getfreshpayday')))
  //Back to Home page
  await page.locator('//html/body/header/div/nav/div[1]/div[1]/a[1]').click()
  await expect(page).toHaveURL(new RegExp(('/th')))
  await smileButton.click()
  await slideBtn.dblclick()
  await page.waitForTimeout(5000)
  await page.locator('//html/body/main/div[1]/section/div[4]/div/div[2]/div[1]/div[2]/div/div/div[5]/div/a').click()
  await expect(page).toHaveURL(new RegExp(('/th/smileclub/redeem/mrt2023')))
  //Back to Home page
  await page.locator('//html/body/header/div/nav/div[1]/div[1]/a[1]').click()
  await expect(page).toHaveURL(new RegExp(('/th')))
  
  // For check Article
  await page.click('//html/body/main/div[2]/section[2]/div/div[2]/div/div/div[1]/div/a/div')
  await expect(page).toHaveURL(new RegExp(('/th/article/health/how-to-register-mohpromt')))
  const titleArtCard = page.locator("//html/body/main/div[1]/section/h1")
  await expect(titleArtCard).toContainText('“หมอพร้อม” เราพร้อม! ลงทะเบียนฉีดวัคซีนโควิด 19 ง่ายๆ ในไม่กี่ขั้นตอน')
  //Back to Home page
  await page.locator('//html/body/header/div/nav/div[1]/div[1]/a[1]').click()
  await expect(page).toHaveURL(new RegExp(('/th')))

  await page.click('//html/body/main/div[2]/section[2]/div/div[2]/div/div/div[2]/div')
  await expect(page).toHaveURL(new RegExp(('/th/article/tax/tax-prep-checklist')))
  const titleArtTax = page.locator("//html/body/main/div[1]/section/h1")
  await expect(titleArtTax).toContainText('ยื่นภาษี 2565 ต้องใช้เอกสารอะไรบ้าง ?')
  //Back to Home page
  await page.locator('//html/body/header/div/nav/div[1]/div[1]/a[1]').click()
  await expect(page).toHaveURL(new RegExp(('/th')))

  await page.click('//html/body/main/div[2]/section[2]/div/div[2]/div/div/div[3]/div')
  await expect(page).toHaveURL(new RegExp(('/th/article/tax/did-you-know-tax-deductible-up-to-300000-baht')))
  const titleArtDeductible = page.locator("//html/body/main/div[1]/section/h1")
  await expect(titleArtDeductible).toContainText('คลายสงสัย...ลดหย่อนภาษีสูงสุด 300,000 บาท')
  //Back to Home page
  await page.locator('//html/body/header/div/nav/div[1]/div[1]/a[1]').click()
  await expect(page).toHaveURL(new RegExp(('/th')))

  //Download on App Store
  await page.click('//*[@id="banner"]/section[1]/div/div/div/div/div/div/a[1]')
  await expect(page).toHaveURL('https://apps.apple.com/th/app/mtl-click/id1440560140')
  await page.goto('/th')

  //Download on Google Play
  await page.click('//*[@id="banner"]/section[1]/div/div/div/div/div/div/a[1]')
  await expect(page).toHaveURL('https://apps.apple.com/th/app/mtl-click/id1440560140')
  await page.goto('/th')
})