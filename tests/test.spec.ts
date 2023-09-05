import { test, expect, type Page } from '@playwright/test';

async function get_models(page: Page) {
	const OverlayButton = page.getByTestId("OverlayButton");
	await OverlayButton.click();
	page.route('*/**/models', async (route) => {
		const json = [
			{
				features: [
					'Year',
					'Arrest Ordinal',
					'BMI',
					'PO2',
					'SBP',
					'IntubationToTimeOnHours',
					'AgeYears',
					'Lactate'
				],
				name: 'Lite',
				order: 0
			},
			{
				features: [
					'Year',
					'Chronic Lung Disease',
					'Chronic Heart Failure',
					'Coronary Artery Disease',
					'PE ECLS Ltx',
					'Vasopressors/Inotropes',
					'Pre ECMo C/T Surg',
					'pH',
					'Bicarbonate',
					'PCO2',
					'HCO3',
					'AKI',
					'Renal Replacement Therapy',
					'Arrest Ordinal',
					'BMI',
					'RateBreathsSec',
					'FiO2',
					'PO2',
					'SBP',
					'IntubationToTimeOnHours',
					'AgeYears',
					'Lactate',
					'Pulmonary Embolism'
				],
				name: 'Full',
				order: 1
			}
		];
		await route.fulfill({ json });
	});
}

test('has title', async ({ page }) => {
	await page.goto('/');

	// Expect a title "to contain" a substring.
	await expect(page).toHaveTitle(/ECMO PAL Lite/);
});

test('Check that clicking "no" button deselects "yes" button', async ({ page }) => {
	await get_models(page);

	await page.goto('/');

	const responsePromise = page.waitForResponse('*/**/models');
	await responsePromise;

	const yesButton = page.getByTestId('yes');
	const noButton = page.getByTestId('no');

	await expect(yesButton).toHaveAttribute('value', '0');
	await expect(noButton).toHaveAttribute('value', '1');

	await yesButton.click(); // click "yes" button

	// Check that "yes" button is checked and "no" button is unchecked
	await expect(yesButton).toHaveAttribute('value', '1');
	await expect(noButton).toHaveAttribute('value', '0');

	await noButton.click(); // click "no" button

	// Check that "no" button is checked and "yes" button is unchecked
	await expect(yesButton).toHaveAttribute('value', '0');
	await expect(noButton).toHaveAttribute('value', '1');
});

test('Check "no" button is checked by default', async ({ page }) => {
	await get_models(page);

	await page.goto('/');

	const responsePromise = page.waitForResponse('*/**/models');
	await responsePromise;

	const yesButton = page.getByTestId('yes');
	const noButton = page.getByTestId('no');

	await expect(yesButton).toHaveAttribute('value', '0');
	await expect(noButton).toHaveAttribute('value', '1');
});

test('Check slider min and max values', async ({ page }) => {
	await get_models(page);
	await page.goto('/');

	const responsePromise = page.waitForResponse('*/**/models');
	await responsePromise;

	const slider = page.getByTestId('Pre-ECMO Intubation Time (hours) slider');

	const box = await slider.boundingBox();

	await slider.click({
		position: {
			x: box?.width ? box.width - 10 : 0,
			y: box?.height ? box.height / 2 : 0
		}
	});

	await expect(slider).toHaveValue('500');

	await slider.click({
		position: {
			x: 1,
			y: box?.height ? box.height / 2 : 0
		}
	});

	await expect(slider).toHaveValue('0');
});

test('Text fields limited to numeric inputs', async ({ page }) => {
	await get_models(page);
	await page.goto('/');

	const responsePromise = page.waitForResponse('*/**/models');
	await responsePromise;

	const input_box = page.getByTestId('Pre-ECMO Intubation Time (hours) number');

	await input_box.fill('52');

	await expect(input_box).toHaveValue('52');

	await expect(input_box).toHaveAttribute('type', 'number');
});
