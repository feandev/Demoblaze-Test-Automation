# Test automation project of a demo product store

This is my own test automation project based on `Playwright` and `TypeScript`.
The tested page is a fake product store. 

## Links

- test site https://www.demoblaze.com/index.html

## Tests

Automation consists four functionall tests:

- sign up
- login
- select product
- place an order

## Commands

- run tests without browser GUI  
  `npm run test`
- run tests with browser GUI  
  `npm run test:headed`
- run tests form exact file  
  `npm run test:login:headed`
- record tests for given site  
  `npm run test:record`
- view report  
  `npm run report`
- run Trace Viewer on zip file  
  `npm run trace:zip`

## VSC

If you use VSCode I recommend using `Playwright Test extension` and run tests from VSC
