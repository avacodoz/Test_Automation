import { chromium, test, expect } from "@playwright/test"

test('Check Footer MTL',async()=>{
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

  // Footer Article
  await page.locator('//*[@id="footer-call-center"]/a[1]').click()
  await expect(page).toHaveURL(new RegExp(('/th/article')))
  const titleArt = await page.locator('//html/body/main/div[1]/section/div[2]/h1')
  await expect(titleArt).toContainText('บทความทั้งหมด')
  
  // Footer FAQ
  await page.locator('//*[@id="footer-call-center"]/a[2]').click()
  await expect(page).toHaveURL(new RegExp(('/th/faq')))
  const titleFaq = await page.locator('//html/body/main/div[1]/section/div[1]/div[1]/h1')
  await expect(titleFaq).toContainText('คำถามที่พบบ่อย')

  // Footer Download
  await page.locator('//*[@id="footer-call-center"]/a[3]/span').click()
  await expect(page).toHaveURL(new RegExp(('/th/download')))
  
  //Footer Branch
  await page.locator('//*[@id="accordion-open-body-contact"]/a[1]').click()
  await expect(page).toHaveURL(new RegExp(('/th/branch-list')))
  const titleBranch = await page.locator('//html/body/main/div[1]/section/div[1]/div[1]/div[1]/h1')
  await expect(titleBranch).toContainText('ค้นหาศูนย์บริการลูกค้า')

  //Footer Contact
  await page.locator('//*[@id="accordion-open-body-contact"]/a[2]').click()
  await expect(page).toHaveURL(new RegExp(('th/contact-us')))
  const titleContact = await page.locator('//html/body/main/div[1]/main/section[2]/h1')
  await expect(titleContact).toContainText('ติดต่อเรา หากต้องการความช่วยเหลือเพิ่มเติม')
  
  //Footer Whole-life-insurance
  await page.locator('//*[@id="accordion-open-body-product"]/a[1]').click()
  const pagePromise = context.waitForEvent('page')
  const newPage = await pagePromise
  await newPage.waitForLoadState()
  await expect(newPage).toHaveURL(new RegExp(('/th/whole-life-insurance')))
  // const titleWholelife = await page.locator('//*[@id="description"]/h1')
  // await expect(titleWholelife).toContainText('ประกันชีวิตตลอดชีพ')
  
  //Footer Investment
  await page.locator('//*[@id="accordion-open-body-product"]/a[2]').click()
  const pageInvestment = context.waitForEvent('page')
  const newPageInvestment = await pageInvestment
  await newPageInvestment.waitForLoadState()
  await expect(newPageInvestment).toHaveURL(new RegExp(('/th/investment')))
  const titleInvestment = await page.locator('//html/body/main/div[1]/main/div/div[1]/h2')
  // await expect(titleInvestment).toBeVisible()
  // await expect(titleInvestment).toContainText('กองทุนที่ท่านสามารถเลือกลงทุนผ่านยูนิตลิงค์')

  //Footer Group-insurance
  await page.locator('//*[@id="accordion-open-body-product"]/a[3]').click()
  const pageInsurance = context.waitForEvent('page')
  const newPageInsurance = await pageInsurance
  await newPageInsurance.waitForLoadState()
  await expect(newPageInsurance).toHaveURL(new RegExp(('/th/group-insurance')))
  // const titleGroup = await page.locator('//*[@id="description"]/h1')
  // await expect(titleGroup).toContainText('ประกันชีวิตกลุ่ม')
  
  //Footer Health-insurance
  await page.locator('//*[@id="accordion-open-body-product"]/a[4]').click()
  const pageHealth = context.waitForEvent('page')
  const newPageHealth = await pageHealth
  await newPageHealth.waitForLoadState()
  await expect(newPageHealth).toHaveURL(new RegExp(('/th/health-insurance')))
  // const titleHealth = await page.locator('//*[@id="description"]/h1')
  // await expect(titleHealth).toContainText('ประกันสุขภาพ')
  
  //Footer Service
  await page.locator('//*[@id="accordion-open-body-product"]/a[5]').click()
  const pageService = context.waitForEvent('page')
  const newPageService = await pageService
  await newPageService.waitForLoadState()
  await expect(newPageService).toHaveURL(new RegExp(('/th/service/policy-services/update-insurance')))
  const titleService = await page.locator('//html/body/main/div[1]/section/div/section/div[1]/div[1]/p[1]')
  // await expect(titleService).toContainText('บริการกรมธรรม์')

  //Footer Nav
  await page.locator('//*[@id="accordion-open-body-product"]/a[6]').click()
  const pageNav = context.waitForEvent('page')
  const newPageNav = await pageNav
  await newPageNav.waitForLoadState()
  await expect(newPageNav).toHaveURL(new RegExp(('/th/nav')))
  const title = await page.locator('//*[@id="generic-blog"]/section[1]/h1')
  // await expect(title).toContainText('ผลการดำเนินงานของผลิตภัณฑ์')
  
  //Footer Ul-plus
  await page.locator('//*[@id="accordion-open-body-product"]/a[7]').click()
  const pageUl = context.waitForEvent('page')
  const newPageUl = await pageUl
  await newPageUl.waitForLoadState()
  await expect(newPageUl).toHaveURL(new RegExp(('/th/muangthai-ul-plus')))
  const titleUl = await page.locator('//*[@id="swiper-wrapper-471e70aa5bff106d2"]/div/div/div/h1')
  // await expect(titleUl).toContainText('เมืองไทยยูแอล พลัส')
  
  //Footer Mutual funds
  await page.locator('//*[@id="accordion-open-body-product"]/a[8]').click()
  const pageMF = context.waitForEvent('page')
  const newPageMF = await pageMF
  await newPageMF.waitForLoadState()
  await expect(newPageMF).toHaveURL(new RegExp(('https://www2.muangthai.co.th/wealthadvice/mutualfunds')))
  await page.goto('/th')

  //Footer News-and-update
  await page.locator('//*[@id="accordion-open-body-product"]/a[9]')
  await page.locator('//*[@id="accordion-open-body-product"]/a[9]').click()
  const pageNews = context.waitForEvent('page')
  const newPageUpdate = await pageNews
  await newPageUpdate.waitForLoadState()
  await expect(newPageUpdate).toHaveURL(new RegExp(('/th/about-mtl/news-and-update/pf-license')))
  const titleNews = await page.locator('//html/body/main/div[1]/section/div[1]/h1')
  // await expect(titleNews).toContainText('ประกาศสำคัญ สำหรับลูกค้ากรมธรรม์ ประกันชีวิตควบการลงทุน (Unit-Linked)')

  //Footer About-mtl
  await page.locator('//*[@id="accordion-open-body-aboutmtl"]/a[1]').click()
  const pageAboutMtl = context.waitForEvent('page')
  const newPageAboutMtl = await pageAboutMtl
  await newPageAboutMtl.waitForLoadState()
  await expect(newPageAboutMtl).toHaveURL(new RegExp(('/th/about-mtl')))
  const titleAbt = await page.locator('//html/body/main/div[1]/main/div[1]/h1')
  // await expect(titleAbt).toContainText('เกี่ยวกับองค์กร')

  //Footer Careers
  await page.locator('//*[@id="accordion-open-body-aboutmtl"]/a[2]').click()
  const pageCareers = context.waitForEvent('page')
  const newPageCareers = await pageCareers
  await newPageCareers.waitForLoadState()
  await expect(newPageCareers).toHaveURL(new RegExp(('/th/careers')))
  const titleCareer = await page.locator('//html/body/main/div[1]/section/div[1]/h1')
  // await expect(titleCareer).toContainText('เรามุ่งมั่นที่จะเป็น บริษัท ประกันชีวิต ที่มั่นคงและแข็งแกร่งและอันดับ 1')

  //Footer News-and-update
  await page.locator('//*[@id="accordion-open-body-aboutmtl"]/a[3]').click()
  const pageUpdateMTL = context.waitForEvent('page')
  const newPageUpdateMTL = await pageUpdateMTL
  await newPageUpdateMTL.waitForLoadState()
  await expect(newPageUpdateMTL).toHaveURL(new RegExp(('/th/about-mtl/news-and-update')))

  //Footer Redeem
  await page.locator('//*[@id="accordion-open-body-smileclub"]/a[1]').click()
  const pageRedeem = context.waitForEvent('page')
  const newPageRedeem = await pageRedeem
  await newPageRedeem.waitForLoadState()
  await expect(newPageRedeem).toHaveURL(new RegExp(('/th/smileclub/redeem')))
  
  //Footer Privilege
  await page.locator('//*[@id="accordion-open-body-smileclub"]/a[2]').click()
  const pagePrivilege = context.waitForEvent('page')
  const newPagePrivilege = await pagePrivilege
  await newPagePrivilege.waitForLoadState()
  await expect(newPagePrivilege).toHaveURL(new RegExp(('/th/smileclub/privilege')))
  // const section = await page.locator('//*[@id="smileclub-privilege"]')
  // await expect(section).toBeVisible()

  //Footer Activity of happiness
  await page.locator('//*[@id="accordion-open-body-smileclub"]/a[3]').click()
  const pageActivity = context.waitForEvent('page')
  const newPageActivity = await pageActivity
  await newPageActivity.waitForLoadState()
  await expect(newPageActivity).toHaveURL(new RegExp(('/th/smileclub/activityofhappiness')))
  // const titleActivity = await page.locator('//html/body/main/div[1]/h2')
  // await expect(titleActivity).toContainText('ประมวลภาพกิจกรรมแห่งความสุข')

  //Footer The utmost-privilege
  await page.locator('//*[@id="accordion-open-body-smileclub"]/a[4]').click()
  const pageUtmost = context.waitForEvent('page')
  const newPageUtmost = await pageUtmost
  await newPageUtmost.waitForLoadState()
  await expect(newPageUtmost).toHaveURL(new RegExp(('/th/smileclub/theutmost-privilege')))
  // const titleTheutmost = await page.locator('//html/body/main/div[1]/main/section[1]/h2')
  // await expect(titleTheutmost).toContainText('สิทธิพิเศษ...สุดพิเศษสำหรับคุณ')

  //Footer About Smile club
  await page.locator('//*[@id="accordion-open-body-smileclub"]/a[5]').click()
  const pageAboutSmile = context.waitForEvent('page')
  const newPageAboutSmile = await pageAboutSmile
  await newPageAboutSmile.waitForLoadState()
  await expect(newPageAboutSmile).toHaveURL(new RegExp(('/th/smileclub/about-us')))
  // const titleSmileclub = await page.locator('//html/body/main/div[1]/h1')
  // await expect(titleSmileclub).toContainText('เรื่องราวของความสุขและรอยยิ้ม')

  //Footer MTB
  await page.locator('//*[@id="accordion-open-body-website"]/a[1]').click()
  const pageMTB = context.waitForEvent('page')
  const newPageMTB = await pageMTB
  await newPageMTB.waitForLoadState()
  await expect(newPageMTB).toHaveURL('https://gettgo.com/')
  await page.goto('/th')

  // // //Footer Smile service can't open
  // // await page.locator('//*[@id="accordion-open-body-website"]/a[2]').click()
  //  const pageSmileService = context.waitForEvent('page')
  // const newPageSmileService= await pageSmileService
  // await newPageSmileService.waitForLoadState()
  // // await expect(newPageSmileService).toHaveURL(new RegExp(('https://gettgo.com/')))
  // // await page.goto('/th')

  //Footer MTL Fit
  await page.locator('//*[@id="accordion-open-body-website"]/a[3]').click()
  const pageMTLFit = context.waitForEvent('page')
  const newPageMTLFit = await pageMTLFit
  await newPageMTLFit.waitForLoadState()
  await expect(newPageMTLFit).toHaveURL(new RegExp(('/th/mtlfit')))
  
  // // // //Footer เมืองไทยตะกาฟุล can't open
  // // // await page.locator('//*[@id="accordion-open-body-website"]/a[4]').click()
  // // // await expect(page).toHaveURL('https://www.muangthaitakaful.com/')
  // // // await page.goto('/th')

  //Footer OIC
  await page.locator('//*[@id="accordion-open-body-website"]/a[5]').click()
  const pageOIC = context.waitForEvent('page')
  const newPageOIC = await pageOIC
  await newPageOIC.waitForLoadState()
  await expect(newPageOIC).toHaveURL('https://www.oic.or.th/th/consumer')
  
  //Footer TLAA
  await page.locator('//*[@id="accordion-open-body-website"]/a[6]').click()
  const pageTLAA = context.waitForEvent('page')
  const newPageTLAA = await pageTLAA
  await newPageTLAA.waitForLoadState()
  await expect(newPageTLAA).toHaveURL('https://www.tlaa.org/')
  
  //Footer SEC
  await page.locator('//*[@id="accordion-open-body-website"]/a[7]').click()
  const pageSEC = context.waitForEvent('page')
  const newPageSEC = await pageSEC
  await newPageSEC.waitForLoadState()
  await expect(newPageSEC).toHaveURL('https://www.sec.or.th/TH/Pages/Home.aspx')
  
  //Footer MTL MyFund
  await page.locator('//*[@id="accordion-open-body-login"]/a[1]').click()
  const pageMyFund = context.waitForEvent('page')
  const newPageMyFund = await pageMyFund
  await newPageMyFund.waitForLoadState()
  await expect(newPageMyFund).toHaveURL('https://mtlmyfund.muangthai.co.th/login.aspx')
  await page.goto('/th')

  //Footer MTL Agent
  await page.locator('//*[@id="accordion-open-body-login"]/a[2]').click()
  const pageMTLAgent = context.waitForEvent('page')
  const newPageMTLAgent = await pageMTLAgent
  await newPageMTLAgent.waitForLoadState()
  await expect(newPageMTLAgent).toHaveURL('https://smartweb.muangthai.co.th/landing')
  await page.goto('/th')

  //Footer Smile group benefits
  await page.locator('//*[@id="accordion-open-body-login"]/a[3]').click()
  const pageBenefits = context.waitForEvent('page')
  const newPageBenefits = await pageBenefits
  await newPageBenefits.waitForLoadState()
  await expect(newPageBenefits).toHaveURL('https://smilegroup.muangthai.co.th/home')
  await page.goto('/th')

  //Footer Search agent detail
  await page.locator('//*[@id="accordion-open-body-login"]/a[4]').click()
  const pageAgent = context.waitForEvent('page')
  const newPageAgent = await pageAgent
  await newPageAgent.waitForLoadState()
  await expect(newPageAgent).toHaveURL('https://mtlapp.muangthai.co.th/searchagentdetail')
  await page.goto('/th')

  //Footer Regis Smile club
  await page.locator('//*[@id="accordion-open-body-smileclub"]/a[6]').click()
  const pageRegis = context.waitForEvent('page')
  const newPageRegis = await pageRegis
  await newPageRegis.waitForLoadState()
  await expect(newPageRegis).toHaveURL('https://www2.muangthai.co.th/RegisterSmileClub/AppForm?action=register')
  await page.goto('/th')

})


