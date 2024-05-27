# ProjectDemo
Playwright automation code is placed in the below
Path : tests\Saucedemo.spec.js
Execution command : npx playwright test --headed (for visual execution)
Execution command : npx playwright test --headed (for Hidden execution)

/**Project has been developed using Page object Model**/

Below are the 2 page file which has location and functions
Path : pages\Saucedemohomepage.js
Path : pages\Saucedemologinpage.js

**/**Project data is pulled from .csv and controled in the code**/**

All the testdata is fetched from .csv file which is kept in below patch under datatables folder
 Path : .*\playwright_sauce\datatables\csv

// Execution will generate both Report [Set up is there in playwright.config.js]
After execution test result stores in below path [HTML]
 path : .*\playwright_sauce\test-results
 
After execution test result stores in below path [allure]
 C:\Users\492937\Projects\playwright_sauce\my-allure-results
