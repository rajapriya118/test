module.exports = {
  default: {
    require: [
      'support/world.js',
      'support/hooks.js',
      'steps/**/*.js'
    ],
    format: [
      'progress',
      'html:reports/cucumber-report.html',
      'json:reports/cucumber_report.json'
    ],
    publishQuiet: true,
    timeout: 120000
  }
};
