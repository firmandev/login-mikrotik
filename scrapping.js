//AUTHOR Firman Susanto.
//This script for automatically login to wifi id because wifi id has 24 hours.
//This is my first time open source code.

const PUPPETEER   = require('puppeteer');
const C           = require('./constants');

async function login(){
  let launchOptions = { 
    headless: C.noShow,
    executablePath:'/usr/bin/chromium-browser',
    args: ['--no-sandbox', '--disable-setuid-sandbox'] 
  };
  const browser = await PUPPETEER.launch(launchOptions);
  const page = await browser.newPage();
  await page.setViewport({width: 1366, height: 768});
  await page.goto(C.url);
  await page.waitForSelector(C.userElement);
  await page.type(C.userElement, C.username);
  await page.waitForSelector(C.userElementPassword);
  await page.type(C.userElementPassword, C.password);
  await page.click(C.loginElementButton);
  await page.waitForSelector(C.loginAfterElement);
}

(async () => {
  await login();
  process.exit(1);
})();