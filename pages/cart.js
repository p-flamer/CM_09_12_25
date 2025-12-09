import { expect } from '@playwright/test';

export class Cart {
    constructor(page) {
        this.page = page;
        this.url = 'products/p2.html';
        this.addToCartButton = this.page.getByTestId('buy-btn-2');
        this.successAddToCartToast = this.page.getByText('Dodano do koszyka: Eliksir');
        this.openCartButton = this.page.getByTestId('cart-button');
        this.cartPanel = this.page.getByTestId('cart-panel');
        this.listOfProductsCart = this.page.getByTestId('cart-list');
        this.valueOfSecondProduct = this.page.getByText('Eliksir Energii (p2)');
        this.buyButton = this.page.getByTestId('cart-buy');
        this.successBuyToast = this.page.getByText('Dodano do koszyka: Eliksir');
    }

    async addProductFromProductPageToCart() {
        await this.addToCartButton.click();
        await expect(this.successAddToCartToast).toBeVisible();
    }

    async openCart() {
        await this.openCartButton.click();
        await expect(this.cartPanel).toBeVisible();
    }

    async checkIfProductIsVisibleInCart() {
        await expect(this.listOfProductsCart).toBeVisible();
        await expect(this.valueOfSecondProduct).toBeVisible();
    }

    async buyProductInCart() {
        await this.buyButton.click();
        await expect(this.successBuyToast).toBeVisible();
    }
}

module.exports = { Cart }; 