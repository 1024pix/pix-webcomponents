import { newSpecPage } from '@stencil/core/testing';
import { HelloWorld } from './hello-world';

describe('hello-world', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [HelloWorld],
      html: '<hello-world></hello-world>',
    });
    expect(root).toEqualHtml(`
      <hello-world>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </hello-world>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [HelloWorld],
      html: `<hello-world first="Stencil" last="'Don't call me a framework' JS"></hello-world>`,
    });
    expect(root).toEqualHtml(`
      <hello-world first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </hello-world>
    `);
  });
});
