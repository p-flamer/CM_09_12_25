// @ts-check
import { test, expect } from '@playwright/test';
import { MainPage } from '../pages/main-page';
import { ProductsPage } from '../pages/products-page';
import { Cart } from '../pages/cart';

test('full e2e path', async ({ page }) => {
  const mainPage = new MainPage(page);
  const productsPage = new ProductsPage(page);
  const cart = new Cart(page);

  await mainPage.navigateTo();

  await mainPage.verifyMainPageTitle();
  await mainPage.verifyMainPageHeading();
  await mainPage.verifyProductsGridVisible();

  await mainPage.openSecondProductsPage();

  await productsPage.checkSecondProductPageUrl();
  await productsPage.verifySecondProductsPageHeading();

  await cart.addProductFromProductPageToCart();

  await cart.openCart();
  await cart.checkIfProductIsVisibleInCart();

  await cart.buyProductInCart();
});

