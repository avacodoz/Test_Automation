import { chromium, test, expect } from "@playwright/test"

test.only('Check Download Brochure',async () => {
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

  //Insurance
  await page.locator('//html/body/header/div/nav/div[1]/div[1]/a[2]').click()
  //whole-life-insurance
  //Happy Return
  await page.locator('//html/body/main/div[1]/div[2]/div/div[2]/div/div/div[1]/div/div/div[1]/a').click()
  await page.locator('//html/body/main/section/div/div[1]/div[2]/div[1]/div[2]/div[3]/a').click()
  const newPageBrochure = context.waitForEvent('page')
  const newPageHappyReturn = await newPageBrochure
  await newPageHappyReturn.waitForLoadState()
  await expect(newPageHappyReturn).toHaveURL(new RegExp(('/assets/9e42e579-3669-4665-8c75-1add15481284/04-0002%20%E0%B9%82%E0%B8%9A%E0%B8%A3%E0%B8%8A%E0%B8%B1%E0%B8%A7%E0%B8%A3%E0%B9%8C%20%E0%B9%80%E0%B8%A1%E0%B8%B7%E0%B8%AD%E0%B8%87%E0%B9%84%E0%B8%97%E0%B8%A2%20%E0%B9%81%E0%B8%AE%E0%B8%9B%E0%B8%9B%E0%B8%B5%E0%B9%89%20%E0%B8%A3%E0%B8%B5%E0%B9%80%E0%B8%97%E0%B8%B4%E0%B8%A3%E0%B9%8C%E0%B8%99%2099-7_01.03.65.pdf')))
  await page.goto('/th/whole-life-insurance')
  //Premier legacy
  await page.locator('//html/body/main/div[1]/main/section[2]/div[1]/div[2]/div/div[1]/a').click()
  await page.locator('//html/body/main/section/div/div[1]/div[2]/div[1]/div[2]/div[3]/a').click()
  const newPagePremier = context.waitForEvent('page')
  const newPagePremierLegacy = await newPagePremier
  await newPagePremierLegacy.waitForLoadState()
  await expect(newPagePremierLegacy).toHaveURL(new RegExp(('/assets/3682289f-d5e3-4aa0-bddc-9537a5fa4233/MTL-Premier-Lagacy.pdf')))
  await page.goto('/th/whole-life-insurance')
  //Smart Protection
  await page.locator('//html/body/main/div[1]/main/section[2]/div[1]/div[3]/div/div[1]/a').click()
  await page.locator('//html/body/main/section/div/div[1]/div[2]/div[1]/div[2]/div[3]/a').click()
  const newPageSMP = context.waitForEvent('page')
  const newPageSmart = await newPageSMP
  await newPageSmart.waitForLoadState()
  await expect(newPageSmart).toHaveURL(new RegExp(('/assets/aefba0f6-bce9-4d15-8213-f55922d80722/MTL-Smart-Protection-99-20.pdf')))
  await page.goto('/th/life-insurance')

  //savings-insurance
  await page.locator('//html/body/main/div[1]/section[1]/div/ul/div[2]/a').click()
  await expect(page).toHaveURL(new RegExp(('/th/savings-insurance')))
  //muangthai-smartl-inked-15-3-Global
  await page.locator('//html/body/main/div[1]/main/section[2]/div[1]/div[2]/div/div[1]/a').click()
  await page.locator('//html/body/main/section/div/div[1]/div[2]/div[1]/div[2]/div[3]/a').click()
  const newPageInked = context.waitForEvent('page')
  const newPageSmartInked = await newPageInked
  await newPageSmartInked.waitForLoadState()
  await expect(newPageSmartInked).toHaveURL(new RegExp(('/assets/c8b88494-36c8-4347-aa15-39c76ea632be/04-0478%20%E0%B9%82%E0%B8%9A%E0%B8%A3%E0%B8%8A%E0%B8%B1%E0%B8%A7%E0%B8%A3%E0%B9%8C%20%E0%B9%80%E0%B8%A1%E0%B8%B7%E0%B8%AD%E0%B8%87%E0%B9%84%E0%B8%97%E0%B8%A2%20%E0%B8%AA%E0%B8%A1%E0%B8%B2%E0%B8%A3%E0%B9%8C%E0%B8%97%20%E0%B8%A5%E0%B8%B4%E0%B8%87%E0%B8%84%E0%B9%8C%2015-3_15.08.65.pdf')))
  await page.goto('/th/savings-insurance')
  //super-saver-25-16
  await page.locator('//html/body/main/div[1]/main/section[2]/div[1]/div[6]/div/div[1]/a').click()
  await page.locator('//html/body/main/section/div/div[1]/div[2]/div[1]/div[2]/div[3]/a').click()
  const newPageSuper = context.waitForEvent('page')
  const newPageSuperSaver = await newPageSuper
  await newPageSuperSaver.waitForLoadState()
  await expect(newPageSuperSaver).toHaveURL(new RegExp(('/assets/831b825e-1b8a-42aa-ae5d-b53a82f4a5e1/MTL-Muangthai-Super-Saver-25-16.pdf')))
  await page.goto('/th/life-insurance')

  //Retirement-insurance
  await page.locator('//html/body/main/div[1]/main/section[1]/div/ul/div[3]/a').click()
  await expect(page).toHaveURL(new RegExp(('/th/retirement-insurance')))
  //return-retire
  await page.locator('//html/body/main/div[1]/main/section[2]/div[1]/div[1]/div/div[1]/a').click()
  await page.locator('//html/body/main/section/div/div[1]/div[2]/div[1]/div[2]/div[3]/a').click()
  const newPageRetirement = context.waitForEvent('page')
  const newPageRetire = await newPageRetirement
  await newPageRetire.waitForLoadState()
  await expect(newPageRetire).toHaveURL(new RegExp(('/assets/32335d08-31a8-44c9-8f22-199026b95dc1/MTL-Muangthai-Reture-Retire-8505.pdf')))
  await page.goto('/th/retirement-insurance')
  //8560-9960
  await page.locator('//html/body/main/div[1]/main/section[2]/div[1]/div[2]/div/div[1]/a').click()
  await page.locator('//html/body/main/section/div/div[1]/div[2]/div[1]/div[2]/div[3]/a').click()
  const retirement = context.waitForEvent('page')
  const pageRetirement = await retirement
  await pageRetirement.waitForLoadState()
  await expect(pageRetirement).toHaveURL(new RegExp(('/assets/03e9e475-1d26-48ec-806f-9534703e034e/04-0269_%20%209960.pdf')))
  await page.goto('/th/retirement-insurance')
  //9901-d65
  await page.locator('//html/body/main/div[1]/main/section[2]/div[1]/div[3]/div/div[1]/a').click()
  await page.locator('//html/body/main/section/div/div[1]/div[2]/div[1]/div[2]/div[3]/a').click()
  const retirementIns = context.waitForEvent('page')
  const pageRetirementIns = await retirementIns
  await pageRetirementIns.waitForLoadState()
  await expect(pageRetirementIns).toHaveURL(new RegExp(('/assets/3e4f3ee1-268c-4d0f-b4d2-3eab5d4c712b/04-0479-9901D65.pdf')))
  await page.goto('/th/life-insurance')

  //health-insuranc
  await page.locator('//html/body/main/div[1]/section[1]/div/ul/div[4]/a').click()
  await expect(page).toHaveURL(new RegExp(('/th/health-insurance')))
  //elite-health-plus
  await page.locator('//html/body/main/div[1]/main/section[2]/div[1]/div[1]/div/div[1]/a').click()
  await page.locator('//html/body/main/section/div/div[1]/div[2]/div[1]/div[2]/div[3]/a').click()
  const eliteHealth = context.waitForEvent('page')
  const eliteHealthPlus = await eliteHealth
  await eliteHealthPlus.waitForLoadState()
  await expect(eliteHealthPlus).toHaveURL(new RegExp(('/assets/bae25e3a-cc83-4e1a-85fa-b58f0d364cb0/04-0480_Brochure_Elite-Health-Plus-FINAL.pdf')))
  await page.goto('/th/health-insurance')
  //d-health-plus
  await page.locator('//html/body/main/div[1]/main/section[2]/div[1]/div[2]/div/div[1]/a').click()
  await page.locator('//html/body/main/section/div/div[1]/div[2]/div[1]/div[2]/div[3]/a').click()
  const dHealth = context.waitForEvent('page')
  const dHealthPlus = await dHealth
  await dHealthPlus.waitForLoadState()
  await expect(dHealthPlus).toHaveURL(new RegExp(('/assets/918b8a50-224f-4160-bd59-20ecbdc76dcb/04-0481_DHealthPlus_20221222.pdf')))
  await page.goto('/th/health-insurance')
  //maochai-extra
  await page.locator('//html/body/main/div[1]/main/section[2]/div[1]/div[3]/div/div[1]/a').click()
  await page.locator('//html/body/main/section/div/div[1]/div[2]/div[1]/div[2]/div[3]/a').click()
  const maochai = context.waitForEvent('page')
  const maochaiExtra = await maochai
  await maochaiExtra.waitForLoadState()
  await expect(maochaiExtra).toHaveURL(new RegExp(('/assets/870a01ac-6a4a-4879-a3c3-0c0e300cfc9b/04-0470_Brochure%20Mao%20Chai%20Extra%20NHS-A4.pdf')))
  await page.goto('/th/health-insurance')
   //d-kids-plus
   await page.locator('//html/body/main/div[1]/main/section[2]/div[1]/div[4]/div/div[1]/a').click()
   await page.locator('//html/body/main/section/div/div[1]/div[2]/div[1]/div[2]/div[3]/a').click()
   const dKids = context.waitForEvent('page')
   const dKidsPlus = await dKids
   await dKidsPlus.waitForLoadState()
   await expect(dKidsPlus).toHaveURL(new RegExp(('/assets/8590ad8f-87ed-4a39-a361-1da96515b789/Brochure%20D%20Kids%20Plus.pdf')))
   await page.goto('/th/health-insurance')
   //extra-care-plus
   await page.locator('//html/body/main/div[1]/main/section[2]/div[1]/div[5]/div/div[1]/a').click()
   await page.locator('//html/body/main/section/div/div[1]/div[2]/div[1]/div[2]/div[3]/a').click()
   const extraCare = context.waitForEvent('page')
   const extraCarePlus = await extraCare
   await extraCarePlus.waitForLoadState()
   await expect(extraCarePlus).toHaveURL(new RegExp(('/assets/2aab8e7c-a829-412f-a11d-d4ebda8e555e/04-0469_Brochure%20Extra%20Care%20Plus-11years%20NHS.pdf')))
   await page.goto('/th/health-insurance')
   //opd
   await page.locator('//html/body/main/div[1]/main/section[2]/div[1]/div[6]/div/div[1]/a').click()
   await page.locator('//html/body/main/section/div/div[1]/div[2]/div[1]/div[2]/div[3]/a').click()
   const opdPage = context.waitForEvent('page')
   const opd = await opdPage
   await opd.waitForLoadState()
   await expect(opd).toHaveURL(new RegExp(('/assets/26518f38-6280-4f2e-be0e-c62b433a906b/V2040241OPDFINALcompressed.pdf')))
   await page.goto('/th/life-insurance')

  //critical-illness-insurance
  await page.locator('//html/body/main/div[1]/section[1]/div/ul/div[5]/a').click()
  await expect(page).toHaveURL(new RegExp(('/th/critical-illness-insurance')))
  //d-care
  await page.locator('//html/body/main/div[1]/main/section[2]/div[1]/div[1]/div/div[1]/a').click()
  await page.locator('//html/body/main/section/div/div[1]/div[2]/div[1]/div[2]/div[3]/a').click()
  const newPageDCare = context.waitForEvent('page')
  const dCare = await newPageDCare
  await dCare.waitForLoadState()
  await expect(dCare).toHaveURL(new RegExp(('/assets/b1d04c03-6cf8-4bb0-ba27-dcd2f2cbce41/Dcare_v3_20200315.pdf')))
  await page.goto('/th/critical-illness-insurance')
  //ci-perfect-care
  await page.locator('//html/body/main/div[1]/main/section[2]/div[1]/div[2]/div/div[1]/a').click()
  await page.locator('//html/body/main/section/div/div[1]/div[2]/div[1]/div[2]/div[3]/a').click()
  const newPageCi = context.waitForEvent('page')
  const ciPerfect = await newPageCi
  await ciPerfect.waitForLoadState()
  await expect(ciPerfect).toHaveURL(new RegExp(('/assets/046a5d80-613e-41bd-9a4e-2d75c3108d86/04-0351%20ciperfect.pdf')))
  await page.goto('/th/critical-illness-insurance')
  //pure-cancer
  await page.locator('//html/body/main/div[1]/main/section[2]/div[1]/div[4]/div/div[1]/a').click()
  await page.locator('//html/body/main/section/div/div[1]/div[2]/div[1]/div[2]/div[3]/a').click()
  const newPureCancer = context.waitForEvent('page')
  const pureCancer = await newPureCancer
  await pureCancer.waitForLoadState()
  await expect(pureCancer).toHaveURL(new RegExp(('/assets/4f9ebc9a-6161-4069-947f-d6b747395d23/04-0225_%20Pure%20Cancer.pdf')))
  await page.goto('/th/critical-illness-insurance')
  //care-plus
  await page.locator('//html/body/main/div[1]/main/section[2]/div[1]/div[5]/div/div[1]/a').click()
  await page.locator('//html/body/main/section/div/div[1]/div[2]/div[1]/div[2]/div[3]/a').click()
  const newCarePlus = context.waitForEvent('page')
  const carePlus = await newCarePlus
  await carePlus.waitForLoadState()
  await expect(carePlus).toHaveURL(new RegExp(('/assets/89bae81d-839f-428d-9a87-9c4a3e19d413/04-0485_Brochure_Care%20Plus.pdf')))
  await page.goto('/th/critical-illness-insurance')
  //smart-silver-smart-silver-plus
  await page.locator('//html/body/main/div[1]/main/section[2]/div[1]/div[6]/div/div[1]/a').click()
  await page.locator('//html/body/main/section/div/div[1]/div[2]/div[1]/div[2]/div[3]/a').click()
  const smartSilver = context.waitForEvent('page')
  const smartSilverPlus = await smartSilver
  await smartSilverPlus.waitForLoadState()
  await expect(smartSilverPlus).toHaveURL(new RegExp(('/assets/5010a8d2-2dd9-444b-93c3-e79a3fc0d66e/040484Smart%20SilverSmart%20Silver%20Plusupdate271022final.pdf')))
  await page.goto('/th/life-insurance')

  //personal-accident-insurance
  await page.locator('//html/body/main/div[1]/main/section[1]/div/ul/div[6]/a').click()
  await expect(page).toHaveURL(new RegExp(('/th/personal-accident-insurance')))
  //smart-lady-pa
  await page.locator('//html/body/main/div[1]/main/section[2]/div[1]/div[1]/div/div[1]/a').click()
  await page.locator('//html/body/main/section/div/div[1]/div[2]/div[1]/div[2]/div[3]/a').click()
  const newSmartLady = context.waitForEvent('page')
  const newSmartLadyPA = await newSmartLady
  await newSmartLadyPA.waitForLoadState()
  await expect(newSmartLadyPA).toHaveURL(new RegExp(('/assets/05ba346c-724a-474b-84b5-21613a749ad7/04-0451_Brochure_SMART%20LADY%20PA_060123.pdf')))
  await page.goto('/th/personal-accident-insurance')
  //pa-safety
  await page.locator('//html/body/main/div[1]/main/section[2]/div[1]/div[2]/div/div[1]/a').click()
  await page.locator('//html/body/main/section/div/div[1]/div[2]/div[1]/div[2]/div[3]/a').click()
  const newPaSafety = context.waitForEvent('page')
  const smartLadyPA = await newPaSafety
  await smartLadyPA.waitForLoadState()
  await expect(smartLadyPA).toHaveURL(new RegExp(('/assets/26be63d6-ae85-4654-8491-20169afcd168/04-0502_PA%20Safety_060123.pdf')))
  await page.goto('/th/personal-accident-insurance')
  //pa-extreme
  await page.locator('//html/body/main/div[1]/main/section[2]/div[1]/div[4]/div/div[1]/a').click()
  await page.locator('//html/body/main/section/div/div[1]/div[2]/div[1]/div[2]/div[3]/a').click()
  const newPaExtreme = context.waitForEvent('page')
  const paExtreme = await newPaExtreme
  await paExtreme.waitForLoadState()
  await expect(paExtreme).toHaveURL(new RegExp(('/assets/836c3065-8e2d-4b85-b855-a961f12c4ce0/04-0031_PA-Extreame_221117.pdf')))
  await page.goto('/th/personal-accident-insurance')
  //pa-broken-bone
  await page.locator('//html/body/main/div[1]/main/section[2]/div[1]/div[5]/div/div[1]/a').click()
  await page.locator('//html/body/main/section/div/div[1]/div[2]/div[1]/div[2]/div[3]/a').click()
  const newPaBrokenBone = context.waitForEvent('page')
  const paBrokenBone = await newPaBrokenBone
  await paBrokenBone.waitForLoadState()
  await expect(paBrokenBone).toHaveURL(new RegExp(('/assets/d7684195-e266-4a95-b543-7c0a0db8ee58/04-0275_PA-BrokenBone_221117.pdf')))
  await page.goto('/th/life-insurance')

  //investment
  await page.locator('//html/body/main/div[1]/section[1]/div/ul/div[7]/a').click()
  await expect(page).toHaveURL(new RegExp(('/th/investment')))
  //unit-linked-regular-premium
  await page.locator('//html/body/main/div[1]/main/section[2]/div[1]/div[2]/div/div[1]/a').click()
  await page.locator('//html/body/main/section/div/div[1]/div[2]/div[1]/div[2]/div[3]/a').click()
  const newUnitLinked = context.waitForEvent('page')
  const unitLinked = await newUnitLinked
  await unitLinked.waitForLoadState()
  await expect(unitLinked).toHaveURL(new RegExp(('/assets/10c20766-f670-4181-a280-5f9866ab4f19/04-0427-mDesign-21032022.pdf')))
  await page.goto('/th/investment')
  //mGrow615
  await page.locator('//html/body/main/div[1]/main/section[2]/div[1]/div[3]/div/div[1]/a').click()
  await page.locator('//html/body/main/section/div/div[1]/div[2]/div[1]/div[2]/div[3]/a').click()
  const newMGrow = context.waitForEvent('page')
  const mGrow = await newMGrow
  await mGrow.waitForLoadState()
  await expect(mGrow).toHaveURL(new RegExp(('/assets/e8f0b125-54dc-4d0d-b28e-44903d19416b/04-0467-mGrow615-21032022.pdf')))
  await page.goto('/th/investment')
  //mOnePlus
  await page.locator('//html/body/main/div[1]/main/section[2]/div[1]/div[4]/div/div[1]/a').click()
  await page.locator('//html/body/main/section/div/div[1]/div[2]/div[1]/div[2]/div[3]/a').click()
  const newMOnePlus= context.waitForEvent('page')
  const mOnePlus = await newMOnePlus
  await mOnePlus.waitForLoadState()
  await expect(mOnePlus).toHaveURL(new RegExp(('/assets/0cf521e6-31b9-4db0-a743-cc6d943b7fa9/Brouchure%20mOnePlus%20rider%20MTL.pdf')))
  await page.goto('/th/investment')
   //mOne
  await page.locator('//html/body/main/div[1]/main/section[2]/div[1]/div[5]/div/div[1]/a').click()
  await page.locator('//html/body/main/section/div/div[1]/div[2]/div[1]/div[2]/div[3]/a').click()
  const newMOne= context.waitForEvent('page')
  const mOne = await newMOne
  await mOne.waitForLoadState()
  await expect(mOne).toHaveURL(new RegExp(('/assets/47699621-83fa-420c-b22d-34748b6f4368/04-0428-mOne-21032022.pdf')))
  await page.goto('/th/life-insurance')

  //group-insurance
  await page.locator('//html/body/main/div[1]/section[1]/div/ul/div[9]/a').click()
  await expect(page).toHaveURL(new RegExp(('/th/group-insurance')))
  //Small Group & Housekeeping Package
  await page.locator('//html/body/main/section/div/div[1]/div[2]/div[1]/div[2]/div[3]/a').click()
  const newSmallGroup = context.waitForEvent('page')
  const smallGroup = await newSmallGroup
  await smallGroup.waitForLoadState()
  await expect(smallGroup).toHaveURL(new RegExp(('/assets/910edc60-b383-4cca-a6b5-07a98045de9f/040466Package%20Small%20GroupHousekeepingFinalcompressed.pdf')))
  await page.goto('/th/life-insurance')

  //muangthaitakaful
  await page.locator('//html/body/main/div[1]/section[1]/div/ul/div[8]/a').click()
  await expect(page).toHaveURL(new RegExp(('/th/muangthaitakaful')))
  //MuangthaiTakaful-Ihsan
  await page.locator('//html/body/main/div[1]/main/section[2]/div[1]/div[1]/div/div[1]/a').click()
  const newPageTakaful= context.waitForEvent('page')
  const takaful = await newPageTakaful
  await takaful.waitForLoadState()
  await expect(takaful).toHaveURL(new RegExp(('/assets/5ec42b33-1efd-4c13-8e5a-6c18899884fc/04-0150_MuangthaiTakaful-Ihsan.pdf')))
  await takaful.close()
  //Makaful-Saving
  await page.locator('//html/body/main/div[1]/main/section[2]/div[1]/div[2]/div/div[3]/span[2]/a').click()
  const newPageSaving = context.waitForEvent('page')
  const saving = await newPageSaving
  await saving.waitForLoadState()
  await expect(saving).toHaveURL(new RegExp(('/assets/8a52732d-1f1d-45d6-8598-046bb0ffe96a/MuangthaiTakaful-Saving-20-15.pdf')))
  await saving.close()
  //Hifas
  await page.locator('//html/body/main/div[1]/main/section[2]/div[1]/div[3]/div/div[1]/a').click()
  const newPageHifas= context.waitForEvent('page')
  const hifas = await newPageHifas
  await hifas.waitForLoadState()
  await expect(hifas).toHaveURL(new RegExp(('/assets/84207a00-ad10-4c43-9aad-e92986b1e31f/MuangthaiTakaful-Hifas.pdf')))
  await hifas.close()
  //10/4
  await page.locator('//html/body/main/div[1]/main/section[2]/div[1]/div[4]/div/div[1]/a').click()
  const newPageSavingIns = context.waitForEvent('page')
  const savingIns = await newPageSavingIns
  await savingIns.waitForLoadState()
  await expect(savingIns).toHaveURL(new RegExp(('/assets/21c4eb06-6789-49af-8c7d-827a35f60763.pdf')))
  await savingIns.close()
  //MuangthaiTakaful-Saving5
  await page.locator('//html/body/main/div[1]/main/section[2]/div[1]/div[5]/div/div[1]/a').click()
  const pageSaving = context.waitForEvent('page')
  const spageSavingIns = await pageSaving
  await spageSavingIns.waitForLoadState()
  await expect(spageSavingIns).toHaveURL(new RegExp(('/assets/7c7ae580-8e10-4788-9b1e-9337bac0cb3b/MuangthaiTakaful-Saving5-5.pdf')))
  await spageSavingIns.close()
  //MuanthaiTakaful-Wholelife9520
  await page.locator('//html/body/main/div[1]/main/section[2]/div[1]/div[6]/div/div[1]/a').click()
  const newPageMuanthaiTakafulWholelife = context.waitForEvent('page')
  const muanthaiTakafulWholelife = await newPageMuanthaiTakafulWholelife
  await muanthaiTakafulWholelife.waitForLoadState()
  await expect(muanthaiTakafulWholelife).toHaveURL(new RegExp(('/assets/ffe99268-a65d-489d-b657-0ee19349b1fa/MuanthaiTakaful-Wholelife9520.pdf')))
  await muanthaiTakafulWholelife.close()
})


