import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

// A small, self-contained explainer wiki. No external fonts/assets so it works
// fully offline; tooltips are pure CSS.
export default defineConfig({
  integrations: [mdx()],
});
