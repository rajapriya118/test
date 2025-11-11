const reporter = require('cucumber-html-reporter');
const { exec } = require('child_process');
const path = require('path');

const outputPath = path.join(__dirname, 'reports', 'cucumber_report.html');

const options = {
  theme: 'bootstrap',
  jsonFile: path.join(__dirname, 'reports', 'cucumber_report.json'),
  output: outputPath,
  reportSuiteAsScenarios: true,
  launchReport: false,
  metadata: {
    "Test Environment": "Production",
    "Browser": "Chromium",
    "Platform": process.platform,
    "Executed": "Local"
  }
};

reporter.generate(options);

console.log(`🚀 Cucumber HTML report ${outputPath} generated successfully 👍`);

const openCommand = process.platform === 'win32' ? `start ""` : process.platform === 'darwin' ? 'open' : 'xdg-open';

exec(`${openCommand} "${outputPath}"`, (error) => {
  if (error) {
    console.error('Failed to open report automatically:', error);
  }
});