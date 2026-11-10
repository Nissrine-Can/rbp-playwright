import { test, expect } from '@playwright/test';

test('home page shows the hotel and its rooms @smoke', async ({ page, request }) => {
  const rooms = (await (await request.get('/api/room')).json()).rooms;

  await page.goto('/');
  await expect(page).toHaveTitle(/Restful-booker-platform demo/i);

  for (const room of rooms) {
    await expect(page.getByText(room.type, { exact: false }).first()).toBeVisible();
  }
});