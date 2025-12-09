import { expect } from '@playwright/test';

export class ProductsPage {
    constructor(page) {
        this.page = page;
        this.url = 'products/p2.html';
        this.secondProductPageHeading = this.page.getByRole('heading', { name: 'Eliksir Energii' });
    }

    async checkSecondProductPageUrl() {
        await expect(this.page).toHaveURL(this.url);
    }

    async verifySecondProductsPageHeading() {
        await expect(this.secondProductPageHeading).toBeVisible();
    }
}

module.exports = { ProductsPage }; 