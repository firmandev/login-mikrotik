//AUTHOR Firman Susanto.
//This script for automatically login to wifi id because wifi id has 24 hours.
//This is my first time open source code.

const PUPPETEER   = require('puppeteer');
const C           = require('./constants');
const USERID      = '#login-username';
const PASSWORD    = '#login-password';
const URL         = 'http://welcome2.wifi.id/login/?gw_id=WAG-D2-JT&client_mac=40:9f:38:ea:f4:35&wlan=GPON02-D2-CPD-3%20pon%201/1/15/4/25/5:135&sessionid=WAG-D2-04100140300000a2bb58229504';
const LOGINBUTTON = '';

async function login(params){
  let launchOptions = { headless: false };
  const browser = await PUPPETEER.launch(launchOptions);
  const page = await browser.newPage();
  await page.setViewport({width: 1366, height: 768});
  await page.goto(params.URL);
  await page.waitForSelector(params.userElement);
  await page.type(params.userElement, C.username);
  await page.waitForSelector(params.passElement);
  await page.type(params.passElement, C.password);
  await page.click(LOGINBUTTON);
}

(async () => {
  let params = [];
  params.push({
     userElement  : USERID,
     passElement  : PASSWORD,
     loginElement : LOGINBUTTON,
     url          : URL
  });
  await login(params);
  process.exit(1);
})();