/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: [
    "@bonterratech/stitch-tokens",
    "@bonterratech/stitch-extension",
  ],
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
};

module.exports = nextConfig; 