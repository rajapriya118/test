const { setWorldConstructor, setDefaultTimeout } = require('@cucumber/cucumber');
const { chromium } = require('playwright');

class CustomWorld {
  constructor() {
    this.browser = null;
    this.context = null;
    this.page = null;
    this.frame = null;
  }

  async launchBrowser(options = { headless: false }) {
    console.log('🚀 Launching browser for new scenario...');
    this.browser = await chromium.launch(options);
    this.context = await this.browser.newContext();
    this.page = await this.context.newPage();
  }

  async closeBrowser() {
    if (this.browser) {
      console.log('🧹 Closing browser after scenario...');
      await this.browser.close();
    }
  }
}

setWorldConstructor(CustomWorld);
setDefaultTimeout(120000);
