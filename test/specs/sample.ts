/**
 * test with page objects
 */
import LoginPage from '../pageobjects/login.page'
import SecurePage from '../pageobjects/secure.page'

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open()
        console.log('url launched');
        await LoginPage.login('tomsmith', 'SuperSecretPassword!')
        console.log('logged in success');
        await expect(SecurePage.flashAlert).toBeExisting()
        console.log('flash alert is exist');
        await expect(SecurePage.flashAlert).toHaveTextContaining(
            'You logged into a secure area!')
        console.log('Validation done');

            // await LoginPage.open()
            // //await expect(browser.getTitle()).toBeExisting()
            // let title: any = await browser.getTitle();
            // console.log('browser title -- '+ title);
            // await expect('Google').toHaveTextContaining(
            //    'Google')
    })
})

