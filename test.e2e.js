const { expect } = require('@wdio/globals')
const LoginPage = require('./test/pageobjects/login.page')
const SecurePage = require('./test/pageobjects/secure.page')

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        console.log('here')
        await driver.launchApp();
        await driver.pause(15000)
    })
})

