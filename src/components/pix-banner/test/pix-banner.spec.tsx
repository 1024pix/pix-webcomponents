import { newSpecPage } from '@stencil/core/testing';
import { PixBanner } from '../pix-banner';

describe('pix-banner', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PixBanner],
      html: `<pix-banner></pix-banner>`,
    });
    expect(page.root).toEqualHtml(`
      <pix-banner>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </pix-banner>
    `);
  });
});
