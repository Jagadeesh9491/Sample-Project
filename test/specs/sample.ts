/**
 * test with page objects
 */
import LoginPage from '../pageobjects/login.page'
import SecurePage from '../pageobjects/secure.page'

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open()

        await LoginPage.login('tomsmith', 'SuperSecretPassword!')
        await expect(SecurePage.flashAlert).toBeExisting()
        await expect(SecurePage.flashAlert).toHaveTextContaining(
            'You logged into a secure area!')

            // await LoginPage.open()
            // //await expect(browser.getTitle()).toBeExisting()
            // let title: any = await browser.getTitle();
            // console.log('browser title -- '+ title);
            // await expect('Google').toHaveTextContaining(
            //    'Google')
    })
})

