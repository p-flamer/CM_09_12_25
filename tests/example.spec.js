// @ts-check
import { test, expect } from '@playwright/test';

test('full e2e path', async ({ page }) => {
  await page.goto('/');

  await expect(page).toHaveTitle('Testowy Sklep – Strona główna');
  await expect(page.getByRole('heading', { name: 'Strona główna' })).toBeVisible();

  await expect(page.getByTestId('product-title-2')).toHaveText('Eliksir Energii');
  await page.getByTestId('product-title-2').click();

  await expect(page).toHaveURL('products/p2.html');
  await expect(page.getByRole('heading', { name: 'Eliksir Energii' })).toBeVisible();

  await page.getByTestId('buy-btn-2').click();
  await expect(page.getByText('Dodano do koszyka: Eliksir')).toBeVisible();

  await page.getByTestId('cart-button').click();
  await expect(page.getByTestId('cart-panel')).toBeVisible();
  await expect(page.getByText('Eliksir Energii (p2)')).toBeVisible();
  await page.getByTestId('cart-buy').click();

  await expect(page.getByText('sukces')).toBeVisible();
});

 