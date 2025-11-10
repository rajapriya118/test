# test
#Borrowing and Start over function
**Implementation Playwright + cucumber with Html report **
**Versions:**
Node v 20.19.5
npm v 11.0
cucumber v 9.4
playwright v 1.45

**Prerequities** 
Node version to be 18 to 20 where v 25 doesn't support the playwright as well as cucumber 
node v18 is under maintance so downloaded v20
npm version from cmd
-----Borrowing and start over fucntions-----
1.Create the folder and open that folder in VScode
2.Create the project step folder and files 
playwright-cucumber-test/
├── features/
│   ├── borrowing.feature
│   ├── startover.feature
│   ├── step_definitions/
│   │   ├── common.steps.js
│   │   ├── borrowing.steps.js
│   │   └── startover.steps.js
│   └── support/
│       └── world.js
├── package.json
└── reports/   
3.Open the directory in terminal to install dependencies 
-->playwright
-->cucumber
-->cucumber-html-report
4. By using npm install npx playwright install
5. After proper set up run code
npm run test
npm run report
6.Execution part :(Given,When,Then,And)
   1.Browser launch 
   2.Check the borrowing inputs as per given inputs
   3.Verify that form get reset once click on startover
   4.Pagelaods and browser get closed 
   5.Get html report for all executed secanrios in html format.
7. This execution run successfully from cmd for CI/CD 
8. below mentioned execution for **Startover** 
[execution.pdf](https://github.com/user-attachments/files/23462842/execution.pdf)
[startover output.pdf](https://github.com/user-attachments/files/23462833/startover.output.pdf)

--------Challenges faced during execution----
1.Initial had the vs code version issue then v1.105.1
2. From vs code install downlaod the playwright from market extenstion is doesn't installed
3. Timeout error (cucumber)
4.iframe time out though startover devloped in angluar its difficult to run
5.Locator for elements due to iframe
6.Versioncontrol for node,cucumber and playwright intergration though node v25 is not supported but whenever we install node v20 manually after some execution npm install it get autoupdated.
7.playwright get duplicate error 
8.Startover button not get resetting due to ifram and old locator


As per mentioned points find the failed test cases 

[when error.pdf](https://github.com/user-attachments/files/23463419/when.error.pdf)
[error5.pdf](https://github.com/user-attachments/files/23463418/error5.pdf)
[error4-timeout.pdf](https://github.com/user-attachments/files/23463417/error4-timeout.pdf)
[error3.pdf](https://github.com/user-attachments/files/23463416/error3.pdf)
[error2.pdf](https://github.com/user-attachments/files/23463415/error2.pdf)
[error1.pdf](https://github.com/user-attachments/files/23463412/error1.pdf)
[error timeout 120000ms.pdf](https://github.com/user-attachments/files/23463410/error.timeout.120000ms.pdf)
[ambiguous.pdf](https://github.com/user-attachments/files/23463409/ambiguous.pdf)

