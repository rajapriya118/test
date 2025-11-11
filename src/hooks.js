const { Before, After, setDefaultTimeout } = require('@cucumber/cucumber');

setDefaultTimeout(120000);

Before(async function () {
  console.log('[Before Hook] Launching browser...');
  await this.launchBrowser({ headless: false }); // switch to true for CI/CD
});

After(async function () {
  console.log('[After Hook] Closing browser...');
  await this.closeBrowser();
});
