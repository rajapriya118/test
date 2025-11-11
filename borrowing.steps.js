const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');

Given('I open the ANZ borrowing power calculator', async function () {
  await this.page.goto('https://www.anz.com.au/personal/home-loans/calculators-tools/much-borrow/', {
    waitUntil: 'domcontentloaded',
    timeout: 90000  // 👈 increase to 90 seconds
  });

  // Sometimes site has cookie banner or iframe
  await this.page.waitForTimeout(5000);
  console.log('✅ Page loaded successfully');
});


When('I fill the borrowing calculator form with valid data', async function () {
  const frame = this.page.frameLocator('iframe[title*="Borrowing power calculator"]');

  await frame.locator('input#application_type_single').check();
  await frame.locator('select#number_of_dependants').selectOption('0');
  await frame.locator('input#borrow_type_home').check();

  await frame.locator('input#income').fill('100000');
  await frame.locator('input#other_income').fill('10000');
  await frame.locator('input#expenses').fill('2000');
  await frame.locator('input#home_loan_repayment').fill('0');
  await frame.locator('input#other_loan_repayment').fill('100');
  await frame.locator('input#other_commitments').fill('0');
  await frame.locator('input#credit_card_limits').fill('10000');

  await frame.locator('button:has-text("Work out how much I could borrow")').click();
  await this.page.waitForTimeout(5000);
});

Then('I should see the borrowing estimate displayed as {string}', async function (expectedValue) {
  const frame = this.page.frameLocator('iframe[title*="Borrowing power calculator"]');
  const result = await frame.locator('#borrowResultTextAmount').textContent();
  expect(result).toContain(expectedValue);
});

When('I fill the form with valid data', async function () {
  await this.page.waitForTimeout(1000);
  const frame = this.page.frameLocator('iframe[title*="Borrowing power calculator"]');

  await frame.locator('input#application_type_single').check();
  await frame.locator('select#number_of_dependants').selectOption('0');
  await frame.locator('input#borrow_type_home').check();
  await frame.locator('input#income').fill('80000');
});

When('I click the start over button', async function () {
  const frame = this.page.frameLocator('iframe[title*="Borrowing power calculator"]');
  await frame.locator('button:has-text("Start over")').click();
  await this.page.waitForTimeout(2000);
});

Then('the form should be reset', async function () {
  const frame = this.page.frameLocator('iframe[title*="Borrowing power calculator"]');
  const incomeValue = await frame.locator('input#income').inputValue();
  expect(incomeValue).toBe('');
});
