import type { StorybookConfig } from "@storybook/web-components-vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-a11y",
    "@chromatic-com/storybook",
  ],
  framework: {
    name: "@storybook/web-components-vite",
    options: {},
  },
  async viteFinal(config, { configType }) {
    // customize the Vite config here
    if (config.optimizeDeps) {
      config.optimizeDeps.include = [
        ...(config.optimizeDeps?.include ?? []),
        "@storybook/web-components",
      ];
      config.optimizeDeps.exclude = [
        ...(config.optimizeDeps?.exclude ?? []),
        "lit",
        "lit-html",
      ];
    }
    // return the customized config
    return config;
  },
};
export default config;
