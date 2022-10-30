const repo = "azizgharbi.github.io";
const assetPrefix = `/${repo}/`;
const basePath = `/${repo}`;

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  assetPrefix: assetPrefix,
  basePath: basePath,
};

module.exports = nextConfig;
