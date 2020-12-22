Hi,

Steps:
1. Clone repository to your local environment
2. In terminal execute "npm install" in the root directory of the cloned project
3. Run "npx codeceptjs run --plugins allure"
4. After completion you can lauch Allure server and see the report: npm run report


Notes:
- Tests are run in "Chrominium" browser by default
- The structure of the project is following:
     - feature files can be found in feature folder;
     - locators for elements were separated in pages folder (as project grow, functions on elements can be also move to page object);
     - step definitions can be found in step_definitions folder
- Some tests are flaky so I.wait was used which is not optimal and must be improved



Locally I was running it with Webdriver and chrome browser. But for more convenient presentation chrominium was chosen. 
If webdriver with chrome is prefferable, you need to have Selenium running and installed Chromedriver. codecept.conf.js should be modified with 
WebDriver: {
      url: 'https://www.oranum.com',
      browser: 'chrome'
    } 
instead of: 
 Playwright: {
      url: 'https://www.oranum.com',
      show: true,
      browser: 'chromium'
    }