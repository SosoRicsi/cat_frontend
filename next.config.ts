import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "api.celom-a-tortenelem.eu",
				port: "",
				pathname: "/**"
			},
			{
				protocol: "https",
				hostname: "placehold.co",
				port: "",
				pathname: "/**"
			}
		],
		dangerouslyAllowSVG: true
	}
};

export default nextConfig;
