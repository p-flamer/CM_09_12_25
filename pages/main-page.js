import { expect } from '@playwright/test';

export class MainPage {
    constructor(page) {
        this.page = page;
        this.url = '/';
        this.mainPageTitle = 'Testowy Sklep – Strona główna';
        this.mainPageHeading = this.page.getByRole('heading', { name: 'Strona główna' });
        this.productsGrid = this.page.getByTestId('products-grid');
        this.secondProductButton = this.page.getByTestId('product-title-2');
    }

    async navigateTo() {
        await this.page.goto(this.url);
    }

    async verifyMainPageTitle() {
        await expect(this.page).toHaveTitle(this.mainPageTitle);
    }

    async verifyMainPageHeading() {
        await expect(this.mainPageHeading).toBeVisible();
    }

    async verifyProductsGridVisible() {
        await expect(this.productsGrid).toBeVisible();
    }

    async openSecondProductsPage() {
        await expect(this.secondProductButton).toHaveText('Eliksir Energii');
        await this.secondProductButton.click();
    }

}

module.exports = { MainPage }; 