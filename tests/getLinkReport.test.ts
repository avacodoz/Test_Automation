import { chromium,test } from "@playwright/test"

test('Link',async()=>{
  test.setTimeout(0)
  const browsers = await chromium.launch({
            // headless: false
            headless: true
        })
  const context = await browsers.newContext()
  const page = await context.newPage()
  const seenURLs = new Set()
  const crawl = async (url) => {
    if (seenURLs.has(url)) {
      return console.log(`Visit page ${url}`)
    }
    seenURLs.add(url)
    // console.log(`Visit page ${url}`)
    if (!url.startsWith('https://www.muangthai.co.th')) {
      return console.log(`Visit page not start with MTL ${url}`)
    }
    console.log(`Visiting page start with ${url}`)
    await page.goto(url)
    // await page.waitForSelector('.view-body>*')
    const urls = await page.$$eval('a', (elements) =>
      elements.map((el) => el.href),
    )
    for await (const urlLink of urls) {
      await crawl(urlLink)
    }
  }
  await crawl('https://www.muangthai.co.th')
})


