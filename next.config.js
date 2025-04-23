/** @type {import('next').NextConfig} */
const path = require('path');
const stylexPlugin = require('@stylexswc/nextjs-plugin');
const postcss = require('postcss');
const autoprefixer = require('autoprefixer');

const nextConfig = {
  transpilePackages: [
    // "@bonterratech/stitch-tokens",
    // "@bonterratech/stitch-extension",
    "@simplerepo/simplerepo",
  ],
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
};

const stylexOptions = {
  rootDir: __dirname,
  useCSSLayers: true, // Replicates option from old postcss.config.js
  // Options passed to the StyleX Rust compiler
  rsOptions: {
    dev: process.env.NODE_ENV === 'development', // Replicates option
    // runtimeInjection: Not directly supported? Defaults might be sufficient.
    genConditionalClasses: true, // Replicates option
    treeshakeCompensation: true, // Replicates option
    unstable_moduleResolution: {
      type: 'commonJS', // Assuming CommonJS based on your setup
      rootDir: __dirname,
    },
    // Add aliases if needed, e.g.:
    // aliases: {
    //  '@/*': [path.join(__dirname, 'src/*')],
    // },
  },
  // Function to apply PostCSS transformations (like Autoprefixer)
  transformCss: async (css) => {
    const result = await postcss([autoprefixer]).process(css, {
      from: undefined, // Avoids source map warnings
    });
    return result.css;
  },
};

module.exports = stylexPlugin(stylexOptions)(nextConfig); 