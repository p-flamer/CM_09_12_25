import { expect } from '@playwright/test';

export class Login {
    constructor(page) {
        this.page = page;
        this.url = '/';
        this.usernameField = this.page.getByTestId('login-username');
        this.passwordField = this.page.getByTestId('login-password');
        this.loginButton = this.page.getByTestId('login-button');
        this.logoutButton = this.page.getByTestId('logout-button');
        // this.welcomeMessage = this.page.getByTestId('welcome-msg');
        // this.logoutMessage = this.page.locator('#login-status');
        this.loginAdminMessage = this.page.getByText('Witaj: admin');
        this.loginUserMessage = this.page.getByText('Witaj: user');
        this.logoutMessage = this.page.getByText('Wylogowano');
    }
    
    async navigateTo() {
        await this.page.goto(this.url);
    }

    async fillUsernameField(username) {
        await this.usernameField.fill(username);
    }

    async fillPasswordField(password) {
        await this.usernameField.fill(password);
    }

    async clickLogin() {
        await this.loginButton.click();
    }

    async clickLogout() {
        await this.logoutButton.click();
    }

    async logInUserWithCredential(username, password) {
        await this.fillUsernameField(username);
        await this.fillPasswordField(password);
        await this.clickLogin();
    }

    async returnLoginAdminMessage() {
        await expect(this.loginAdminMessage).toBeVisible();
    }

    async returnLoginUserMessage() {
        await expect(this.loginUserMessage).toBeVisible();
    }

    async returnLogoutMessage() {
        await expect(this.logoutMessage).toBeVisible();
    } 


}

module.exports = { Login }; 