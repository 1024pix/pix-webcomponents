import { newE2EPage } from '@stencil/core/testing';

describe('pix-banner', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<pix-banner></pix-banner>');

    const element = await page.find('pix-banner');
    expect(element).toHaveClass('hydrated');
  });
});
