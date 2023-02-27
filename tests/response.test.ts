import { chromium, test, expect } from "@playwright/test"

test('Check Footer MTL',async () => {
  const browsers = await chromium.launch({
    headless: false
    // headless: true
  })
  const context = await browsers.newContext()
  const page = await context.newPage()
  await page.goto('https://www.muangthai.co.th/th/service')
  
  const [response] = await Promise.all([
    page.waitForResponse(res =>
        res.status() == 200
    )
  ])

  console.log('Status', await response.status())

})


