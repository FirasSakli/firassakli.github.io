const repo = "portfolio"; // replace with your repo name

const nextConfig = {
	output: "export",
	images: { unoptimized: true },
	trailingSlash: true,
	basePath: `/${repo}`,
	assetPrefix: `/${repo}/`,
};

export default nextConfig;
