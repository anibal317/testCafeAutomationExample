import { Selector } from 'testcafe';
import LoginPage from '../pages/LoginPage';
import HomePage from '../pages/HomePage';

fixture`Login`.page`https://www.saucedemo.com/`;

const loginPage = new LoginPage();
const homePage = new HomePage();

test('Iniciar sesión exitosamente', async (t) => {
    await loginPage.login('standard_user', 'secret_sauce');
    await t.expect( await homePage.getWelcomeMessage()).eql('Swag Labs');
});
