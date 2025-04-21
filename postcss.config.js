module.exports = {
  plugins: {
    "@stylexjs/postcss-plugin": {
      filePath: "./src/styles/stylex.css",
      rootDir: __dirname,
      useCSSLayers: true,
      dev: process.env.NODE_ENV === "development",
      test: process.env.NODE_ENV === "test",
      runtimeInjection: process.env.NODE_ENV === "development",
      genConditionalClasses: true,
      treeshakeCompensation: true,
    },
    autoprefixer: {},
  },
}; 