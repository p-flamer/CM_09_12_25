// @ts-check
import { test, expect } from '@playwright/test';
import { Login } from '../pages/login';

test.beforeEach(async ({ page }) => {
    const login = new Login(page);
    await login.navigateTo();
});

test('login as admin', async ({ page }) => {
    const login = new Login(page);

    await login.logInUserWithCredential('admin', 'admin');
    await login.returnLoginAdminMessage();

    await login.clickLogout();
    await login.returnLogoutMessage();
});

test('login as user', async ({ page }) => {
    const login = new Login(page);

    await login.logInUserWithCredential('user', 'password');
    await login.returnLoginUserMessage();

    await login.clickLogout();
    await login.returnLogoutMessage();
});