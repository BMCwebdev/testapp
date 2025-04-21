module.exports = {
  presets: ["next/babel"],
  plugins: [
    [
      "@stylexjs/babel-plugin",
      {
        dev: process.env.NODE_ENV === "development",
        test: process.env.NODE_ENV === "test",
        runtimeInjection: process.env.NODE_ENV === "development",
        genConditionalClasses: true,
        treeshakeCompensation: true,
        unstable_moduleResolution: {
          type: "commonJS",
          rootDir: __dirname,
        },
      },
    ],
  ],
}; 