// Minimal Playwright config to use Chromium headless
module.exports = {
  use: {
    browserName: 'chromium',
    headless: true,
    screenshot: 'only-on-failure',
    trace: 'retain-on-failure'
  }
};