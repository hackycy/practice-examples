const puppeteer = require('puppeteer-core');
const cheerio = require('cheerio');

(async () => {
  const browser = await puppeteer.launch({
    executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    //如果是访问https页面 此属性会忽略https错误
    ignoreHTTPSErrors: true,
  });
  const page = await browser.newPage();
  await page.goto('http://book.zongheng.com/book/408586.html', { waitUntil: 'networkidle0' });

  await page.pdf({path: 'hn.pdf', format: 'A4'});
  const content = await page.content();

  const $ = cheerio.load(content);

  console.log($('.book-html-box .book-top .book-main .book-new-chapter .tit').text());

  await browser.close();
})();