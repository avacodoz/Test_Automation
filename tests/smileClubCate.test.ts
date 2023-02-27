import { chromium, test, expect } from "@playwright/test"

test('Check Smile Club Cate',async () => {
  test.setTimeout(0)
  const browsers = await chromium.launch({
        // headless: false
        headless: true
      })
  const context = await browsers.newContext()
  const page = await context.newPage()
  await page.goto('/th')
  await page.locator('//html/body/div[8]/div')
  await page.locator('//*[@id="mtl-cookies-accept-all"]').click()
  await page.locator('//html/body/header/div[1]/nav/div[1]/div[2]/a[1]').click()
  await expect(page).toHaveURL(new RegExp(('/th/smileclub')))

  //Redeem
  const redeem = await page.locator('//html/body/header/div[2]/div/div/a[2]')
  await redeem.click()
  await expect(page).toHaveURL('/th/smileclub/redeem')
  await page.waitForSelector('//html/body/main/div[1]/section[1]/div/a[1]')
  //All
  await page.locator('//html/body/main/div[1]/section[1]/div/a[1]').click()
  await expect(page).toHaveURL('/th/smileclub/redeem?category=all')
  await expect(page.locator('//html/body/main/div[1]/section[2]/div[2]/div[1]')).toContainText('ทั้งหมด')
  //Dining
  await page.locator('//html/body/main/div[1]/section[1]/div/a[2]').click()
  await expect(page).toHaveURL('/th/smileclub/redeem?category=Dining')
  await expect(page.locator('//html/body/main/div[1]/section[2]/div[2]/div[1]')).toContainText('ร้านอาหาร')
  //Activities
  await page.locator('//html/body/main/div[1]/section[1]/div/a[3]').click()
  await expect(page).toHaveURL('/th/smileclub/redeem?category=Activities')
  await expect(page.locator('//html/body/main/div[1]/section[2]/div[2]/div[1]')).toContainText('กิจกรรม')
  //Entertainment
  await page.locator('//html/body/main/div[1]/section[1]/div/a[4]').click()
  await expect(page).toHaveURL('/th/smileclub/redeem?category=Activities')
  await expect(page.locator('//html/body/main/div[1]/section[2]/div[2]/div[1]')).toContainText('ความบันเทิง')
  //Health
  await page.locator('//html/body/main/div[1]/section[1]/div/a[5]').click()
  await expect(page).toHaveURL('/th/smileclub/redeem?category=Health')
  await expect(page.locator('//html/body/main/div[1]/section[2]/div[2]/div[1]')).toContainText('สุขภาพ')
  //Shopping
  await page.locator('//html/body/main/div[1]/section[1]/div/a[6]').click()
  await expect(page).toHaveURL('/th/smileclub/redeem?category=Shopping')
  await expect(page.locator('//html/body/main/div[1]/section[2]/div[2]/div[1]')).toContainText('ช้อปปิ้ง')
  //Travel
  await page.locator('//html/body/main/div[1]/section[1]/div/a[7]').click()
  await expect(page).toHaveURL('/th/smileclub/redeem?category=Travel')
  await expect(page.locator('//html/body/main/div[1]/section[2]/div[2]/div[1]')).toContainText('ท่องเที่ยว')

  //Privilege
  const privilege = await page.locator('//html/body/header/div[2]/div/div/a[3]')
  await privilege.click()
  await expect(page).toHaveURL('/th/smileclub/privilege')
  await page.waitForSelector('//html/body/main/div[1]/section[1]/div/a[1]')
  //All
  await page.locator('//html/body/main/div[1]/section[1]/div/a[1]').click()
  await expect(page).toHaveURL('/th/smileclub/privilege?category=all')
  await expect(page.locator('//html/body/main/div[1]/section[2]/div[2]/div[1]')).toContainText('ทั้งหมด')
  //Dining
  await page.locator('//html/body/main/div[1]/section[1]/div/a[2]').click()
  await expect(page).toHaveURL('/th/smileclub/privilege?category=Dining')
  await expect(page.locator('//html/body/main/div[1]/section[2]/div[2]/div[1]')).toContainText('ร้านอาหาร')
  //Activities
  await page.locator('//html/body/main/div[1]/section[1]/div/a[3]').click()
  await expect(page).toHaveURL('/th/smileclub/privilege?category=Activities')
  await expect(page.locator('//html/body/main/div[1]/section[2]/div[2]/div[1]')).toContainText('กิจกรรม')
  //Entertainment
  await page.locator('//html/body/main/div[1]/section[1]/div/a[4]').click()
  await expect(page).toHaveURL('/th/smileclub/privilege?category=Entertainment')
  await expect(page.locator('//html/body/main/div[1]/section[2]/div[2]/div[1]')).toContainText('ความบันเทิง')
  //Health
  await page.locator('//html/body/main/div[1]/section[1]/div/a[5]').click()
  await expect(page).toHaveURL('/th/smileclub/privilege?category=Health')
  await expect(page.locator('//html/body/main/div[1]/section[2]/div[2]/div[1]')).toContainText('สุขภาพ')
  //Shopping
  await page.locator('//html/body/main/div[1]/section[1]/div/a[6]').click()
  await expect(page).toHaveURL('/th/smileclub/privilege?category=Shopping')
  await expect(page.locator('//html/body/main/div[1]/section[2]/div[2]/div[1]')).toContainText('ช้อปปิ้ง')
  //Travel
  await page.locator('//html/body/main/div[1]/section[1]/div/a[7]').click()
  await expect(page).toHaveURL('/th/smileclub/privilege?category=Travel')
  await expect(page.locator('//html/body/main/div[1]/section[2]/div[2]/div[1]')).toContainText('ท่องเที่ยว')

  //Activity of happiness
  await page.locator('//html/body/header/div[2]/div/div/a[4]').click()
  await expect(page).toHaveURL('/th/smileclub/activityofhappiness')
  //All
  await page.locator('//html/body/main/div[1]/section[1]/div/a[1]').click()
  await expect(page).toHaveURL('/th/smileclub/activityofhappiness?category=all')
  await expect(page.locator('//html/body/main/div[1]/section[2]/div[2]/div[1]')).toContainText('ทั้งหมด')
  await page.locator('//html/body/main/div[1]/div[3]/a').click()
  await expect(page).toHaveURL('/th/smileclub/activityofhappiness/happiness-listing-page')
  await page.locator('//html/body/div[1]/div/div/span[2]/a').click()
  //Activities
  await page.locator('//html/body/main/div[1]/section[1]/div/a[2]').click()
  await expect(page).toHaveURL('/th/smileclub/activityofhappiness?category=Activities')
  await expect(page.locator('//html/body/main/div[1]/section[2]/div[2]/div[1]')).toContainText('กิจกรรม')
  await page.locator('//html/body/main/div[1]/div[3]/a').click()
  await expect(page).toHaveURL('/th/smileclub/activityofhappiness/happiness-listing-page')
  await page.locator('//html/body/div[1]/div/div/span[2]/a').click()
  //Entertainment
  await page.locator('//html/body/main/div[1]/section[1]/div/a[3]').click()
  await expect(page).toHaveURL(new RegExp(('/th/smileclub/activityofhappiness?category=Entertainment')))
  await expect(page.locator('//html/body/main/div[1]/section[2]/div[2]/div[1]')).toContainText('ความบันเทิง')
  await page.locator('//html/body/main/div[1]/div[3]/a').click()
  await expect(page).toHaveURL('/th/smileclub/activityofhappiness/happiness-listing-page')
  await page.locator('//html/body/div[1]/div/div/span[2]/a').click()
  //Health
  await page.locator('//html/body/main/div[1]/section[1]/div/a[4]').click()
  await expect(page).toHaveURL('/th/smileclub/activityofhappiness?category=Health')
  await expect(page.locator('//html/body/main/div[1]/section[2]/div[2]/div[1]')).toContainText('สุขภาพ')
  await page.locator('//html/body/main/div[1]/div[3]/a').click()
  await expect(page).toHaveURL('/th/smileclub/activityofhappiness/happiness-listing-page')
  await page.locator('//html/body/div[1]/div/div/span[2]/a').click()
  //Travel
  await page.locator('//html/body/main/div[1]/section[1]/div/a[5]').click()
  await expect(page).toHaveURL('/th/smileclub/activityofhappiness?category=Travel')
  await expect(page.locator('//html/body/main/div[1]/section[2]/div[2]/div[1]')).toContainText('ท่องเที่ยว')
  await page.locator('//html/body/main/div[1]/div[3]/a').click()
  await expect(page).toHaveURL('/th/smileclub/activityofhappiness/happiness-listing-page')
  await page.locator('//html/body/div[1]/div/div/span[2]/a').click()

  //Theutmost-privilege
  await page.locator('//html/body/header/div[2]/div/div/a[5]').click()
  await expect(page).toHaveURL('/th/smileclub/theutmost-privilege')
  await page.locator('//html/body/main/div[1]/main/div[1]/div/div[2]/a').click()
  await expect(page).toHaveURL('/th/smileclub/theutmost-privilege/smileexclusiveprivileges2022')
  await page.locator('//html/body/div[1]/div/div/span[2]/a').click()
  await expect(page.locator('//html/body/main/div[1]/main/section[1]/h2')).toHaveText('สิทธิพิเศษ...สุดพิเศษสำหรับคุณ')
  //BD
  await page.locator('//html/body/main/div[1]/main/section[2]/div[1]/div/a').click()
  await expect(page).toHaveURL('/th/smileclub/theutmost-privilege/birthdaygift')
  await page.locator('//html/body/main/div[1]/div/div/div/a[5]').click()
  //Smile Healthy Plus 
  await page.locator('//html/body/main/div[1]/main/section[2]/div[2]/div/a').click()
  await expect(page).toHaveURL('/th/smileclub/theutmost-privilege/theutmost-smilehealthyplus2023')
  await page.locator('//html/body/main/div[1]/div/div/div/a[5]').click()
  //Parking
  await page.locator('//html/body/main/div[1]/main/section[2]/div[3]/div/a').click()
  await expect(page).toHaveURL('/th/smileclub/theutmost-privilege/theutmost-parking-lounge')
  await page.locator('//html/body/main/div[1]/div/div/div/a[5]').click()
  //Smile Health 
  await page.locator('//html/body/main/div[1]/main/div[2]/div/div[2]/a').click()
  await expect(page).toHaveURL('/th/smileclub/theutmost-privilege/smilehealth-2021')
  await page.locator('//html/body/main/div[1]/div/div/div/a[5]').click()

  //About-us
  await page.locator('//html/body/header/div[2]/div/div/a[6]').click()
  await expect(page).toHaveURL('/th/smileclub/about-us')
  await expect(page.locator('//html/body/main/div[3]/div/h1')).toHaveText('ประวัติความเป็นมาเมืองไทยสไมล์คลับ')
  await page.locator('//html/body/main/div[5]/a').click()
  await expect(page).toHaveURL('/th/smileclub/about-us/smileclub-cards')
  await page.locator('//html/body/main/div/div[2]/div/button/a').click()
  await expect(page).toHaveURL('https://www2.muangthai.co.th/RegisterSmileClub/AppForm?action=register')
  await page.goto('/th')
})