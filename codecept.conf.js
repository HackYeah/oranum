exports.config = {
  output: './output',
  helpers: {
    WebDriver: {
      url: 'https://www.oranum.com',
      browser: 'chrome'
    }
  },
  include: {
    I: './steps_file.js',
    mainPage: './pages/mainPage.js',
    livestreamPage: './pages/livestreamPage.js'
  },
  mocha: {},
  bootstrap: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: './features/*.feature',
    steps: ['./step_definitions/livestreamPageSteps.js', './step_definitions/mainPageSteps.js']
  },
  plugins: {
    wdio: {
      enabled: true,
      services: ['selenium-standalone']
    },
    allure: {},
    screenshotOnFail: {
      enabled: true
    },
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true
    },
    tryTo: {
      enabled: true
    }
  },
  tests: './*_test.js',
  name: 'oranum'
}