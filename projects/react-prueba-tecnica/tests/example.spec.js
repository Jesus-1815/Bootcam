// @ts-check
import { test, expect } from '@playwright/test'

const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'

test('app shows random fact and image', async ({ page }) => {
  await page.goto('/') // baseURL ya está configurado en playwright.config.js

  const text = await page.locator('p') // Selector de párrafo genérico
  const image = await page.getByRole('img')

  const textContent = await text.textContent()
  const imageSrc = await image.getAttribute('src')
  console.log({textContent, imageSrc} )

  expect(textContent?.length).toBeGreaterThan(0)
  expect(imageSrc?.startsWith(CAT_PREFIX_IMAGE_URL)).toBeTruthy()
})



