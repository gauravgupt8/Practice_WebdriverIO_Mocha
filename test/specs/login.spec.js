const LoginPage = require('../pages/login.page');
describe('Login', () => {

    it('Login Test', async () => { 
        browser.url('https://parabank.parasoft.com/parabank/index.htm?ConnType=JDBC')
        await LoginPage.login('Test01_GG', 'asdfghjkl');
        browser.pause(30000)
        
    });
});