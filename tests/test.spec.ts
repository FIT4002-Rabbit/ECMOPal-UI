import { test, expect } from '@playwright/test';
import type { PatientData } from '../src/types/PatientData';

test('has title', async ({ page }) => {
  await page.goto('/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/ECMO PAL Lite/);
});

test('Check that clicking "no" button deselects "yes" button', async ({ page }) => {
  await page.goto('/');

  const yesButton = page.getByRole("radio").nth(0);
  const noButton = page.getByRole("radio").nth(1);

  await expect(yesButton).toBeChecked();  // check "yes" is checked by default
  await expect(noButton).not.toBeChecked();  // check "no" is unchecked by default

  await noButton.check();  // click "no" button
  
  // Check that "no" button is checked and "yes" button is unchecked
  await expect(yesButton).not.toBeChecked();
  await expect(noButton).toBeChecked();

  await yesButton.check();  // click "yes" button

  // Check that "yes" button is checked and "no" button is unchecked
  await expect(noButton).not.toBeChecked();
  await expect(yesButton).toBeChecked();
});

test('Check "yes" button is checked by default', async ({ page }) => {
  await page.goto('/');

  const yesButton = page.getByRole("radio").nth(0);
  const noButton = page.getByRole("radio").nth(1);

  await expect(yesButton).toBeChecked();  // check "yes" is checked by default
  await expect(noButton).not.toBeChecked();  // check "no" is unchecked by default
});

test('Check slider min and max values', async ({ page }) => {
  await page.goto('/');

  const slider = page.getByTestId("Intubation Time (Hours) slider");
  const input_box = page.getByTestId("Intubation Time (Hours) number");

  const box = await slider.boundingBox();

  await slider.click({
    position: {
      x: box?.width ? box.width-10 : 0,
      y: box?.height ? box.height/2 : 0
    }
  });
  
  await expect(slider).toHaveValue("672");

  await slider.click({
    position: {
      x: 1,
      y: box?.height ? box.height/2 : 0
    }
  });

  await expect(slider).toHaveValue("1");
});