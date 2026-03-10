const isProd = process.env.NODE_ENV === "production";
const repoName = "REPO_NAME"; // replace with your actual repo name

const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: isProd ? `/${repoName}` : "",
  assetPrefix: isProd ? `/${repoName}/` : "",
};

module.exports = nextConfig;